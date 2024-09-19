"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression, LatLngTuple } from "leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { useLocation } from "./map-provider";
import { useEffect } from "react";
import { ChangeView, MapNearValue, MapValue } from "./map-change";

interface MapProps {
  posix: LatLngExpression | LatLngTuple;
  zoom?: number;
}

const defaults = {
  zoom: 15,
};

const Map = (Map: MapProps) => {
  const { zoom = defaults.zoom, posix } = Map;
  const { location } = useLocation();
  return (
    <MapContainer
      center={posix}
      zoom={zoom}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {MapNearValue.get(location).map((value: any, index: number) => (
        <Marker position={value} draggable={false}>
          <Popup>Warehouse {index + 1}</Popup>
        </Marker>
      ))}
      <ChangeView />
    </MapContainer>
  );
};

export default Map;
