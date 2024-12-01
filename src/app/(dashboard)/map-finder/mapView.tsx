"use client";

import { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { LatLng } from "leaflet";
import L from "leaflet";
import { useMapContext } from "@/utils/MapProvider";
import { Button } from "@/components/ui/button"; // Assuming custom Button component
import { MapPin,LocateFixed } from "lucide-react"; // Icon component

// Fix for Leaflet marker icons
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Component for showing the user's location on the map
function LocationMarker() {
  const [position, setPosition] = useState<LatLng | null>(null);

  useMapEvents({
    locationfound(e) {
      setPosition(e.latlng); // Set the position to the found location
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}



// Main Map View Component
export const MapView = () => {
  const mapRef = useRef<any>(null); // Ref to store map instance
  const { searchResult } = useMapContext();
  
  const handleLocate = () => {
    if (!mapRef.current) return; // Ensure the map is initialized
    const map = mapRef.current;
    map.locate(); // Trigger geolocation
    map.on("locationfound", (e: any) => {
      map.flyTo(e.latlng, map.getZoom()); // Fly to user's location
    });
    map.on("locationerror", (e: any) => {
      alert("Unable to access your location. Please check your permissions.");
      console.error(e.message);
    });
  };

  return (
    <div style={{ position: "relative" }} className="z-10">
      {/* Locate Me Button */}
      <Button
        size="sm"
        variant="outline"
        className="my-2 border border-dashed"
        onClick={handleLocate}
      >
        <LocateFixed className="mr-2 size-4" aria-hidden="true" />
        Locate Me
      </Button>

      {/* Map */}
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        style={{ height: "500px", width: "100%" }}
        className="rounded-lg border shadow-lg"
        ref={mapRef} // Set the map instance to ref
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {searchResult && (
        <Marker position={searchResult}>
          <Popup>Search result</Popup>
        </Marker>
      )}
        <LocationMarker/>
      </MapContainer>
    </div>
  );
};
