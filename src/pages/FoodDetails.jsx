
import { Link, useLoaderData } from "react-router";

const FALLBACK_IMG =
  "https://placehold.co/800x600/f59e0b/ffffff?text=Saffron+%26+Spice";

export default function FoodDetails() {
  const food = useLoaderData();

  if (!food) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <p className="text-5xl">🍽️</p>
        <h2 className="mt-4 text-2xl font-bold">
          Food item not found
        </h2>
        <Link
          to="/menu"
          className="mt-5 rounded-xl bg-amber-500 px-6 py-3 font-semibold text-white transition hover:bg-amber-600"
        >
          Back to Menu
        </Link>
      </div>
    );
  }

  const {
    name,
    category,
    price,
    currency = "bdt",
    description,
    ingredients = [],
    spiceLevel = 0,
    isVegetarian,
    isPopular,
    rating,
    preparationTime,
    status,
    image,
  } = food;

  const isAvailable = status === "available";

  return (
    <section className="min-h-screen px-4 py-10 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Back Button */}
        <Link
          to="/menu"
          className="mb-8 inline-flex items-center gap-2 rounded-lg border border-base-300 px-4 py-2 font-semibold transition hover:border-amber-500 hover:text-amber-600"
        >
          <span>←</span>
          Back to Menu
        </Link>

        {/* Details Card */}
        <div className="grid overflow-hidden rounded-3xl border border-orange-100 bg-[#545350] shadow-xl md:grid-cols-2">
          {/* Image */}
          <div className="relative min-h-[300px] overflow-hidden md:min-h-[520px]">
            <img
              src={image || FALLBACK_IMG}
              alt={name || "Food item"}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = FALLBACK_IMG;
              }}
              className={`h-full min-h-[300px] w-full object-cover transition duration-700 hover:scale-105 md:min-h-[520px] ${
                !isAvailable ? "grayscale" : ""
              }`}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {isPopular && (
              <span className="absolute left-5 top-5 rounded-full bg-amber-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
                🔥 Popular
              </span>
            )}

            <span className="absolute bottom-5 left-5 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-gray-800">
              {category}
            </span>

            {!isAvailable && (
              <span className="absolute right-5 top-5 rounded-full bg-red-600 px-4 py-2 text-sm font-bold text-white">
                Sold Out
              </span>
            )}
          </div>

          {/* Food Information */}
          <div className="flex flex-col p-6 sm:p-9 lg:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`rounded-full px-3 py-1 text-xs font-bold ${
                  isVegetarian
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {isVegetarian ? "Vegetarian" : "Non-Vegetarian"}
              </span>

              {rating != null && (
                <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-800">
                  ★ {rating} Rating
                </span>
              )}
            </div>

            <h1 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
              {name}
            </h1>

            <p className="mt-5 text-base leading-8 text-gray-200">
              {description || "No description available for this food item."}
            </p>

            {/* Ingredients */}
            {ingredients.length > 0 && (
              <div className="mt-7">
                <h2 className="text-lg font-bold text-white">
                  Ingredients
                </h2>

                <div className="mt-3 flex flex-wrap gap-2">
                  {ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-medium text-amber-800"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Extra Information */}
            <div className="mt-7 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                <p className="text-sm text-gray-300">Spice Level</p>
                <div className="mt-2 flex gap-1">
                  {[1, 2, 3].map((level) => (
                    <span
                      key={level}
                      className={
                        level <= spiceLevel
                          ? "opacity-100"
                          : "opacity-20 grayscale"
                      }
                    >
                      🌶️
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                <p className="text-sm text-gray-300">Preparation Time</p>
                <p className="mt-2 font-bold text-white">
                  ⏱️ {preparationTime || "Not specified"}
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="mt-8 border-t border-white/15 pt-6">
              <p className="text-sm font-semibold uppercase tracking-widest text-gray-300">
                Price
              </p>

              <div className="mt-2 flex flex-wrap items-baseline gap-2">
                <span className="text-2xl font-bold text-amber-400">
                  ৳
                </span>

                <span className="text-4xl font-black text-white">
                  {Number(price || 0).toLocaleString("en-US")}
                </span>

                <span className="text-xs font-semibold uppercase text-gray-300">
                  {currency}
                </span>
              </div>

              <div className="mt-5">
                <span
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-bold ${
                    isAvailable
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      isAvailable ? "bg-green-500" : "bg-red-500"
                    }`}
                  />
                  {isAvailable ? "Currently Available" : "Currently Unavailable"}
                </span>
              </div>

              <Link
                to="/menu"
                className="mt-6 flex w-full items-center justify-center rounded-xl bg-amber-500 px-6 py-3 font-bold text-white transition duration-300 hover:bg-amber-600 active:scale-[0.98]"
              >
                Explore More Dishes →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
