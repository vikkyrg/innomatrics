import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapLeaflet.css'; // Create a separate CSS file for styling
import L from 'leaflet';

const MapLeaflet = () => {
  const fixedLocation = [12.9163043,77.6076341]; // Fixed location coordinates
  const [userLocation, setUserLocation] = useState(null);
  const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });
  const blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

  useEffect(() => {
    // Get user's geolocation
    navigator.geolocation.getCurrentPosition(
      (geoLocation) => {
        const { latitude, longitude } = geoLocation.coords;
        setUserLocation({ lat: latitude, lng: longitude }); 
      },
      (error) => console.error('Error getting geolocation:', error),
      { enableHighAccuracy: true }
    );
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const handleMarkerClick = () => {
    const [lat, lng] = fixedLocation;
    const description = "Description of the fixed location";

    // Open Google Maps URL in a new tab
    window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}&query_place_id=${description}`);
  };

  return (
    <MapContainer
      center={fixedLocation} // Set the center to the fixed location
      zoom={13}
      className="custom-map-container"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={fixedLocation} icon={redIcon} eventHandlers={{ click: handleMarkerClick }}>
        <Popup>Fixed Location</Popup>
      </Marker>
      {userLocation && (
        <Marker position={userLocation} icon={blueIcon}>
          <Popup>User Location</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default MapLeaflet;
