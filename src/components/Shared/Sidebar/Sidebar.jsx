import { Link } from "lucide-react";
import { NavLink } from "react-router";

const Sidebar = ({ sidebarOpen, setSidebarOpen, userRole, currentMenu }) => {
  return (
    <aside
      className={`fixed pt-18 lg:sticky top-0 left-0 z-40 h-screen w-64 bg-base-100
            border-r border-base-300 transform transition-transform duration-300 ease-in-out ${
              sidebarOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            }`}
    >
      <div className="p-4">
        <div className="mb-6 p-3 bg-primary/10 rounded-xl">
          <p className="text-xs opacity-60 mb-1">Logged in as</p>
          <p className="font-semibold capitalize">{userRole} Dashboard</p>
        </div>

        <ul className="menu p-0 gap-1">
          {currentMenu.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  isActive ? "active bg-primary text-primary-content" : ""
                }
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
