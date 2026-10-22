
import { Link } from "react-router";

const FALLBACK_IMG =
  "https://placehold.co/600x400/f59e0b/ffffff?text=Saffron+%26+Spice";

export default function FoodCard({ item }) {
  if (!item) return null;

  const {
    _id,
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
  } = item;

  const isAvailable = status === "available";

  return (
    <div className="group relative h-full">
      {/* Animated Border */}
      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-amber-300 via-orange-500 to-rose-400 opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />

      {/* Main Card */}
      <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-orange-100 bg-[#545350] shadow-lg transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:border-orange-300 group-hover:shadow-2xl">

        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={image || FALLBACK_IMG}
            alt={name || "Food item"}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = FALLBACK_IMG;
            }}
            className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
              !isAvailable ? "grayscale" : ""
            }`}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

          {isPopular && (
            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-amber-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-105">
              <span className="animate-pulse">🔥</span>
              Popular
            </span>
          )}

          <span
            title={isVegetarian ? "Vegetarian" : "Non-Vegetarian"}
            className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white bg-white/95 shadow-md"
          >
            <span
              className={`h-3.5 w-3.5 rounded-full ${
                isVegetarian ? "bg-green-500" : "bg-red-500"
              }`}
            />
          </span>

          <div className="absolute bottom-4 left-4">
            <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
              {category}
            </span>
          </div>

          {rating != null && (
            <div className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-sm font-bold text-gray-800 shadow-md">
              <span className="text-amber-500">★</span>
              {rating}
            </div>
          )}

          {!isAvailable && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-[2px]">
              <span className="rounded-full bg-white px-5 py-2 text-sm font-bold uppercase tracking-wider text-red-600 shadow-xl">
                Sold Out
              </span>
            </div>
          )}
        </div>

        {/* Food Details */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <h3 className="line-clamp-1 text-xl font-extrabold text-white transition-colors duration-300 group-hover:text-amber-400 sm:text-2xl">
            {name}
          </h3>

          <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-6 text-gray-200">
            {description}
          </p>

          {ingredients.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {ingredients.slice(0, 4).map((ingredient, index) => (
                <span
                  key={index}
                  className="rounded-lg border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-800 transition-colors duration-300 hover:bg-amber-100"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          )}

          {/* Spice and Preparation Time */}
          <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/15 pt-4 text-sm">
            <div
              className="flex items-center gap-1"
              title={`Spice level: ${spiceLevel}`}
            >
              <span className="mr-1 text-xs font-medium text-gray-200">
                Spice
              </span>

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

            {preparationTime && (
              <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-gray-100">
                ⏱️ {preparationTime}
              </span>
            )}
          </div>

          {/* Price and Availability */}
          <div className="mt-auto flex items-end justify-between gap-3 border-t border-white/15 pt-5">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-gray-300">
                Price
              </p>

              <div className="mt-1 flex items-baseline gap-1">
                <span className="text-xl font-bold text-amber-400">৳</span>

                <span className="text-3xl font-black tracking-tight text-white transition-colors duration-300 group-hover:text-amber-400">
                  {Number(price || 0).toLocaleString("en-US")}
                </span>
              </div>

              <span className="text-[10px] font-semibold uppercase tracking-widest text-gray-300">
                {currency}
              </span>
            </div>

            <div
              className={`mb-1 inline-flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold ${
                isAvailable
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              <span
                className={`h-2 w-2 rounded-full ${
                  isAvailable ? "bg-green-500" : "bg-red-500"
                }`}
              />
              {isAvailable ? "Available" : "Unavailable"}
            </div>
          </div>

          {/* Details Button */}
          <Link
            to={`/food-details/${_id}`}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-3 font-bold text-white shadow-md transition-all duration-300 hover:bg-amber-600 hover:shadow-lg active:scale-[0.98]"
          >
            View Details
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
