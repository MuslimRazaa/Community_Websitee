// import React, { useEffect, useState } from 'react';
// import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api';
// import { MarkerClusterer } from "@googlemaps/markerclusterer";

// const mapContainerStyle = {
//   width: '100%',
//   height: '400px'
// };

// const center = {
//   lat: 25.276987,
//   lng: 55.296249
// };

// // const markers = [
// //   {
// //     position: {lat: 25.276987, lng: 55.296249 },
// //     title: 'abc'
// //   },
// //   {
// //    position:  { lat: 25.2048, lng: 55.2708 },
// //    title: 'xyz'
// //   }
// // ]

// const markers = [
//   { lat: 25.276987, lng: 55.296249 },
//   { lat: 25.2048, lng: 55.2708 },
//   { lat: 25.1972, lng: 55.2744 },
//   { lat: 25.2048, lng: 55.2708 },
//   { lat: 25.2048, lng: 55.2708 },
//   { lat: 25.2048, lng: 55.2708 },
//   { lat: 25.276987, lng: 55.296249 },
//   { lat: 25.276987, lng: 55.296249 },
//   { lat: 25.276987, lng: 55.296249 },
//   {lat: 25.276987, lng: 55.296249 },
//   { lat: 25.276987, lng:55.296249 },
//   { lat: 25.276987, lng: 55.296249 },
//   { lat: 25.276987, lng: 55.296249 },
//   { lat: 25.276987, lng: 55.296249 },
//   { lat: 25.276987, lng: 55.296249 },
//   { lat: 25.276987, lng: 55.296249 },
//   // Add more marker coordinates as needed
// ];

// const ClusteredMap = () => {
//   const [map, setMap] = useState(null);

//   // useEffect(() => {
//   //   if (map && !map.clusterer) {
//   //     const markerCluster = new MarkerClusterer({
//   //       map,
//   //       gridSize: 60,
//   //       markers: markers.map((marker) => {
//   //         return new Marker({
//   //           position: marker,
//   //           map,
//   //           icon: {
//   //             url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
//   //             scaledSize: new window.google.maps.Size(40, 40)
//   //           }
//   //         });
//   //       })
//   //     });

//   //     setMap((prevMap) => {
//   //       return { ...prevMap, clusterer: markerCluster };
//   //     });
//   //   }
//   // }, [map]);


//   return (
//     <LoadScript
//       googleMapsApiKey="AIzaSyCx4uSvb-ctmEbEUpP_6pPrexO9q3wMaXE"
//       libraries={['places']}
//     >
//       <GoogleMap
//         mapContainerStyle={mapContainerStyle}
//         center={center}
//         zoom={10}
//         onLoad={(map) => {
//           setMap(map);
//          }}
//       >
//         {markers?.map((marker, index) => (
//           <Marker
//             key={index}
//             position={marker}
//             icon='http://maps.google.com/mapfiles/ms/icons/red-dot.png'
//             // icon={{
//             //   url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png',
//             //   scaledSize: new window.google.maps.Size(40, 40)
//             // }}
//           />
//         ))}
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default ClusteredMap;



import React from "react";
import "./base/map/mapstyle.css";
import GoogleMapReact from "google-map-react";
import MyMarker from "./base/map/MyMarker";

// implementation of this function is needed for codesandbox example to work
// you can remove it otherwise
// const distanceToMouse = (pt, mp) => {
//   if (pt && mp) {
//     // return distance between the marker and mouse pointer
//     return Math.sqrt(
//       (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
//     );
//   }
// };

const points = [
  { id: 1, title: "Round Pond", lat: 51.506, lng: -0.184 },
  { id: 2, title: "The Long Water", lat: 51.508, lng: -0.175 },
  { id: 3, title: "The Serpentine", lat: 51.505, lng: -0.164 }
];

export default function App() {
  return (
    <div className="App">
      <GoogleMapReact
        bootstrapURLKeys={{
          // remove the key if you want to fork
          key: "AIzaSyCx4uSvb-ctmEbEUpP_6pPrexO9q3wMaXE",
          language: "en",
          region: "US"
        }}
        defaultCenter={{ lat: 51.506, lng: -0.169 }}
        defaultZoom={15}
        // distanceToMouse={distanceToMouse}
      >
        {points.map(({ lat, lng, id, title }) => {
          return (
            <MyMarker  key={id} lat={lat} lng={lng} text={id} tooltip={title} />
          );
        })}
      </GoogleMapReact>
    </div>
  );
}
