"use client";

import React, { createContext, useState, useContext } from "react";
import { LatLng } from "leaflet";

type MapContextType = {
  searchResult: LatLng | null;
  setSearchResult: (position: LatLng) => void;
};

const MapContext = createContext<MapContextType | undefined>(undefined);

export const MapProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchResult, setSearchResult] = useState<LatLng | null>(null);

  return (
    <MapContext.Provider value={{ searchResult, setSearchResult }}>
      {children}
    </MapContext.Provider>
  );
};

export const useMapContext = () => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error("useMapContext must be used within a MapProvider");
  }
  return context;
};
