import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet icon issues with Webpack/Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// List of locations
const locations = [
  { name: "Dehradun", coords: [30.3165, 78.0322] },
  { name: "Delhi", coords: [28.6139, 77.209] },
  { name: "Lucknow", coords: [26.8467, 80.9462] },
  { name: "Siliguri", coords: [26.7271, 88.3953] },
  { name: "Kolkata", coords: [22.5726, 88.3639] },
  { name: "BBSR", coords: [20.2961, 85.8245] },
  { name: "Hyd'b'd", coords: [17.385, 78.4867] },
  { name: "Bengaluru", coords: [12.9716, 77.5946] },
  { name: "Tumkur", coords: [13.3409, 77.101] },
  { name: "Pune", coords: [18.5204, 73.8567] },
  { name: "Bhiwandi", coords: [19.2813, 73.0483] },
  { name: "Vapi", coords: [20.3719, 72.9043] },
  { name: "Dahej", coords: [21.7119, 72.5197] },
  { name: "Ahm’dabad", coords: [23.0225, 72.5714] },
  { name: "Bikaner", coords: [28.0229, 73.3119] },
];

const IndiaMap = () => {
  return (
      <MapContainer
    center={[22.9734, 78.6569]} // Center of India
    zoom={5.2}
    scrollWheelZoom={false} // 🔴 Disable scroll zoom
    style={{ height: "80vh", width: "80%" }}
      >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {locations.map((location, index) => (
        <Marker key={index} position={location.coords}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default IndiaMap;
