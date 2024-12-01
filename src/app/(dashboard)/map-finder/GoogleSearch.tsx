"use client";

import { useState } from "react";
import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import { Input } from "@/components/ui/input";

const libraries: ("places")[] = ["places"]; // Specify libraries to load

function GoogleSearch() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "", // Use a public env variable
    libraries,
  });

  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);

  const handlePlaceChanged = (autocomplete: google.maps.places.Autocomplete | null) => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      if (place?.geometry?.location) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        setSelectedPlace(`Lat: ${lat}, Lng: ${lng}`);
      } else {
        setSelectedPlace("No valid place selected.");
      }
    }
  };

  if (!isLoaded) {
    return <div>Loading Google Maps API...</div>;
  }

  return (
    <div className="flex flex-col gap-2 mb-4">
      <Autocomplete>
        <Input
          type="text"
          placeholder="Search for a location"
          className="border rounded-lg p-2 w-full"
        />
      </Autocomplete>
      {selectedPlace && (
        <div className="mt-2 text-sm text-gray-700">
          <strong>Selected Location:</strong> {selectedPlace}
        </div>
      )}
    </div>
  );
}

export default GoogleSearch;
