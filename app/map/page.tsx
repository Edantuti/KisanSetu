import { MapBox } from "@/components/map/map-box";

export default async function Page() {
  return (
    <>
      <div className="bg-[#f4d8bf] mx-auto py-5 w-[100%] h-[80vh] rounded overflow-hidden flex ">
        <MapBox />
      </div>
    </>
  );
}
