import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Shared/Navbar/Navbar";
import { Outlet } from "react-router";
import { dashboardMenuItems } from "../constants";
import Sidebar from "../components/Shared/Sidebar/Sidebar";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const userRole = "admin";
  const currentMenu = dashboardMenuItems[userRole];

  return (
    <div className="min-h-screen bg-base-200">
      <div className="flex">
        <button
          className="btn btn-primary btn-circle fixed bottom-4 right-4 z-50 lg:hidden shadow-lg"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          currentMenu={currentMenu}
          userRole={userRole}
        ></Sidebar>

        <main className="flex-1 flex flex-col min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]">
          <Navbar />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="pt-22 px-5 lg:ps-8 pb-10 max-w-7xl"
          >
            <Outlet></Outlet>
          </motion.div>
        </main>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-base-content/20 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;
