import { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/AuthContext";


const API = "http://localhost:3000";

// ছোট একটা সারি: লেখা + মান
function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4 border-b border-gray-100 py-4 last:border-0">
      <span className="text-2xl">{icon}</span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          {label}
        </p>
        <p className="mt-0.5 font-medium text-gray-800">
          {value || <span className="text-gray-400">Not added yet</span>}
        </p>
      </div>
    </div>
  );
}

export default function AdminProfile() {
  const { user, loading: authLoading } = use(AuthContext);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  // backend theke user er profile niye ashi
  useEffect(() => {
    if (!user?.email) return;

    fetch(`${API}/users/${encodeURIComponent(user.email)}`)
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch(() => setProfile({}))
      .finally(() => setLoading(false));
  }, [user]);

  // firebase user check korche
  if (authLoading) {
    return (
      <div className="py-32 text-center">
        <span className="loading loading-spinner loading-lg text-amber-500"></span>
      </div>
    );
  }

  // login kora nei
  if (!user) {
    return (
      <div className="py-32 text-center">
        <p className="text-lg font-semibold">Please login to see your profile</p>
        <Link
          to="/login"
          className="btn mt-4 border-none bg-amber-500 text-white hover:bg-amber-600"
        >
          Login
        </Link>
      </div>
    );
  }

  // backend theke data ashche
  if (loading) {
    return (
      <div className="py-32 text-center">
        <span className="loading loading-spinner loading-lg text-amber-500"></span>
      </div>
    );
  }

  const name = profile.name || user.displayName;

  const dob = profile.dob
    ? new Date(profile.dob).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-xl">
        <div className="overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-gray-200">
          {/* Top banner + avatar (নামের প্রথম অক্ষর) */}
          <div className="h-28 bg-gradient-to-r from-amber-400 to-amber-600" />

          <div className="-mt-14 flex flex-col items-center px-6">
            <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-amber-100 text-4xl font-bold text-amber-600 shadow">
              {(name || user.email).charAt(0).toUpperCase()}
            </div>

            <h2 className="mt-3 text-2xl font-bold text-gray-900">
              {name || "Your Name"}
            </h2>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>

          {/* Details */}
          <div className="px-8 pb-2 pt-4">
            <InfoRow icon="👤" label="Full Name" value={name} />
            <InfoRow icon="✉️" label="Email" value={user.email} />
            <InfoRow icon="🎂" label="Date of Birth" value={dob} />
            <InfoRow icon="📞" label="Phone Number" value={profile.phone} />
          </div>

          {/* Edit button */}
          <div className="p-6">
            <Link
              to="/profile-update"
              className="block w-full rounded-xl bg-amber-500 py-3 text-center text-lg font-semibold text-white shadow-md shadow-amber-200 transition hover:bg-amber-600"
            >
              ✏️ Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}