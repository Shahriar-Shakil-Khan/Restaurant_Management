
import { Suspense } from "react";
import ChooseUs from "../components/ChooseUs";
import Hero from "../components/Hero";
import LocationContact from "../components/LocationContact";
import PopularItems from "../components/PopularItems";

const foodsPromise = fetch("http://localhost:3000/foods").then((res) => {
  if (!res.ok) {
    throw new Error("Failed to load foods");
  }

  return res.json();
});

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-base-100">
      <Hero />

      <Suspense
        fallback={
          <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
            <div className="mb-10 space-y-3 text-center">
              <div className="skeleton mx-auto h-4 w-28" />
              <div className="skeleton mx-auto h-10 w-64 max-w-full" />
              <div className="skeleton mx-auto h-4 w-80 max-w-full" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="overflow-hidden rounded-2xl border border-base-300 bg-base-100 p-4 shadow-sm"
                >
                  <div className="skeleton h-48 w-full rounded-xl" />
                  <div className="skeleton mt-5 h-5 w-3/4" />
                  <div className="skeleton mt-3 h-4 w-full" />
                  <div className="skeleton mt-2 h-4 w-2/3" />
                  <div className="skeleton mt-5 h-10 w-full" />
                </div>
              ))}
            </div>
          </section>
        }
      >
        <PopularItems foodsPromise={foodsPromise} />
      </Suspense>

      <ChooseUs />

      <LocationContact />
    </main>
  );
}
