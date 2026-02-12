import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Map.css";

function Map() {
  console.log("MAP COMPONENT RENDERED");

  return (
    <MapContainer
      center={[28.1235, -15.4363]}
      zoom={13}
      className="leaflet-map"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[28.1235, -15.4363]}>
        <Popup>EduMarketing Office</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
