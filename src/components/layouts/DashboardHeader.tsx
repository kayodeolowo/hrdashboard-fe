"use client";
import React from "react";
import { FaSearch, FaBell, FaCaretDown } from "react-icons/fa";
import Image from "next/image";
import { DashboardContainer } from "../styles/DashboardContainer";
interface DashboardHeaderProps {
  title: string;
  subtitle: string;
}
const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title, subtitle }) => {
  return (
    <DashboardContainer>
      <div className="flex w-full justify-between items-center  text-white p-4">
        {/* Left Section */}
        <div>
          <h1 className="text-lg font-semibold">{title}</h1>
          <p className="text-sm text-gray-400">{subtitle}</p>
        </div>

        {/* Middle Section */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative border border-gray-600 rounded-md bg-inherit">
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
          <div className="flex items-center space-x-2 cursor-pointer">
            <Image
              src="/assets/images/profile.png"
              alt="Profile Picture"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-medium">Lucifer</p>
              <p className="text-xs text-gray-400">HR Manager</p>
            </div>
            <FaCaretDown className="text-gray-400" />
          </div>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default DashboardHeader;
