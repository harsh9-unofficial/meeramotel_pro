import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const MapComponent = () => {
  const position = [-33.0359, 137.5875]; // Exact coordinates

  return (
    <div className="relative w-full h-[400px]">
      {/* Ensure navbar stays on top */}
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"></div>

      {/* Map Container */}
      {/* <MapContainer
        center={position}
        zoom={15}
        className="h-full w-full rounded-md z-0"
        scrollWheelZoom={false} // Disable zoom on scroll
        dragging={false} // Disable dragging
        touchZoom={false} // Disable touch zoom
        doubleClickZoom={false} // Disable double-click zoom
        keyboard={false} // Disable keyboard controls
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            <a
              href="https://maps.app.goo.gl/2XR6q6a38ZEPS1qC8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Click to Open in Google Maps
            </a>
          </Popup>
        </Marker>
      </MapContainer> */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.9661761360157!2d137.57423667535534!3d-33.03102157355858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6abb50c52fce72ef%3A0x7dfce28c9ed6ec0c!2sMirambeena%20Motel!5e0!3m2!1sen!2sin!4v1741519221365!5m2!1sen!2sin"
        allowfullscreen=""
        loading="lazy"
        className="w-full h-full"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;
