import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const handleApiLoaded = (map, maps) => {
    // use map and maps objects
  };
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
   <div style={{height:"50vh"}}>
     <GoogleMapReact
    bootstrapURLKeys={{ key: "AIzaSyBW1nDKAK6Pttb8-Hwxqi28KxCjGlIUxTc" }}
    defaultCenter={defaultProps.center}
    defaultZoom={defaultProps.zoom}
    yesIWantToUseGoogleMapApiInternals={true}
    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
  >
    <AnyReactComponent
      lat={59.955413}
      lng={30.337844}
      text="My Marker"
    />
  </GoogleMapReact>
   </div>
  );
}