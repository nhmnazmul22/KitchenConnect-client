import React from "react";
import { navLinks } from "@/constants";
import { Link, NavLink } from "react-router";
import { Layout, User } from "lucide-react";
import useAuth from "@/hooks/useAuth";

const MobileMenu = (isLoggedIn, setIsMenuOpen) => {
  const { signOutUser } = useAuth();

  return (
    <div className="absolute top-full left-0 right-0 bg-base-100 border-b border-base-300 md:hidden animate-[fadeIn_0.2s_ease-out]">
      <ul className="menu p-4">
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `font-medium ${isActive ? "active text-primary" : ""}`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </NavLink>
          </li>
        ))}
        <div className="divider my-2"></div>
        {isLoggedIn ? (
          <>
            <li>
              <Link to="/dashboard">
                <Layout className="w-4 h-4" />
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/profile"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="w-4 h-4" />
                Profile
              </Link>
            </li>
            <li onClick={signOutUser}>
              <a className="text-error">Logout</a>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default MobileMenu;
