import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X, User, ShoppingBag, Heart } from "lucide-react";
import ThemeToggle from "../../Theme/ThemeToggle";
import { navLinks } from "../../../constants";
import MobileMenu from "./MobileMenu";
import Logo from "../../common/Logo/Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isLoggedIn = false;

  return (
    <div className="bg-base-100/80 backdrop-blur-lg border-b border-base-300 fixed top-0 left-0 right-0 z-50 ">
      <div className="navbar main-container">
        <div className="navbar-start">
          <Logo></Logo>
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `font-medium ${isActive ? "active text-primary" : ""}`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop Actions */}
        <div className="navbar-end gap-2">
          <ThemeToggle />

          <div className="hidden md:flex items-center gap-2">
            {isLoggedIn ? (
              <>
                <Link
                  to="/favorites"
                  className="btn btn-ghost btn-circle btn-sm"
                >
                  <Heart className="w-5 h-5" />
                </Link>
                <Link
                  to="/dashboard/orders"
                  className="btn btn-ghost btn-circle btn-sm"
                >
                  <ShoppingBag className="w-5 h-5" />
                </Link>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
                        alt="Profile"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-lg mt-3"
                  >
                    <li>
                      <Link to="/dashboard/profile">
                        <User className="w-4 h-4" />
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/dashboard/orders">
                        <ShoppingBag className="w-4 h-4" />
                        My Orders
                      </Link>
                    </li>
                    <div className="divider my-1"></div>
                    <li>
                      <a className="text-error">Logout</a>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link to="/auth/login" className="btn btn-ghost btn-md">
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="btn btn-primary btn-md btn-shine"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="btn btn-ghost btn-circle md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <MobileMenu
            isLoggedIn={isLoggedIn}
            setIsMenuOpen={setIsMenuOpen}
          ></MobileMenu>
        )}
      </div>
    </div>
  );
};

export default Navbar;
