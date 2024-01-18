"use client";

import { useState } from "react";
import { APIProvider, Map,AdvancedMarker,Pin, InfoWindow} from "@vis.gl/react-google-maps";

const TestLocation = () => {
  const position ={lat:53.54,lng:10}

  return (
   <APIProvider apiKey="AIzaSyARN9-KSQ5QmbKrmzyT5NGwaolZkjcurRA">
<div style={{height:"50vh",width:"100%"}}>
  <Map zoom={9} center={position}>
    <AdvancedMarker position={position} >
      <Pin background={""}/>
    </AdvancedMarker>
  </Map>
</div>
   </APIProvider>
  )
}

export default TestLocation