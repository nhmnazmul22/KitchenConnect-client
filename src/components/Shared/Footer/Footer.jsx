import { Link } from "react-router";
import {
  ChefHat,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";
import { socialLinks } from "@/constants";
import Logo from "../../common/Logo/Logo";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-neutral text-neutral-content py-10">
      <div className="main-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left w-full">
          <div className="space-y-4">
            <Logo></Logo>
            <p className="text-sm opacity-80">
              Connecting food lovers with passionate local chefs. Enjoy
              authentic, home-cooked meals delivered right to your doorstep.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="btn btn-ghost btn-circle btn-sm"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="space-y-2">
              {[
                "Home",
                "Browse Meals",
                "Become a Chef",
                "How It Works",
                "About Us",
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="link link-hover text-sm opacity-80">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm opacity-80">
                  123 Culinary Street, Foodie District
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-sm opacity-80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-sm opacity-80">
                  hello@localchefbazaar.com
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-title">Working Hours</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>10:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>11:00 AM - 11:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>12:00 PM - 9:00 PM</span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-primary/20 rounded-lg">
              <p className="text-sm font-medium">🔥 Order Now & Get 20% Off!</p>
              <p className="text-xs opacity-70 mt-1">Use code: FIRSTBITE</p>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-content/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 w-full">
          <p className="text-sm opacity-60">
            © 2024 KitchenConnect. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="link link-hover text-sm opacity-60">
              Privacy Policy
            </a>
            <a href="#" className="link link-hover text-sm opacity-60">
              Terms of Service
            </a>
            <a href="#" className="link link-hover text-sm opacity-60">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
