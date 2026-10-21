
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com",
    },
    {
      name: "YouTube",
      icon: <FaYoutube />,
      url: "https://www.youtube.com/",
    },
  ];

  return (
    <footer className="bg-neutral text-neutral-content">
      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">

        {/* Restaurant Info */}
        <div>
          <a
            href="/"
            className="mb-4 inline-block text-2xl font-extrabold tracking-tight text-white"
          >
            Restaurant<span className="text-primary">.</span>
          </a>

          <p className="mb-6 max-w-xs text-sm leading-7 text-neutral-content/70">
            Discover delicious food, fresh ingredients, and unforgettable
            dining experiences. Quality food, served with love.
          </p>

          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                aria-label={social.name}
                title={social.name}
                target={social.url.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.url.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-white">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm text-neutral-content/70">
            <li>
              <a href="/" className="transition hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="/menu" className="transition hover:text-primary">
                Our Menu
              </a>
            </li>
            <li>
              <a href="/about" className="transition hover:text-primary">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="transition hover:text-primary">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Opening Information */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-white">
            Opening Hours
          </h3>

          <ul className="space-y-4 text-sm text-neutral-content/70">
            <li className="flex items-start justify-between gap-3">
              <span>Saturday - Thursday</span>
              <span className="whitespace-nowrap text-white">
                10 AM - 10 PM
              </span>
            </li>
            <li className="flex items-start justify-between gap-3">
              <span>Friday</span>
              <span className="whitespace-nowrap text-white">
                2 PM - 11 PM
              </span>
            </li>
          </ul>

          <p className="mt-5 text-xs text-neutral-content/50">
            Hours may vary on holidays.
          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-white">
            Get In Touch
          </h3>

          <ul className="space-y-4 text-sm text-neutral-content/70">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-primary" />
              <span>Your Restaurant Address, Bangladesh</span>
            </li>

            <li className="flex items-center gap-3">
              <FaPhoneAlt className="shrink-0 text-primary" />
              <a
                href="tel:+8801XXXXXXXXX"
                className="transition hover:text-primary"
              >
                +8801797-XXXXXX
              </a>
            </li>

            <li className="flex items-center gap-3">
              <FaEnvelope className="shrink-0 text-primary" />
              <a
                href="mailto:info@yourrestaurant.com"
                className="break-all transition hover:text-primary"
              >
                info@yourrestaurant.com
              </a>
            </li>
          </ul>

          <a
            href="/menu"
            className="btn btn-primary btn-sm mt-6 gap-2 rounded-lg"
          >
            Explore Menu <FaArrowRight />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-center text-xs text-neutral-content/60 sm:flex-row sm:text-left lg:px-8">
          <p>
            © {year} Restaurant. All rights reserved.
          </p>

          <p>
            Made with <span className="text-red-400">♥</span> for food lovers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
