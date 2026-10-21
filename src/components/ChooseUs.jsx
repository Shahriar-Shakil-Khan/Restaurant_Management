
import {
  FaLeaf,
  FaHeart,
  FaAward,
  FaConciergeBell,
  FaCheckCircle,
} from "react-icons/fa";

const features = [
  {
    icon: FaLeaf,
    title: "Fresh Ingredients",
    description:
      "We carefully select quality ingredients to bring freshness and flavor to every meal.",
  },
  {
    icon: FaHeart,
    title: "Made with Love",
    description:
      "Every dish is prepared with care and passion to make your dining experience special.",
  },
  {
    icon: FaAward,
    title: "Quality You Can Trust",
    description:
      "We focus on consistent food quality, great taste, and attention to every detail.",
  },
  {
    icon: FaConciergeBell,
    title: "Friendly Service",
    description:
      "Our goal is to make every guest feel welcome with warm and thoughtful service.",
  },
];

const ChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-base-100 px-5 py-20 sm:px-8 md:py-24">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <FaCheckCircle />
            WHY CHOOSE US
          </div>

          <h2 className="mt-5 text-3xl font-black leading-tight text-base-content sm:text-4xl lg:text-5xl">
            More Than Just
            <span className="block text-primary">Great Food</span>
          </h2>

          <p className="mt-5 leading-8 text-base-content/65 sm:text-lg">
            We believe a great restaurant experience is about
            more than what's on your plate. It's about quality,
            care, and making every visit memorable.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group rounded-3xl border border-base-300 bg-base-100 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-2xl text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-content">
                    <Icon />
                  </div>

                  <span className="text-3xl font-black text-base-300 transition-colors group-hover:text-primary/30">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-base-content">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-base-content/65">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl bg-base-200 p-6 sm:flex-row sm:p-8">
          <div>
            <h3 className="text-xl font-bold sm:text-2xl">
              Every Meal, A Little More Special
            </h3>

            <p className="mt-2 text-sm leading-6 text-base-content/65 sm:text-base">
              Discover delicious food prepared with care.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2 rounded-xl bg-primary/10 px-4 py-3 font-semibold text-primary">
            <FaHeart />
            Made for Food Lovers
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
