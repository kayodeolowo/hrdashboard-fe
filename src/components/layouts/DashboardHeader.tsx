"use client";
import React, { useState } from "react";
import { FaSearch, FaBell, FaCaretDown } from "react-icons/fa";
import Image from "next/image";
import { DashboardContainer } from "../styles/DashboardContainer";
import { RiMenu3Fill } from "react-icons/ri";
import { FaUsers, FaClipboardList, FaCalendarAlt, FaBriefcase, FaCog } from "react-icons/fa";
import { MdDashboard, MdOutlineClose } from "react-icons/md";

import Link from "next/link";

interface DashboardHeaderProps {
  title: string;
  subtitle: string;
}

const menuItems = [
  { id: 1, name: "Dashboard", icon: <MdDashboard />, link: "/dashboard" },
  { id: 2, name: "All Employees", icon: <FaUsers />, link: "/employees" },
  { id: 3, name: "All Departments", icon: <FaClipboardList />, link: "/departments" },
  { id: 4, name: "Attendance", icon: <FaCalendarAlt />, link: "/attendance" },
  { id: 5, name: "Jobs", icon: <FaBriefcase />, link: "/jobs" },
  { id: 6, name: "Candidates", icon: <FaUsers />, link: "/candidates" },
  { id: 7, name: "Settings", icon: <FaCog />, link: "/settings" },
];

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title, subtitle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
    const [activeItem, setActiveItem] = useState(1); // Track the active menu item

  return (
    <DashboardContainer>
      <div className="flex w-full justify-between items-center text-white p-4">
        {/* Left Section */}
        <div className="max-lg:hidden">
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-sm text-gray-400">{subtitle}</p>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <RiMenu3Fill className="text-2xl cursor-pointer" onClick={toggleMenu} />
        </div>

        {/* Middle Section */}
        <div className="flex items-center space-x-2 md:space-x-4">
          {/* Search Bar */}
          <div className="relative max-md:hidden w-[25rem] border border-gray-600 rounded-md bg-inherit">
            <FaSearch className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 bg-inherit pr-4 py-2 text-sm text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow"
            />
          </div>

          {/* Notification Bell */}
          <div className="bg-gray-800 p-2 rounded-md relative">
            <FaBell className="text-xl cursor-pointer text-gray-400 hover:text-white" />
          </div>

          {/* Profile Dropdown */}
          <div className="flex border-2 border-gray-600 p-1 rounded-md items-center space-x-2 cursor-pointer">
            <Image
              src="/assets/images/displaypic.png"
              alt="Profile Picture"
              width={30}
              height={30}
              className="rounded-full"
            />
            <div className="max-md:hidden">
              <p className="text-sm font-medium">Kayode Olowo</p>
              <p className="text-xs text-gray-400">HR Manager</p>
            </div>
            <FaCaretDown className="text-gray-400" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-screen max-w-[20rem] w-[60%] bg-darkgray z-50 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4 mt-10 text-white">
          <button onClick={toggleMenu} className="text-xl mb-4">
          <MdOutlineClose/>
          </button>
          <ul className="space-y-4">
          {menuItems.map((item) => (
            <Link key={item.id} href={item.link} onClick={toggleMenu}>
              <p
                className={`flex items-center max-w-[15rem] py-3 px-4 text-left ${
                  activeItem === item.id
                    ? 'bg-[#241D1A] text-yellow rounded-r-md border-l-4 border-yellow'
                    : 'text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => setActiveItem(item.id)}
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </p>
            </Link>
          ))}
          </ul>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default DashboardHeader;
