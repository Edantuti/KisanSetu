import { MarketDisplay } from "@/components/market/market-display";

export default function Page() {
  return (
    <section className="min-h-screen p-4 mx-20">
      <h1 className="text-2xl font-semibold my-4">MarketPlace</h1>
      <MarketDisplay />
    </section>
  );
}
