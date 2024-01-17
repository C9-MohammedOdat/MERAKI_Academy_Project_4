import React,{useState} from 'react'
import GoogleMapReact from 'google-map-react';
const Location = () => {
    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)
    const [status, setStatus] = useState(null)
    const getLocation=()=>{
        if(!navigator.geolocation){
            setStatus("Geolocation is not supported by your browser")
        }else{
            setStatus("Locating...")
            navigator.geolocation.getCurrentPosition(
                (position)=>{
                    setStatus(null)
                    setLat(position.coords.latitude)
                    setLng(position.coords.longitude)
                },
                ()=>{
                    setStatus("Unable to retrieve your location")

                }
            )
        }
    }
    const handleApiLoaded = (map, maps) => {
        // use map and maps objects
      };
      const defaultProps = {
        center: {
          lat: 32.569926,
          lng: 35.8633783
        },
        zoom: 11
      };
  return (
    <div style={{height:"50vh"}}>
    <GoogleMapReact
   bootstrapURLKeys={{ key: "AIzaSyBW1nDKAK6Pttb8-Hwxqi28KxCjGlIUxTc" }}
   defaultCenter={defaultProps.center}
   defaultZoom={defaultProps.zoom}
   yesIWantToUseGoogleMapApiInternals={true}
   onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
 >
    
   {/* <AnyReactComponent
     lat={59.955413}
     lng={30.337844}
     text="My Marker"
   /> */}
 </GoogleMapReact>
  <div className='Location'>
        <button onClick={getLocation}>Get Location</button>
        <p>{status}</p>
        {lat&&<p>latitude: {lat}</p>}
        {lng&&<p>Longitude: {lng}</p>}
    </div>
</div>
  )
}

export default Location