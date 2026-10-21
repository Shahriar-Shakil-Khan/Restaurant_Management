
import { Link } from "react-router";
import {
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaStar,
  FaUtensils,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-base-200">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 md:py-24 lg:grid-cols-2 lg:gap-16">
        {/* Left Content */}
        <div className="order-2 lg:order-1">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <FaUtensils />
            FRESH FLAVORS, HAPPY MOMENTS
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-black leading-[1.12] tracking-tight text-base-content sm:text-5xl lg:text-6xl xl:text-7xl">
            Good Food,
            <span className="mt-2 block text-primary">
              Great Mood.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-8 text-base-content/70 sm:text-lg">
            Discover delicious flavors, freshly prepared meals,
            and the joy of sharing good food. Your next favorite
            dish is waiting for you at our restaurant.
          </p>

          {/* Highlights */}
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-base-content/70">
            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-primary" />
              Fresh Ingredients
            </span>

            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-primary" />
              Prepared with Care
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/menu"
              className="btn btn-primary rounded-xl px-7 shadow-lg shadow-primary/20"
            >
              Explore Our Menu
              <FaArrowRight />
            </Link>

            <Link
              to="/about"
              className="btn btn-outline rounded-xl px-7"
            >
              Discover Our Story
            </Link>
          </div>

          {/* Bottom Info */}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5 border-t border-base-300 pt-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <FaStar className="text-lg" />
              </div>
              <div>
                <p className="font-bold text-base-content">
                  Quality First
                </p>
                <p className="text-sm text-base-content/60">
                  Every single dish
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <FaClock className="text-lg" />
              </div>
              <div>
                <p className="font-bold text-base-content">
                  Freshly Prepared
                </p>
                <p className="text-sm text-base-content/60">
                  Made with care
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative order-1 mx-auto w-full max-w-xl lg:order-2">
          {/* Decorative Frame */}
          <div className="absolute -inset-3 rotate-3 rounded-[2rem] bg-primary/15" />

          {/* Main Image */}
          <img
            src="https://images.unsplash.com/photo-1546549032-9571cd6b27df?auto=format&fit=crop&w=1200&q=85"
            alt="Delicious freshly prepared restaurant food"
            fetchPriority="high"
            className="relative h-72 w-full rounded-[1.75rem] object-cover shadow-2xl sm:h-96 lg:h-[520px]"
          />

          {/* Floating Food Card */}
          <div className="absolute -bottom-5 -left-2 max-w-[245px] rounded-2xl border border-base-300/50 bg-base-100 p-4 shadow-xl sm:-left-6 sm:p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-2xl text-primary">
                <FaUtensils />
              </div>

              <div>
                <p className="font-bold text-base-content">
                  Made with Love
                </p>
                <p className="mt-1 text-sm text-base-content/60">
                  Taste the difference
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Badge */}
          <div className="absolute -right-2 -top-5 flex h-20 w-20 flex-col items-center justify-center rounded-2xl bg-primary text-primary-content shadow-xl sm:-right-5 sm:h-24 sm:w-24">
            <FaStar className="text-xl" />
            <span className="mt-1 text-xs font-bold">Fresh Daily</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
