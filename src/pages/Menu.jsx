import { useEffect, useMemo, useState } from "react";
import FoodCard from "../components/FoodCard";

export default function Menu() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [vegOnly, setVegOnly] = useState(false);
  const [sort, setSort] = useState("default");

  useEffect(() => {
    fetch("http://localhost:3000/foods")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load menu");
        return res.json();
      })
      .then((data) => setFoods(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const categories = useMemo(
    () => ["All", ...new Set(foods.map((f) => f.category))],
    [foods]
  );

  const filtered = useMemo(() => {
    let list = foods.filter((f) => {
      const matchSearch = f.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        category === "All" || f.category === category;

      const matchVeg = !vegOnly || f.isVegetarian;

      return matchSearch && matchCategory && matchVeg;
    });

    if (sort === "low")
      list = [...list].sort((a, b) => a.price - b.price);

    if (sort === "high")
      list = [...list].sort((a, b) => b.price - a.price);

    if (sort === "rating")
      list = [...list].sort(
        (a, b) => (b.rating ?? 0) - (a.rating ?? 0)
      );

    return list;
  }, [foods, search, category, vegOnly, sort]);

  const resetFilters = () => {
    setSearch("");
    setCategory("All");
    setVegOnly(false);
    setSort("default");
  };

  return (
    <main className="min-h-screen bg-base-100 text-base-content">
      {/* Hero Section: Original Background */}
      

      {/* Menu Content */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
        {/* Section Heading */}
        <div className="mb-8 flex flex-col gap-3 sm:mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-600 sm:text-sm">
            Explore Our Collection
          </p>

          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Our Delicious Menu
              </h2>
              <p className="mt-2 text-sm leading-6 opacity-65 sm:text-base">
                Fresh flavors, carefully prepared just for you.
              </p>
            </div>

            {!loading && !error && (
              <span className="w-fit rounded-full border border-base-300 bg-base-100 px-4 py-2 text-sm font-semibold shadow-sm">
                <span className="text-amber-600">
                  {filtered.length}
                </span>{" "}
                {filtered.length === 1 ? "dish" : "dishes"} found
              </span>
            )}
          </div>
        </div>

        {/* Search and Filters */}
        <div className="rounded-3xl border border-base-300 bg-base-100 p-4 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative w-full lg:max-w-md">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-amber-600">
                ⌕
              </span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search your favorite food..."
                aria-label="Search food"
                className="w-full rounded-2xl border border-base-300 bg-base-100 py-3.5 pl-12 pr-4 text-sm text-base-content outline-none transition-all duration-300 placeholder:text-base-content/40 hover:border-amber-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10"
              />
            </div>

            {/* Filter Controls */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <label className="group flex cursor-pointer items-center gap-3">
                <input
                  type="checkbox"
                  checked={vegOnly}
                  onChange={(e) => setVegOnly(e.target.checked)}
                  className="peer sr-only"
                />

                <span className="relative h-6 w-11 rounded-full bg-base-300 transition-colors duration-300 after:absolute after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:bg-white after:shadow-sm after:transition-transform after:duration-300 peer-checked:bg-green-500 peer-checked:after:translate-x-5 peer-focus-visible:ring-4 peer-focus-visible:ring-green-500/20" />

                <span className="text-sm font-semibold opacity-80 transition-colors group-hover:text-green-600">
                  🌿 Veg only
                </span>
              </label>

              <div className="relative w-full sm:w-56">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  aria-label="Sort menu"
                  className="w-full cursor-pointer appearance-none rounded-2xl border border-base-300 bg-base-100 px-4 py-3.5 pr-10 text-sm font-medium text-base-content outline-none transition-all hover:border-amber-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/10"
                >
                  <option value="default">Sort by: Recommended</option>
                  <option value="low">Price: Low to High</option>
                  <option value="high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>

                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs opacity-60">
                  ▼
                </span>
              </div>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="mt-6 border-t border-base-300 pt-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-wider opacity-50">
              Browse by category
            </p>

            <div className="flex flex-wrap gap-2.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  aria-pressed={category === cat}
                  className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                    category === cat
                      ? "border-amber-500 bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/20"
                      : "border-base-300 bg-base-200 text-base-content/75 hover:border-amber-400 hover:bg-amber-500/10 hover:text-amber-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div
                key={n}
                className="rounded-3xl border border-base-300 bg-base-100 p-4 shadow-sm"
              >
                <div className="h-52 animate-pulse rounded-2xl bg-base-300/70" />
                <div className="mt-5 h-5 w-2/3 animate-pulse rounded-lg bg-base-300/70" />
                <div className="mt-3 h-4 w-full animate-pulse rounded-lg bg-base-300/50" />
                <div className="mt-2 h-4 w-4/5 animate-pulse rounded-lg bg-base-300/50" />
                <div className="mt-6 h-10 animate-pulse rounded-xl bg-amber-500/10" />
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="my-10 rounded-3xl border border-red-500/20 bg-base-100 px-5 py-14 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 text-3xl">
              😕
            </div>

            <h3 className="mt-5 text-xl font-bold">
              Unable to load the menu
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 opacity-65">
              Something went wrong while loading our delicious dishes.
              Please try again in a moment.
            </p>

            <p className="mt-3 text-xs text-red-500">{error}</p>

            <button
              onClick={() => window.location.reload()}
              className="mt-6 rounded-xl bg-amber-500 px-6 py-3 text-sm font-bold text-white shadow-md shadow-amber-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-amber-600"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Food Grid */}
        {!loading && !error && filtered.length > 0 && (
          <div className="mt-8 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 xl:gap-8">
            {filtered.map((food) => (
              <div
                key={food._id}
                className="animate-[fadeInUp_0.45s_ease-out_both]"
              >
                <FoodCard item={food} />
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filtered.length === 0 && (
          <div className="my-10 rounded-3xl border border-base-300 bg-base-100 px-5 py-16 text-center shadow-sm sm:py-20">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-amber-500/10 text-4xl">
              🍽️
            </div>

            <h3 className="mt-6 text-2xl font-black">
              No dishes found
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-7 opacity-65">
              We couldn't find any dishes matching your search.
              Try a different keyword or explore another category.
            </p>

            <button
              onClick={resetFilters}
              className="mt-6 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 px-7 py-3 text-sm font-bold text-white shadow-lg shadow-amber-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Bottom Note */}
        {!loading && !error && filtered.length > 0 && (
          <div className="mt-12 flex flex-col items-center justify-center gap-2 border-t border-base-300 pt-8 text-center sm:flex-row">
            <span className="text-lg">🧡</span>
            <p className="text-sm opacity-60">
              Good food, great moments. Thank you for choosing us!
            </p>
          </div>
        )}
      </section>

      {/* Animation */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
