import { NavLink, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";
import { use } from "react";

export default function Navbar() {
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged out",
          timer: 1200,
          showConfirmButton: false,
        });

        navigate("/admin");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Logout failed",
          confirmButtonColor: "#e11d48",
        });
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
              isActive
                ? "bg-amber-500/10 text-amber-600"
                : "text-base-content/75 hover:bg-base-200 hover:text-amber-600"
            }`
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            `rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
              isActive
                ? "bg-amber-500/10 text-amber-600"
                : "text-base-content/75 hover:bg-base-200 hover:text-amber-600"
            }`
          }
        >
          Menu
        </NavLink>
      </li>

{user && (
      <li>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
              isActive
                ? "bg-amber-500/10 text-amber-600"
                : "text-base-content/75 hover:bg-base-200 hover:text-amber-600"
            }`
          }
        >
          Dashboard
        </NavLink>
      </li>
)}

{user && (
      <li>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
              isActive
                ? "bg-amber-500/10 text-amber-600"
                : "text-base-content/75 hover:bg-base-200 hover:text-amber-600"
            }`
          }
        >
          Profile
        </NavLink>
      </li>
)}

      <li>
        <NavLink
          to="/contactUs"
          className={({ isActive }) =>
            `rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
              isActive
                ? "bg-amber-500/10 text-amber-600"
                : "text-base-content/75 hover:bg-base-200 hover:text-amber-600"
            }`
          }
        >
          Contact Us
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
              isActive
                ? "bg-amber-500/10 text-amber-600"
                : "text-base-content/75 hover:bg-base-200 hover:text-amber-600"
            }`
          }
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-base-300/70 bg-base-100/95 shadow-sm backdrop-blur-md">
      <div className="navbar mx-auto min-h-[76px] max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Mobile Menu */}
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <label
              tabIndex={0}
              role="button"
              aria-label="Open navigation menu"
              className="btn btn-ghost btn-square"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu dropdown-content z-50 mt-3 w-60 rounded-2xl border border-base-300 bg-base-100 p-3 shadow-xl"
            >
              {links}

              {user && (
                <li className="mt-2 border-t border-base-300 pt-2">
                  <button
                    onClick={handleLogout}
                    className="font-semibold text-red-500"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Restaurant Logo */}
          <NavLink
            to="/"
            end
            aria-label="Lihar home"
            className="ml-1 flex items-center gap-3 lg:ml-0"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500 text-xl font-black text-white shadow-md shadow-amber-500/20 transition-transform duration-300 hover:rotate-3">
              L
            </span>

            <span className="flex flex-col">
              <span className="text-2xl font-extrabold leading-none tracking-tight text-base-content">
                Lihar<span className="text-amber-500">.</span>
              </span>

              <span className="mt-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-base-content/55">
                Taste the difference
              </span>
            </span>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="navbar-center hidden lg:flex"
        >
          <ul className="menu menu-horizontal items-center gap-1 px-1">
            {links}
          </ul>
        </nav>

        {/* Right Side Branding */}
        <div className="navbar-end gap-2">
          <div className="hidden items-center gap-3 border-l border-base-300 pl-5 xl:flex">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-500/10 text-amber-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>

            <div>
              <p className="text-xs font-bold text-base-content">
                Freshly Prepared
              </p>

              <p className="mt-0.5 text-xs text-base-content/60">
                Made with care, served with love
              </p>
            </div>
          </div>

          {/* Logout Button: only visible when logged in */}
          {user && (
            <div className="ml-2 hidden sm:block">
              <button
                onClick={handleLogout}
                className="btn btn-sm rounded-lg border-none bg-amber-500 px-5 text-white hover:bg-amber-600"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
