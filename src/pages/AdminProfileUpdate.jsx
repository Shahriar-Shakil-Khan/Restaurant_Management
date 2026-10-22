import { use, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import {
  updateProfile,
  reauthenticateWithCredential,
  EmailAuthProvider,
  updatePassword,
} from "firebase/auth";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";


const API = "http://localhost:3000";

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-gray-800 placeholder-gray-400 outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-200";
const labelClass = "mb-1.5 block text-sm font-semibold text-gray-700";
const cardClass =
  "rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 md:p-8";

export default function AdminProfileUpdate() {
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", dob: "", phone: "" });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [pwSaving, setPwSaving] = useState(false);

  // Google diye login korle password nei, tai oi section lukano
  const canChangePassword = user?.providerData?.some(
    (p) => p.providerId === "password"
  );

  // ---------- purano data niye ashi ----------
  useEffect(() => {
    if (!user?.email) return;

    fetch(`${API}/users/${encodeURIComponent(user.email)}`)
      .then((res) => res.json())
      .then((data) => {
        setForm({
          name: data.name || user.displayName || "",
          dob: data.dob || "",
          phone: data.phone || "",
        });
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [user]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // ---------- Profile save ----------
  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch(
        `${API}/users/${encodeURIComponent(user.email)}`,
        {
          method: "PUT",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            name: form.name.trim(),
            dob: form.dob,
            phone: form.phone.trim(),
          }),
        }
      );
      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Save failed");

      // Firebase er name o update kori (navbar e dekhabe)
      await updateProfile(user, { displayName: form.name.trim() });

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Profile updated!",
        showConfirmButton: false,
        timer: 1500,
      });

      // save hole profile page e niye jai
      navigate("/profile");
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Could not save profile",
        text: err.message,
      });
    } finally {
      setSaving(false);
    }
  };

  // ---------- Password change ----------
  const handleChangePassword = async (e) => {
    e.preventDefault();
    const pwForm = e.target;
    const { currentPassword, newPassword, confirmPassword } = pwForm;

    if (newPassword.value !== confirmPassword.value) {
      return Swal.fire({ icon: "error", title: "Passwords do not match" });
    }

    try {
      setPwSaving(true);

      // ধাপ ১: Firebase এ current password ঠিক কিনা যাচাই
      const credential = EmailAuthProvider.credential(
        user.email,
        currentPassword.value
      );
      await reauthenticateWithCredential(user, credential);

      // ধাপ ২: Backend এ নতুন password এর hash সেভ
      const res = await fetch(
        `${API}/users/${encodeURIComponent(user.email)}/password`,
        {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            currentPassword: currentPassword.value,
            newPassword: newPassword.value,
          }),
        }
      );
      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Server error");

      // ধাপ ৩: Firebase এও নতুন password সেট
      await updatePassword(user, newPassword.value);

      pwForm.reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Password changed!",
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (err) {
      const message =
        err.code === "auth/invalid-credential" ||
        err.code === "auth/wrong-password"
          ? "Current password is incorrect."
          : err.code === "auth/weak-password"
          ? "New password must be at least 6 characters."
          : err.code === "auth/too-many-requests"
          ? "Too many attempts. Please try again later."
          : err.message || "Could not change password.";
      Swal.fire({ icon: "error", title: "Failed", text: message });
    } finally {
      setPwSaving(false);
    }
  };

  if (!user || loading) {
    return (
      <div className="py-32 text-center">
        <span className="loading loading-spinner loading-lg text-amber-500"></span>
      </div>
    );
  }

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-3xl space-y-6">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-500">
            My Account
          </p>
          <h2 className="mt-1 text-3xl font-bold text-gray-900">Edit Profile</h2>
        </div>

        {/* ---------- Profile form ---------- */}
        <form onSubmit={handleSave} className={cardClass}>
          <h3 className="mb-5 text-lg font-semibold text-gray-900">
            👤 Personal Information
          </h3>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label className={labelClass}>Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className={inputClass}
                required
              />
            </div>

            {/* Email edit kora jabe na (Firebase theke ashe) */}
            <div>
              <label className={labelClass}>Email</label>
              <input
                type="email"
                value={user.email}
                readOnly
                className={`${inputClass} cursor-not-allowed bg-gray-100 text-gray-500`}
              />
            </div>

            <div>
              <label className={labelClass}>Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                max={today}
                className={inputClass}
              />
            </div>

            <div>
              <label className={labelClass}>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="01XXXXXXXXX"
                pattern="^(\+?88)?01[3-9]\d{8}$"
                title="Valid Bangladeshi number likhun, e.g. 01712345678"
                className={inputClass}
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/profile"
              className="w-full rounded-xl border border-gray-300 bg-white py-3 text-center text-lg font-semibold text-gray-700 transition hover:bg-gray-100 sm:w-1/3"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={saving}
              className="w-full rounded-xl bg-amber-500 py-3 text-lg font-semibold text-white shadow-md shadow-amber-200 transition hover:bg-amber-600 disabled:opacity-60 sm:w-2/3"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>

        {/* ---------- Change password ---------- */}
        {canChangePassword && (
          <form onSubmit={handleChangePassword} className={cardClass}>
            <h3 className="mb-5 text-lg font-semibold text-gray-900">
              🔒 Change Password
            </h3>

            <div className="space-y-5">
              <div>
                <label className={labelClass}>Current Password</label>
                <input
                  type="password"
                  name="currentPassword"
                  placeholder="Current password"
                  className={inputClass}
                  required
                />
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className={labelClass}>New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    minLength={6}
                    placeholder="At least 6 characters"
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label className={labelClass}>Confirm New Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    minLength={6}
                    placeholder="Repeat new password"
                    className={inputClass}
                    required
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={pwSaving}
              className="mt-6 w-full rounded-xl bg-gray-900 py-3 text-lg font-semibold text-white transition hover:bg-gray-800 disabled:opacity-60"
            >
              {pwSaving ? "Updating..." : "Update Password"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}