import { NAV_LINKS } from "../../constant";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="relative z-50 w-full bg-transparent">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto px-6 lg:px-12 py-5">
        
        {/* Logo */}
        <a href="/" className="shrink-0" aria-label="Go to homepage">
          <img
            src="/images/logo.png"
            alt="Globeora Logo"
            className="w-[120px] h-[70px] object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <a
                  href={link.href}
                  className="text-black text-[16px] font-medium hover:text-green-70 transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <Button
            type="button"
            title="Login"
            icon="/images/user.svg"
            variant="btn_dark_green"
          />
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button aria-label="Open menu">
            <img
              src="/images/menu.svg"
              alt="Menu"
              className="w-8 h-8 cursor-pointer"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
