"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation"; // For accessing the current path
import { FaUsers, FaClipboardList, FaCalendarAlt, FaBriefcase, FaCog } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const menuItems = [
  { id: 1, name: "Dashboard", icon: <MdDashboard />, link: "/dashboard" },
  { id: 2, name: "All Employees", icon: <FaUsers />, link: "/employees" },
  { id: 3, name: "All Departments", icon: <FaClipboardList />, link: "/departments" },
  { id: 4, name: "Attendance", icon: <FaCalendarAlt />, link: "/attendance" },
  { id: 5, name: "Jobs", icon: <FaBriefcase />, link: "/jobs" },
  { id: 6, name: "Candidates", icon: <FaUsers />, link: "/candidates" },
  { id: 7, name: "Settings", icon: <FaCog />, link: "/settings" },
];

const DashboardSidebar = () => {
  const pathname = usePathname(); // Get the current path

  return (
    <div className="bg-darkgray max-lg:hidden rounded-2xl h-[98vh] w-[20%] max-w-[20rem] mt-4 ml-4 p-4 flex flex-col justify-between">
      {/* Logo */}
      <div>
        <div className="flex items-center space-x-2 mb-6">
          <Image
            alt="logo"
            src="/assets/images/logo.png"
            width={30}
            height={50}
          />
          <p className="font-semibold text-white">WorkGrid</p>
        </div>

        {/* Menu Items */}
        <nav>
          {menuItems.map((item) => (
            <Link key={item.id} href={item.link}>
              <p
                className={`flex items-center w-full py-4 px-4 text-left ${
                  pathname.startsWith(item.link)
                    ? "bg-[#241D1A] text-yellow rounded-r-md border-l-4 border-yellow"
                    : "text-gray-300 hover:bg-gray-700"
                }`}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </p>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default DashboardSidebar;
