import { Suspense } from "react";
import WatchList from "@/components/WatchList";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid  gap-8">
          <div className="lg:col-span-8">
            <Suspense fallback={<div>Loading market data...</div>}>
              <WatchList />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
