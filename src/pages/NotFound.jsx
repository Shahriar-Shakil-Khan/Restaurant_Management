
import { Link, useNavigate } from "react-router";
import { FaArrowLeft, FaHome, FaUtensils } from "react-icons/fa";
import { MdOutlineRestaurant } from "react-icons/md";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-base-200 px-4 py-12">
      {/* Background Decorations */}
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative w-full max-w-2xl text-center">
        {/* Restaurant Icon */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary text-primary-content shadow-xl shadow-primary/20">
          <MdOutlineRestaurant className="text-4xl" />
        </div>

        {/* 404 */}
        <h1 className="bg-gradient-to-r from-primary via-orange-500 to-secondary bg-clip-text text-8xl font-black tracking-tight text-transparent sm:text-9xl">
          404
        </h1>

        <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-base-100 px-4 py-2 text-sm font-semibold text-base-content/70 shadow-sm">
          <FaUtensils className="text-primary" />
          Oops! Wrong Table
        </div>

        {/* Message */}
        <h2 className="mt-6 text-2xl font-bold text-base-content sm:text-4xl">
          This Page Is Off the Menu!
        </h2>

        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-base-content/65 sm:text-lg">
          Looks like this page has disappeared from our kitchen.
          Don't worry! Let's get you back to something delicious.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="btn btn-primary rounded-xl px-7 shadow-lg shadow-primary/20"
          >
            <FaHome className="text-lg" />
            Back to Home
          </Link>

          <button
            onClick={() => navigate(-1)}
            className="btn btn-outline rounded-xl px-7"
          >
            <FaArrowLeft />
            Go Back
          </button>
        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-base-300 pt-6">
          <p className="text-sm text-base-content/50">
            Hungry for something delicious?
          </p>
          <Link
            to="/menu"
            className="mt-2 inline-block font-semibold text-primary transition hover:underline"
          >
            Explore Our Menu →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
