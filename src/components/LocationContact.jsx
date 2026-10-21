
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
  FaEnvelope,
  FaDirections,
  FaArrowRight,
} from "react-icons/fa";

const LocationContact = () => {
  // Replace these sample values with your restaurant's real details.
  const restaurant = {
    name: "Our Restaurant",
    address: "Add your restaurant address here",
    phone: "+880 1XXX-XXXXXX",
    email: "hello@example.com",
    openingHours: "Add your opening hours",
    mapsUrl: "https://maps.google.com/",
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Our Location",
      value: restaurant.address,
    },
    {
      icon: FaPhoneAlt,
      title: "Call Us",
      value: restaurant.phone,
      href: `tel:${restaurant.phone.replace(/[\s-]/g, "")}`,
    },
    {
      icon: FaEnvelope,
      title: "Email Us",
      value: restaurant.email,
      href: `mailto:${restaurant.email}`,
    },
    {
      icon: FaClock,
      title: "Opening Hours",
      value: restaurant.openingHours,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-base-200 px-5 py-20 sm:px-8 md:py-24">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            <FaMapMarkerAlt />
            FIND US
          </div>

          <h2 className="mt-5 text-3xl font-black text-base-content sm:text-4xl lg:text-5xl">
            Visit Us & <span className="text-primary">Say Hello</span>
          </h2>

          <p className="mt-5 leading-8 text-base-content/65 sm:text-lg">
            Have a question or planning your next meal with us?
            We would love to hear from you. Get in touch or find
            our location below.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left: Contact Information */}
          <div className="rounded-3xl border border-base-300 bg-base-100 p-6 shadow-sm sm:p-9">
            <h3 className="text-2xl font-bold">
              Contact Information
            </h3>

            <p className="mt-3 leading-7 text-base-content/65">
              Everything you need to plan your visit or get in touch
              with our team.
            </p>

            <div className="mt-8 space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lg text-primary">
                      <Icon />
                    </div>

                    <div className="min-w-0 pt-1">
                      <h4 className="font-bold">{item.title}</h4>

                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block break-words text-sm leading-6 text-base-content/65 transition hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 break-words text-sm leading-6 text-base-content/65">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-9 w-full rounded-xl sm:w-auto"
            >
              <FaDirections />
              Get Directions
              <FaArrowRight />
            </a>
          </div>

          {/* Right: Map / Location Card */}
          <div className="flex min-h-[350px] flex-col overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-sm sm:min-h-[450px]">
            {/* Map Placeholder */}
            <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-primary/5 p-8">
              <div className="absolute inset-0 opacity-40">
                <div className="absolute left-1/4 top-0 h-full w-px rotate-12 bg-base-content/10" />
                <div className="absolute left-2/3 top-0 h-full w-px -rotate-12 bg-base-content/10" />
                <div className="absolute left-0 top-1/3 h-px w-full rotate-6 bg-base-content/10" />
                <div className="absolute left-0 top-2/3 h-px w-full -rotate-6 bg-base-content/10" />
              </div>

              <div className="relative z-10 max-w-sm rounded-3xl border border-base-300 bg-base-100 p-8 text-center shadow-xl">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-3xl text-primary-content">
                  <FaMapMarkerAlt />
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  Find Our Restaurant
                </h3>

                <p className="mt-3 text-sm leading-7 text-base-content/65">
                  {restaurant.address}
                </p>

                <a
                  href={restaurant.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-primary mt-5 rounded-xl"
                >
                  Open Google Maps
                  <FaArrowRight />
                </a>
              </div>
            </div>

            {/* Bottom Card */}
            <div className="flex items-center gap-4 border-t border-base-300 p-5 sm:p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-xl text-primary">
                <FaClock />
              </div>

              <div>
                <p className="font-bold">Planning a Visit?</p>
                <p className="mt-1 text-sm text-base-content/65">
                  Check our opening hours before visiting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationContact;
