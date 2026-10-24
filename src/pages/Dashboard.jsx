import { useEffect, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

export default function Dashboard() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  // সব খাবার আনি
  useEffect(() => {
    fetch("http://localhost:3000/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .finally(() => setLoading(false));
  }, []);

  // খাবার মোছা
  const handleDelete = (food) => {
    Swal.fire({
      title: `Delete "${food.name}"?`,
      text: "এটা আর ফেরত আনা যাবে না!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#f59e0b",
      confirmButtonText: "Yes, delete",
    }).then((result) => {
      if (!result.isConfirmed) return;

      fetch(`http://localhost:3000/foods/${food._id}`, { method: "DELETE" })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            // তালিকা থেকেও সরিয়ে দিই
            setFoods(foods.filter((f) => f._id !== food._id));
            Swal.fire("Deleted!", "খাবারটি মুছে ফেলা হয়েছে।", "success");
          }
        });
    });
  };

  // Available <-> Unavailable বদলানো (PATCH)
  const toggleStatus = (food) => {
    const newStatus = food.status === "available" ? "unavailable" : "available";

    fetch(`http://localhost:3000/foods/${food._id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setFoods(
            foods.map((f) =>
              f._id === food._id ? { ...f, status: newStatus } : f
            )
          );
        }
      });
  };

  if (loading) {
    return (
      <div className="py-32 text-center">
        <span className="loading loading-spinner loading-lg text-amber-500"></span>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      {/* Heading */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-500">
            Admin Panel
          </p>
          <h2 className="text-3xl font-bold text-gray-900">Manage Menu</h2>
          <p className="text-gray-500">Total {foods.length} items</p>
        </div>

        <Link
          to="/add-foods"
          className="btn border-none bg-amber-500 text-white hover:bg-amber-600"
        >
          ➕ Add New Item
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl bg-white shadow-md ring-1 ring-gray-200">
        <table className="table">
          <thead className="bg-amber-50 text-amber-700">
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {foods.map((food, index) => (
              <tr key={food._id} className="hover:bg-gray-50">
                <td>{index + 1}</td>

                <td>
                  <div className="flex items-center gap-3">
                    <img
                      src={food.image}
                      alt={food.name}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          "https://placehold.co/100x100/f59e0b/ffffff?text=Food";
                      }}
                      className="h-12 w-12 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{food.name}</p>
                      <p className="text-xs text-gray-900">
                        {food.isPopular && "🔥 Popular"}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="font-semibold text-amber-600">{food.category}</td>
                <td className="font-semibold text-amber-600">৳{food.price}</td>

                <td>
                  <button
                    onClick={() => toggleStatus(food)}
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      food.status === "available"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-500"
                    }`}
                    title="Click to change status"
                  >
                    {food.status === "available" ? "Available" : "Unavailable"}
                  </button>
                </td>

                <td>
                  <div className="flex justify-center gap-2">
                    <Link
                      to={`/update-foods/${food._id}`}
                      className="btn btn-sm border-none bg-amber-500 text-white hover:bg-amber-600"
                    >
                      ✏️ Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(food)}
                      className="btn btn-sm border-none bg-red-500 text-white hover:bg-red-600"
                    >
                      🗑️ Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {foods.length === 0 && (
          <p className="py-16 text-center text-gray-500">কোনো খাবার নেই</p>
        )}
      </div>
    </div>
  );
}