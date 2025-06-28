import { NAV_LINKS } from "../../constant";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between max-w-[1440px] mx-auto px-6 lg:px-12 py-5">
      {/* Logo */}
      <a href="/" className="shrink-0">
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-[100px] h-[60px] object-contain"
        />
      </a>

      {/* Nav + Button Group */}
      <div className="hidden lg:flex items-center gap-8">
        {/* Navigation Links */}
        <ul className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <a
                href={link.href}
                className="text-gray-400 text-[16px] font-normal hover:font-bold transition-all"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Login Button */}
        <Button
          type="button"
          title="Login"
          icon="/images/user.svg"
          variant="btn_dark_green"
        />
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden">
        <img
          src="/images/menu.svg"
          alt="menu"
          className="w-8 h-8 cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;
