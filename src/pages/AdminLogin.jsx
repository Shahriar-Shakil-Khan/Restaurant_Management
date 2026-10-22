import { use, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
  FiShield,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import { AuthContext } from "../contexts/AuthContext";

export default function AdminLogin() {
  const { signIn } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const from = location.state?.from?.pathname || "/dashboard";

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      setSubmitting(true);

      await signIn(email, password);

      form.reset();
      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);

      if (
        err.code === "auth/invalid-credential" ||
        err.code === "auth/wrong-password" ||
        err.code === "auth/user-not-found"
      ) {
        setError("Invalid email or password. Please try again.");
      } else if (err.code === "auth/too-many-requests") {
        setError("Too many attempts. Please try again later.");
      } else if (err.code === "auth/network-request-failed") {
        setError("Network error. Check your internet connection.");
      } else if (err.code === "auth/user-disabled") {
        setError("This account has been disabled.");
      } else {
        setError("Something went wrong. Please try again.");
      }

      setSubmitting(false);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f7f5f0] px-4 py-10 sm:px-6">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-amber-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-orange-300/30 blur-3xl" />

      <div className="relative grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white/70 bg-white shadow-[0_25px_80px_rgba(80,55,20,0.12)] lg:grid-cols-2">

        {/* Left Branding Panel */}
        <section className="relative hidden flex-col justify-between overflow-hidden bg-[#292820] p-10 text-white lg:flex xl:p-14">

          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-amber-400/20" />
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-amber-400/20" />
          <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-amber-500/10 blur-2xl" />

          <div className="relative z-10">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500 text-2xl font-black text-white shadow-lg shadow-amber-500/20">
                L
              </div>

              <div>
                <h1 className="text-2xl font-extrabold tracking-tight">
                  Lihar<span className="text-amber-400">.</span>
                </h1>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/50">
                  Taste the difference
                </p>
              </div>
            </div>

            <div className="mt-20">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1.5 text-xs font-semibold text-amber-300">
                <FiShield />
                Secure Admin Portal
              </span>

              <h2 className="mt-6 text-4xl font-extrabold leading-tight xl:text-5xl">
                Good food.
                <br />
                Great service.
                <br />
                <span className="text-amber-400">
                  Better management.
                </span>
              </h2>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
                Manage your restaurant menu, update food items, and keep
                everything running smoothly from one place.
              </p>
            </div>
          </div>

          <div className="relative z-10 mt-16 border-t border-white/10 pt-6">
            <div className="flex items-center gap-3 text-sm text-white/70">
              <FiCheckCircle className="text-lg text-amber-400" />
              <span>Everything you need, in one dashboard.</span>
            </div>
            <p className="mt-5 text-xs text-white/35">
              © {new Date().getFullYear()} Lihar Restaurant. All rights reserved.
            </p>
          </div>
        </section>

        {/* Login Form */}
        <section className="flex items-center justify-center px-6 py-10 sm:px-10 sm:py-14 lg:px-12 xl:px-16">

          <div className="w-full max-w-md">

            {/* Mobile Branding */}
            <div className="mb-10 flex items-center gap-3 lg:hidden">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500 text-2xl font-black text-white shadow-md shadow-amber-500/20">
                L
              </div>

              <div>
                <h1 className="text-2xl font-extrabold tracking-tight text-[#292820]">
                  Lihar<span className="text-amber-500">.</span>
                </h1>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                  Restaurant Management
                </p>
              </div>
            </div>

            <div className="mb-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                <FiShield className="text-2xl" />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                Welcome Back
              </p>

              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#292820] sm:text-4xl">
                Admin Login
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                Sign in to access your restaurant management dashboard.
              </p>
            </div>

            <form onSubmit={handleSignIn} className="space-y-5">

              {/* Email */}
              <div>
                <label
                  htmlFor="admin-email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email Address
                </label>

                <div className="group flex h-13 items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 transition-all duration-200 focus-within:border-amber-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-amber-500/10">
                  <FiMail className="shrink-0 text-lg text-gray-400 transition-colors group-focus-within:text-amber-600" />

                  <input
                    id="admin-email"
                    type="email"
                    name="email"
                    autoComplete="username"
                    placeholder="admin@example.com"
                    className="h-full min-w-0 flex-1 bg-transparent py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                    required
                    disabled={submitting}
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="admin-password"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Password
                  </label>
                </div>

                <div className="group flex h-13 items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 transition-all duration-200 focus-within:border-amber-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-amber-500/10">
                  <FiLock className="shrink-0 text-lg text-gray-400 transition-colors group-focus-within:text-amber-600" />

                  <input
                    id="admin-password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    className="h-full min-w-0 flex-1 bg-transparent py-3 text-sm text-gray-800 outline-none placeholder:text-gray-400"
                    required
                    disabled={submitting}
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="shrink-0 p-1 text-gray-400 transition-colors hover:text-amber-600"
                  >
                    {showPassword ? (
                      <FiEyeOff className="text-lg" />
                    ) : (
                      <FiEye className="text-lg" />
                    )}
                  </button>
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div
                  role="alert"
                  className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50 p-3.5 text-sm text-red-600"
                >
                  <FiAlertCircle className="mt-0.5 shrink-0 text-lg" />
                  <p>{error}</p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="group flex min-h-13 w-full items-center justify-center gap-3 rounded-xl bg-amber-500 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-amber-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-600 hover:shadow-xl hover:shadow-amber-500/25 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {submitting ? (
                  <>
                    <span className="loading loading-spinner loading-sm" />
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In to Dashboard
                    <FiArrowRight className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-8 flex items-center justify-center gap-2 text-xs text-gray-400">
              <FiLock className="text-sm" />
              <span>Your account is protected by secure authentication.</span>
            </div>

            <p className="mt-6 text-center text-xs text-gray-400 lg:hidden">
              © {new Date().getFullYear()} Lihar Restaurant
            </p>

          </div>
        </section>
      </div>
    </main>
  );
}
