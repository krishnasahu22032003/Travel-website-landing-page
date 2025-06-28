import { NAV_LINKS } from "../../constant";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-w-[1440px] mx-auto px-10 py-5 relative z-30">
      {/* Logo */}
      <a href="/">
        <img
          src="/images/logo.png"
          alt="logo"
          className="w-[100px] h-[70px] px-5 object-contain"
        />
      </a>

      {/* Navigation Links */}
      <ul className="hidden lg:flex h-full gap-12 items-center">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <a
              href={link.href}
              className="text-gray-400 text-[16px] font-normal pb-1.5 hover:font-bold transition-all"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Login Button */}
      <div className="hidden lg:flex items-center justify-center">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      {/* Mobile Menu Icon */}
      <img
        src="/images/menu.svg"
        alt="menu"
        className="block lg:hidden w-8 h-8 cursor-pointer"
      />
    </nav>
  );
};

export default Navbar;
