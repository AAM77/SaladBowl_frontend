import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';



const SaladBars = (props) => {

  const mapStyles = {
    width: '500px',
    height: '500px',
  };

  return(
    <div>
      <h1>SALAD BARS NEAR YOU</h1>

      <Map
        google={props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={{ lat: 47.444, lng: -122.176}}
      />

      <Marker position={{ lat: 48.00, lng: -122.00}} />
    </div>
  )
}

const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

export default GoogleApiWrapper({ apiKey: API_KEY })(SaladBars);
