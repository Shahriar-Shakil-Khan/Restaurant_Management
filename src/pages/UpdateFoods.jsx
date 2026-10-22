import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-800 placeholder-gray-400 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200";
const labelClass = "mb-1.5 block text-sm font-semibold text-gray-700";

export default function UpdateFoods() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // purano data niye ashi
  useEffect(() => {
    fetch(`http://localhost:3000/foods/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Food not found");
        return res.json();
      })
      .then((data) => {
        if (!data) throw new Error("Food not found");
        setFood(data);
        setImageUrl(data.image || "");
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());

    const updatedFood = {
      name: data.name.trim(),
      category: data.category,
      price: Number(data.price),
      description: data.description.trim(),
      ingredients: data.ingredients
        .split(/[\n,]+/)
        .map((item) => item.trim())
        .filter(Boolean),
      spiceLevel: Number(data.spiceLevel),
      isVegetarian: form.isVegetarian.checked,
      isPopular: form.isPopular.checked,
      preparationTime: `${data.preparationTime} min`,
      status: data.status,
      image: data.image.trim(),
    };

    fetch(`http://localhost:3000/foods/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedFood),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.matchedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Menu item updated!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/menu");
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: "Backend চালু আছে কিনা দেখুন।",
        });
      });
  };

  if (loading) {
    return (
      <div className="py-32 text-center">
        <span className="loading loading-spinner loading-lg text-amber-500"></span>
      </div>
    );
  }

  if (error || !food) {
    return (
      <div className="py-32 text-center text-red-500">
        <p className="text-lg font-semibold">😕 {error || "Food not found"}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-500">
            Admin Panel
          </p>
          <h2 className="mt-1 text-3xl font-bold text-gray-900 md:text-4xl">
            Update Menu Item
          </h2>
          <p className="mt-2 text-gray-500">
            Editing: <span className="font-semibold text-amber-600">{food.name}</span>
          </p>
        </div>

        <form onSubmit={handleUpdate} className="space-y-6">
          {/* ---------- Basic info ---------- */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 md:p-8">
            <h3 className="mb-5 text-lg font-semibold text-gray-900">
              🍽️ Basic Information
            </h3>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className={labelClass}>Food Name</label>
                <input
                  type="text"
                  name="name"
                  defaultValue={food.name}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label className={labelClass}>Category</label>
                <select
                  name="category"
                  defaultValue={food.category}
                  className={inputClass}
                  required
                >
                  <option>Biryani & Rice</option>
                  <option>Main Course</option>
                  <option>Seafood</option>
                  <option>Starters</option>
                  <option>Vegetarian</option>
                  <option>Desserts</option>
                  <option>Drinks</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>Price (৳ BDT)</label>
                <input
                  type="number"
                  name="price"
                  min="1"
                  defaultValue={food.price}
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label className={labelClass}>Preparation Time (minutes)</label>
                <input
                  type="number"
                  name="preparationTime"
                  min="1"
                  defaultValue={parseInt(food.preparationTime) || ""}
                  className={inputClass}
                  required
                />
              </div>
            </div>

            <div className="mt-5">
              <label className={labelClass}>Description</label>
              <textarea
                rows="3"
                name="description"
                defaultValue={food.description}
                className={inputClass}
                required
              ></textarea>
            </div>

            <div className="mt-5">
              <label className={labelClass}>Ingredients</label>
              <textarea
                rows="3"
                name="ingredients"
                defaultValue={(food.ingredients || []).join("\n")}
                placeholder="Each ingredient in a new line (or separate with comma)"
                className={inputClass}
                required
              ></textarea>
            </div>
          </div>

          {/* ---------- Details ---------- */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 md:p-8">
            <h3 className="mb-5 text-lg font-semibold text-gray-900">
              🌶️ Food Details
            </h3>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className={labelClass}>Spice Level</label>
                <select
                  name="spiceLevel"
                  defaultValue={String(food.spiceLevel ?? 0)}
                  className={inputClass}
                  required
                >
                  <option value="0">0 - Not spicy</option>
                  <option value="1">1 - Mild 🌶️</option>
                  <option value="2">2 - Medium 🌶️🌶️</option>
                  <option value="3">3 - Hot 🌶️🌶️🌶️</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>Status</label>
                <select
                  name="status"
                  defaultValue={food.status}
                  className={inputClass}
                  required
                >
                  <option value="available">Available</option>
                  <option value="unavailable">Unavailable</option>
                </select>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-6">
              <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-gray-700">
                <input
                  type="checkbox"
                  name="isVegetarian"
                  defaultChecked={food.isVegetarian}
                  className="h-4 w-4 accent-green-600"
                />
                🥦 Vegetarian
              </label>

              <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-gray-700">
                <input
                  type="checkbox"
                  name="isPopular"
                  defaultChecked={food.isPopular}
                  className="h-4 w-4 accent-amber-500"
                />
                🔥 Mark as Popular
              </label>
            </div>
          </div>

          {/* ---------- Image ---------- */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 md:p-8">
            <h3 className="mb-5 text-lg font-semibold text-gray-900">
              📷 Food Image
            </h3>

            <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-2">
              <div>
                <label className={labelClass}>Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className={inputClass}
                  required
                />
              </div>

              <div className="flex h-40 items-center justify-center overflow-hidden rounded-xl bg-amber-50 ring-1 ring-amber-100">
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt="Preview"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    onLoad={(e) => {
                      e.currentTarget.style.display = "block";
                    }}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-sm text-amber-600">
                    Image preview will appear here
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-full rounded-xl border border-gray-300 bg-white py-3 text-lg font-semibold text-gray-700 transition hover:bg-gray-100 sm:w-1/3"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full rounded-xl bg-amber-500 py-3 text-lg font-semibold text-white shadow-md shadow-amber-200 transition hover:bg-amber-600 active:scale-[0.99] sm:w-2/3"
            >
              Update Menu Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}