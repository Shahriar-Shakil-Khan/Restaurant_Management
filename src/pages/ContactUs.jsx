import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="min-h-screen w-full overflow-hidden bg-[#1f1f1d] text-white">
      {/* Hero Section */}
      <div className="relative border-b border-white/5 px-4 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-amber-500">
            — Get In Touch —
          </p>

          <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
            Contact <span className="text-amber-500">Us</span>
          </h1>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-amber-500" />

          <p className="mx-auto mt-7 max-w-xl leading-7 text-gray-400">
            Have a question, reservation request, or feedback?
            <br className="hidden sm:block" />
            We would love to hear from you.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-amber-500">
            Contact Information
          </p>

          <h2 className="mb-5 text-3xl font-bold sm:text-4xl">
            We’re Here to Help
          </h2>

          <p className="mb-10 max-w-xl leading-7 text-gray-400">
            Feel free to reach out to us through any of the following channels.
            We’ll get back to you as soon as possible.
          </p>

          <div className="grid gap-8 sm:grid-cols-2">
            {/* Location */}
            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#292927] p-5 transition duration-300 hover:border-amber-500/50">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                <FaMapMarkerAlt size={20} />
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Our Location</h3>
                <p className="text-sm leading-6 text-gray-400">
                  Add your restaurant address here
                  <br />
                  Bangladesh
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#292927] p-5 transition duration-300 hover:border-amber-500/50">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                <FaPhoneAlt size={20} />
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Phone Number</h3>
                <a
                  href="tel:+8801234567890"
                  className="text-sm leading-6 text-gray-400 transition hover:text-amber-500"
                >
                  Add your phone number
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#292927] p-5 transition duration-300 hover:border-amber-500/50">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                <FaEnvelope size={20} />
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Email Address</h3>
                <a
                  href="mailto:hello@lihar.com"
                  className="break-all text-sm text-gray-400 transition hover:text-amber-500"
                >
                  hello@lihar.com
                </a>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-[#292927] p-5 transition duration-300 hover:border-amber-500/50">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                <FaClock size={20} />
              </div>

              <div>
                <h3 className="mb-2 font-semibold">Opening Hours</h3>
                <p className="text-sm leading-6 text-gray-400">
                  Saturday – Thursday
                  <br />
                  10:00 AM – 10:00 PM
                  <br />
                  Friday: 2:00 PM – 11:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Visit Us */}
          <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-white/10 pt-8">
            <p className="text-2xl font-semibold italic text-amber-500">
              Visit Us
            </p>

            <div>
              <p className="text-sm text-gray-300">Good food, great moments.</p>
              <p className="mt-1 text-sm text-gray-500">See you soon!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-1 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500" />
    </section>
  );
};

export default ContactUs;
