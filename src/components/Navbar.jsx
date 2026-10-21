import { NavLink } from "react-router";
export default function Navbar() {
  const links = (
    <>
      <li>
        <NavLink to="/" >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/menu" >
            Menu
        </NavLink>
      </li>
      <li>
        <NavLink to="/recipes" >
          Recipes
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" >
          About Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="max-lg:collapse bg-base-200  shadow-sm w-full rounded-md">
        <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
        <label
          htmlFor="navbar-1-toggle"
          className="fixed inset-0 hidden max-lg:peer-checked:block"
        ></label>
        <div className="collapse-title navbar">
          <div className="navbar-start">
            <label
              htmlFor="navbar-1-toggle"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <button className=" text-3xl">Lihar</button>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            <input
              type="text"
              placeholder="Search"
              className="input w-64 lg:w-auto"
            />
          </div>
        </div>

        <div className="collapse-content lg:hidden z-1">
          <ul className="menu">
            {/* <li>
              <button>Item 3</button>
            </li> */}
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
}
