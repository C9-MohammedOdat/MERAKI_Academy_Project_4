import React,{useState} from 'react'

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
  return (
    <div className='Location'>
        <button onClick={getLocation}>Get Location</button>
        <h1>coordinates</h1>
        <p>{status}</p>
        {lat&&<p>latitude: {lat}</p>}
        {lng&&<p>Longitude: {lng}</p>}
    </div>
  )
}

export default Location