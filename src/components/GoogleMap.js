import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import axios from 'axios';

const containerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
  lat: 25.206174586741064,
  lng: 55.28861136129412,
};

// Define an array of marker positions representing different areas in Dubai


const Map = () => {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCx4uSvb-ctmEbEUpP_6pPrexO9q3wMaXE", v: "weekly"
  });
  const [bannerData, setBannerData] = useState([]);
  const [markerPositions, setMarkerPositions] = useState([]);
  const CurrentDomain = localStorage.getItem("DOMAIN")  

  useEffect(() => {
    axios.get(`https://salwaproperties.com/community_web/api/homepage_map_data/${CurrentDomain}?X-API-KEY=3064c564d11154da943a1fd968822b6c`)
      .then(response => {
        // Assuming response.data is an array of objects containing latitude and longitude fields
        setBannerData(response?.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [CurrentDomain]);

  useEffect(() => {
    // Map latitude and longitude data from bannerData to markerPositions
    const updatedMarkerPositions = bannerData?.map(item => ({
      lat: parseFloat(item.latitude), // Convert latitude to float
      lng: parseFloat(item.longitude) // Convert longitude to float
    }));
    setMarkerPositions(updatedMarkerPositions);
  }, [bannerData]);

  console.log(markerPositions, "Updated Marker Positions");

//  const markerPositions = [
//   { lat: 25.276987, lng: 55.296249 }, // Dubai Marina
//   { lat: 25.2048, lng: 55.2708 },     // Downtown Dubai
//   { lat: 25.267, lng: 55.308 },       // Jumeirah Beach
//   { lat: 25.2697, lng: 55.3095 },     // Burj Khalifa
//   { lat: 25.0657, lng: 55.1713 },     // Dubai Creek
//   { lat: 25.0651, lng: 55.1386 },     // Deira
//   {lat: 25.06553, lng: 55.32276}
// ];

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={8}
    >
      {/* Render a Marker for each position */}
      {markerPositions.map((position, index) => (
        <Marker key={index} position={position} />
      ))}
    </GoogleMap>
  ) : <></>;
};

export default Map;
