import React,{useContext, useState} from 'react'
import GoogleMapReact from 'google-map-react';
import Button from 'react-bootstrap/esm/Button';
import axios from 'axios';
import { LoginContext } from '../../../../../App';
// import "./location.css"
const Location = () => {
  const {userId,token}=useContext(LoginContext)
    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)
    const [status, setStatus] = useState(null)
    const sendLocation=()=>{
      axios.put(`http://localhost:5000/orders/${userId}`,{location:[lat,lng]},{ headers: { authorization: `Bearer ${token}` } }).then((result)=>{
        console.log(result);
      }).catch((err)=>{
        console.log(err);
      })
    }
    const getLocation=()=>{
        if(!navigator.geolocation){
            setStatus("Geolocation is not supported by your browser")
        }else{
            setStatus("Locating...")
            navigator.geolocation.getCurrentPosition(
                (position)=>{
                    setStatus(null)
                    console.log(typeof position.coords.latitude)
                    setLat(position.coords.latitude)
                    setLng(position.coords.longitude)
                },
                ()=>{
                    setStatus("Unable to retrieve your location")

                }
            )
        }
    }
  // const AnyReactComponent = ()=>{
  //   return (
  //     <div>
  //       <img className='pin' src='https://cdn-icons-png.flaticon.com/512/484/484167.png' style={{height:"15px",width:"15px"}}/>
  //     </div>
  //   )
  // }
    const handleApiLoaded = (map, maps) => {
        // use map and maps objects
        console.log(lat)
      };
      console.log(lat)
      
      const defaultProps = {
        center: {
          lat:lat,
          lng: lng
        },
        zoom: 16
      };
      
  return (
    <div style={{height:"50vh" ,}}>
      
   {lat&& <GoogleMapReact
   bootstrapURLKeys={{ key: "AIzaSyAZTsJ09SYo2PKzsR8sjk9jDgWMN8ltAZs" ,language:"en"}}
   defaultCenter={defaultProps.center}
   defaultZoom={defaultProps.zoom}
   yesIWantToUseGoogleMapApiInternals={true}
   onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
 >
    
   
 </GoogleMapReact>}
  <div className='Location'>
        <Button onClick={()=>{
          getLocation()
          lat&&
          console.log(lat);
          sendLocation()
        }}>Get Location</Button>
        {/* <p>{status}</p>
        {lat&&<p>latitude: {lat}</p>}
        {lng&&<p>Longitude: {lng}</p>} */}
    </div>
    {/* <AnyReactComponent
     lat={59.955413}
     lng={30.337844}
     text="My Marker"
   /> */}
</div>
  )
}

export default Location