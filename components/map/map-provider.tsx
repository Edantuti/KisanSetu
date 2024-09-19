"use client";
import { createContext, useState, useRef, useContext, ReactNode } from "react";
import { Map } from "leaflet";
const LocationContext = createContext<any>(null);

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState<string>("varanasi");
  const map = useRef<Map | null>(null);
  return (
    <LocationContext.Provider value={{ location, setLocation, map }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  return useContext(LocationContext);
};
