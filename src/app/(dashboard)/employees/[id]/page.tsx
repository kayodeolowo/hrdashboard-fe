"use client";
import DashboardHeader from "@/components/layouts/DashboardHeader";
import React, { useEffect, useState } from "react";
import { DashboardContainer } from "@/components/styles/DashboardContainer";
import Image from "next/image";
import { FaBriefcase, FaFileSignature, FaRegUser } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";
import { YellowBtn } from "@/components/styles/YellowBtn";
import { CiEdit } from "react-icons/ci";
import EmployeeProfile from "@/components/pages/EmployeeProfile";
import EmployeeAttendance from "@/components/pages/EmployeeAttendance";
import EmpoloyeeProjects from "@/components/pages/EmpoloyeeProjects";
import { MdOutlineWorkOutline } from "react-icons/md";
import { useParams } from "next/navigation";
import { useFetchEmployeeDetailsQuery } from "@/redux/services/dashboardService";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const tabs = [
  { id: 1, name: "Profile", icon: <FaRegUser /> },
  { id: 2, name: "Attendance", icon: <FaFileSignature /> },
  { id: 3, name: "Projects", icon: <MdOutlineWorkOutline /> },
];

const Page = () => {
  const params = useParams();
  const { id } = params;

  const { data, isLoading, error } = useFetchEmployeeDetailsQuery(id);

  const [activeTab, setActiveTab] = useState(1);

  const employeeDetails = data?.data?.employee || {};




  const renderContent = () => {
    switch (activeTab) {
      case 1:
        return <EmployeeProfile  />;
      case 2:
        return <EmployeeAttendance />;
      case 3:
        return <EmpoloyeeProjects />;
      default:
        return null;
    }
  };



  if (error) {
    return (
      <section>
        <DashboardHeader title="Error" subtitle="Failed to load data" />
        <p className="text-red-500">An error occurred while fetching data.</p>
      </section>
    );
  }

  return (
    <section>
      <DashboardHeader title="All Employees" subtitle="All Employee Information" />

      <DashboardContainer>
        <div className="border rounded-lg border-gray p-4">
          <div className="flex lg:flex-row flex-col  lg:justify-between lg:items-end">
          <div className="flex lg:flex-row flex-col lg:space-x-2">
  {isLoading ? (
    <>
      {/* Skeleton for the image */}
      <Skeleton  height={70} width={130}  baseColor="#1A1A1A"   highlightColor="#333"  />
      <div>
        {/* Skeletons for text */}
        <Skeleton width={150} height={20} baseColor="#1A1A1A"   highlightColor="#333" />
        <Skeleton width={100} height={10} baseColor="#1A1A1A"   highlightColor="#333" className="mt-2 flex " />
        <Skeleton width={200} height={10} baseColor="#1A1A1A"   highlightColor="#333" className="mt-2 flex " />
      </div>
    </>
  ) : (
    <>
      <Image
        src={employeeDetails?.avatar || "/assets/images/Man.jpg"}
        alt={`${employeeDetails?.firstName} ${employeeDetails?.lastName}`}
        width={120}
        height={120}
        className="object-cover max-lg:mx-auto max-lg:w-[60%]  rounded-lg"
      />
      <div>
        <h1 className="text-lg max-lg:text-center max-lg:mt-4  font-bold">
          {employeeDetails?.firstName} {employeeDetails?.lastName}
        </h1>
        <p className="flex max-lg:w-fit max-lg:mx-auto items-center mt-1">
          <span className="mr-2 text-sm">
            <FaBriefcase className="max-lg:hidden" />
          </span>
          {employeeDetails?.department?.name}
        </p>
        <p className="flex max-lg:w-fit max-lg:mx-auto items-center">
          <span className="mr-2">
            <IoIosMailUnread  className="max-lg:hidden"/>
          </span>
          {employeeDetails?.email}
        </p>
      </div>
    </>
  )}
</div>


           
          </div>

          <div className="h-[1px] w-full mt-6 mb-6 bg-gray"></div>

          <div className=" flex space-x-6">
            <div className="hidden lg:flex flex-col h-[11rem] border rounded-lg w-[12rem] p-4 border-gray">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`flex items-center gap-2 px-6 py-3 text-sm font-medium ${
                    activeTab === tab.id
                      ? "bg-yellow rounded-lg"
                      : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.icon}
                  {tab.name}
                </button>
              ))}
            </div>
            

            <div className="w-full">{renderContent()}</div>
          </div>
        </div>
      </DashboardContainer>
    </section>
  );
};

export default Page;
