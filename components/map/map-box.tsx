"use client";

import dynamic from "next/dynamic";
import { useMemo, useState } from "react";
import { MapFarm } from "./map-farmer";
import { LocationProvider } from "./map-provider";

export function MapBox() {
  const Map = useMemo(
    () =>
      dynamic(() => import("@/components/map/map-container"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    [],
  );

  return (
    <LocationProvider>
      <Map posix={[25.3176, 82.9739]} />
      <MapFarm />
    </LocationProvider>
  );
}
