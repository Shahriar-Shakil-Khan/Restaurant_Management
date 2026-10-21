
import { Link } from "react-router";
import {
  FaUtensils,
  FaHeart,
  FaLeaf,
  FaAward,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const About = () => {
  const features = [
    {
      icon: <FaLeaf />,
      title: "Fresh Ingredients",
      description:
        "We use fresh, quality ingredients to prepare delicious meals every day.",
    },
    {
      icon: <FaHeart />,
      title: "Made with Love",
      description:
        "Every dish is prepared with care, passion, and attention to detail.",
    },
    {
      icon: <FaAward />,
      title: "Quality First",
      description:
        "We focus on great taste, quality service, and a memorable dining experience.",
    },
  ];

  const highlights = [
    "Freshly prepared meals",
    "A welcoming atmosphere",
    "Quality ingredients",
    "Friendly customer service",
  ];

  return (
    <main className="overflow-hidden bg-base-100 text-base-content">
      {/* Hero Section */}
      <section className="relative bg-base-200">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              <FaUtensils />
              OUR STORY, OUR PASSION
            </div>

            <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Good Food.
              <span className="mt-2 block text-primary">
                Great Moments.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-base-content/70 sm:text-lg">
              Welcome to our restaurant, where delicious food meets
              warm hospitality. We believe every meal is an opportunity
              to bring people together and create unforgettable memories.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="btn btn-primary rounded-xl px-6"
              >
                Explore Our Menu
                <FaArrowRight />
              </Link>

              <a
                href="#our-story"
                className="btn btn-outline rounded-xl px-6"
              >
                Learn More
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-base-content/70">
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-primary" />
                Quality Ingredients
              </span>
              <span className="flex items-center gap-2">
                <FaCheckCircle className="text-primary" />
                Made with Care
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-3 rotate-3 rounded-3xl bg-primary/15" />

            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1000&q=85"
              alt="Beautiful restaurant dining experience"
              className="relative h-80 w-full rounded-3xl object-cover shadow-2xl sm:h-[440px]"
            />

            <div className="absolute -bottom-5 -left-3 rounded-2xl bg-base-100 p-4 shadow-xl sm:-left-6 sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl text-primary">
                  <FaHeart />
                </div>
                <div>
                  <p className="font-bold">Made with Love</p>
                  <p className="text-sm text-base-content/60">
                    Served with care
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="our-story" className="px-5 py-20 sm:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=85"
              alt="Chef preparing food in the kitchen"
              className="h-72 w-full rounded-3xl object-cover shadow-lg sm:h-[420px]"
              loading="lazy"
            />

            <div className="absolute -bottom-5 -right-3 rounded-2xl bg-primary p-5 text-primary-content shadow-xl sm:-right-5 sm:p-6">
              <FaUtensils className="mb-2 text-3xl" />
              <p className="text-lg font-bold">Our Passion</p>
              <p className="text-sm opacity-80">Your Satisfaction</p>
            </div>
          </div>

          <div className="pt-5 lg:pt-0">
            <p className="font-bold uppercase tracking-[0.2em] text-primary">
              About Our Restaurant
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              A Love for Food, A Passion for People
            </h2>

            <p className="mt-6 leading-8 text-base-content/70">
              Our restaurant was built around a simple idea: serve
              delicious food, welcome every guest with warmth, and
              make every visit worthwhile.
            </p>

            <p className="mt-4 leading-8 text-base-content/70">
              From selecting ingredients to preparing and serving
              each dish, we care about the details that make a meal
              special. Whether you are visiting with family, meeting
              friends, or enjoying a meal on your own, we want you
              to feel right at home.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <FaCheckCircle className="shrink-0 text-primary" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-base-200 px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-primary">
              What Drives Us
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Our Mission & Vision
            </h2>
            <p className="mt-4 leading-7 text-base-content/65">
              More than just food, we aim to create experiences
              worth coming back for.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="card border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="card-body p-7 sm:p-9">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-2xl text-primary">
                  <FaHeart />
                </div>
                <h3 className="mt-3 text-2xl font-bold">Our Mission</h3>
                <p className="leading-8 text-base-content/70">
                  To serve delicious, carefully prepared meals while
                  providing friendly service and a comfortable
                  environment for every guest.
                </p>
              </div>
            </div>

            <div className="card border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="card-body p-7 sm:p-9">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-2xl text-primary">
                  <FaAward />
                </div>
                <h3 className="mt-3 text-2xl font-bold">Our Vision</h3>
                <p className="leading-8 text-base-content/70">
                  To become a trusted dining destination known for
                  great taste, consistent quality, genuine hospitality,
                  and memorable experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="font-bold uppercase tracking-[0.2em] text-primary">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              More Than Just a Meal
            </h2>
            <p className="mt-4 leading-7 text-base-content/65">
              We want every dish, every interaction, and every visit
              to leave you with a reason to return.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl border border-base-300 bg-base-100 p-7 text-center transition duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl sm:p-9"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-3xl text-primary transition group-hover:bg-primary group-hover:text-primary-content">
                  {feature.icon}
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-base-content/65">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-5 pb-20 sm:px-8 md:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-content sm:px-12 sm:py-20">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border-[40px] border-white/10" />
          <div className="absolute -bottom-28 -left-12 h-64 w-64 rounded-full border-[40px] border-white/10" />

          <div className="relative">
            <FaUtensils className="mx-auto text-4xl" />

            <h2 className="mt-5 text-3xl font-black sm:text-5xl">
              Your Next Favorite Meal Awaits
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 opacity-85">
              Discover our menu and find something delicious
              to enjoy today. We look forward to serving you!
            </p>

            <Link
              to="/menu"
              className="btn mt-8 rounded-xl border-none bg-base-100 px-7 text-primary hover:bg-base-200"
            >
              Explore Our Menu
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
