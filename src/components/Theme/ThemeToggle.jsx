import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";


const getInitialTheme = () => {
  if (typeof window === "undefined") return "localchef-light";

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) return savedTheme;

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "localchef-dark";
  }

  return "localchef-light";
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "localchef-light" ? "localchef-dark" : "localchef-light"
    );
  };

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost btn-circle btn-sm"
      aria-label="Toggle theme"
    >
      {theme === "localchef-light" ? (
        <Moon className="w-5 h-5" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;
