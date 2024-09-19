"use client";
import { useEffect } from "react";
import { LatLngExpression, LatLngTuple } from "leaflet";
import { useMap } from "react-leaflet";
import { useLocation } from "./map-provider";

export const MapValue = new Map();
MapValue.set("varanasi", [25.3176, 82.9739]);
MapValue.set("visakhapatnam", [17.6868, 83.2185]);
MapValue.set("patna", [25.5941, 85.1376]);

export const MapNearValue = new Map();
MapNearValue.set("varanasi", [
  [25.3221, 82.9785],
  [25.3156, 82.9669],
  [25.3204, 82.9712],
  [25.3129, 82.9821],
  [25.3188, 82.975],
]);
MapNearValue.set("visakhapatnam", [
  [17.6901, 83.2223],
  [17.6839, 83.2167],
  [17.6882, 83.2201],
  [17.6855, 83.2152],
  [17.692, 83.2178],
]);
MapNearValue.set("patna", [
  [25.5965, 85.1401],
  [25.5922, 85.1356],
  [25.5939, 85.1384],
  [25.5951, 85.1425],
  [25.5914, 85.1369],
]);

export function ChangeView() {
  const { location } = useLocation();
  const map = useMap();
  useEffect(() => {
    map.setView(MapValue.get(location), map.getZoom());
    console.log(map.getCenter());
  }, [location, map]);
  return <></>;
}
