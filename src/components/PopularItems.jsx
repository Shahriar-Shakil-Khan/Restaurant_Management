
import { use } from "react";
import { Link } from "react-router";
import FoodCard from "../components/FoodCard";

export default function PopularItems({ foodsPromise }) {
  const foods = use(foodsPromise);
  const popular = foods.filter((food) => food.isPopular).slice(0, 6);

  return (
    <section className="bg-base-100 px-5 py-20 sm:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-bold uppercase tracking-widest text-primary">
            Our Specials
          </span>

          <h2 className="mt-5 text-3xl font-black sm:text-4xl lg:text-5xl">
            Popular <span className="text-primary">Items</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-base-content/65">
            আমাদের অতিথিদের সবচেয়ে প্রিয় খাবারগুলো আবিষ্কার করুন।
            আপনার পছন্দের খাবার বেছে নিন এবং উপভোগ করুন।
          </p>
        </div>

        {popular.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popular.map((food) => (
              <FoodCard key={food._id} item={food} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-base-300 px-6 py-16 text-center">
            <h3 className="text-xl font-bold">No Popular Items Yet</h3>
            <p className="mt-2 text-base-content/60">
              Check our full menu to discover more delicious food.
            </p>
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            to="/menu"
            className="btn btn-primary rounded-xl px-7 shadow-lg shadow-primary/15"
          >
            View Full Menu <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
