import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-800 placeholder-gray-400 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200";

const labelClass = "mb-1.5 block text-sm font-semibold text-gray-700";

export default function AddFoods() {
  const navigate = useNavigate();
  const [imageUrl, setImageUrl] = useState("");

  const handleAddMenu = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const newFood = {
      name: data.name.trim(),
      category: data.category,
      price: Number(data.price),
      currency: "bdt",
      description: data.description.trim(),

      // New line ba comma diye alada, faka bad
      ingredients: data.ingredients
        .split(/[\n,]+/)
        .map((item) => item.trim())
        .filter(Boolean),

      spiceLevel: Number(data.spiceLevel),

      // Checkbox tick na dile FormData te ashe na
      isVegetarian: form.isVegetarian.checked,
      isPopular: form.isPopular.checked,

      rating: 0,
      preparationTime: `${data.preparationTime} min`,
      status: data.status,
      image: data.image.trim(),
    };

    fetch("http://localhost:3000/foods", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newFood),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Menu item added!",
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

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#191D24] px-4 py-10 sm:px-6 lg:px-8">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 top-10 -z-10 h-96 w-96 rounded-full bg-[#635BFF]/15 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 top-1/3 -z-10 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-500">
            Admin Panel
          </p>

          <h2 className="mt-1 text-3xl font-bold text-white md:text-4xl">
            Add New Menu Item
          </h2>

          <p className="mt-2 text-gray-400">
            Fill in the details below to add a new dish to the menu.
          </p>
        </div>

        <form onSubmit={handleAddMenu} className="space-y-6">
          {/* Basic info */}
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
                  placeholder="e.g. Kacchi Biryani"
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label className={labelClass}>Category</label>

                <select
                  name="category"
                  defaultValue=""
                  className={inputClass}
                  required
                >
                  <option value="" disabled>
                    Pick a category
                  </option>
                  <option>Biryani & Rice</option>
                  <option>Main Course</option>
                  <option>Seafood</option>
                  <option>Starters</option>
                  <option>Vegetarian</option>
                  <option>Desserts</option>
                  <option>Drinks & Coffee</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>Price (৳ BDT)</label>

                <input
                  type="number"
                  name="price"
                  min="1"
                  placeholder="e.g. 450"
                  className={inputClass}
                  required
                />
              </div>

              <div>
                <label className={labelClass}>
                  Preparation Time (minutes)
                </label>

                <input
                  type="number"
                  name="preparationTime"
                  min="1"
                  placeholder="e.g. 45"
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
                placeholder="Short description of the dish"
                className={inputClass}
                required
              ></textarea>
            </div>

            <div className="mt-5">
              <label className={labelClass}>Ingredients</label>

              <textarea
                rows="3"
                name="ingredients"
                placeholder="Each ingredient in a new line (or separate with comma)"
                className={inputClass}
                required
              ></textarea>
            </div>
          </div>

          {/* Details */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 md:p-8">
            <h3 className="mb-5 text-lg font-semibold text-gray-900">
              🌶️ Food Details
            </h3>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className={labelClass}>Spice Level</label>

                <select
                  name="spiceLevel"
                  defaultValue="1"
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
                  defaultValue="available"
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
                  className="h-4 w-4 accent-green-600"
                />
                🥦 Vegetarian
              </label>

              <label className="flex cursor-pointer items-center gap-2 text-sm font-medium text-gray-700">
                <input
                  type="checkbox"
                  name="isPopular"
                  className="h-4 w-4 accent-amber-500"
                />
                🔥 Mark as Popular
              </label>
            </div>
          </div>

          {/* Image */}
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
                  placeholder="https://... or /images/food.jpg"
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

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-amber-500 py-3 text-lg font-semibold text-white shadow-md shadow-amber-200 transition hover:bg-amber-600 active:scale-[0.99]"
          >
            Add to Menu
          </button>
        </form>
      </div>
    </div>
  );
}