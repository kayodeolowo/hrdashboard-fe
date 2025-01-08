"use client"
import DashboardHeader from '@/components/layouts/DashboardHeader'
import React, { useState } from 'react'
import { DashboardContainer } from '@/components/styles/DashboardContainer'
import Image from 'next/image'
import {  FaBriefcase, FaFileSignature, FaRegUser,  } from "react-icons/fa";
import { IoIosMailUnread } from "react-icons/io";
import { YellowBtn } from '@/components/styles/YellowBtn';
import { CiEdit } from "react-icons/ci";
import EmployeeProfile from '@/components/pages/EmployeeProfile';
import EmployeeAttendance from '@/components/pages/EmployeeAttendance';
import EmpoloyeeProjects from '@/components/pages/EmpoloyeeProjects';
import { MdOutlineWorkOutline } from 'react-icons/md';

const tabs = [
  { id: 1, name: "Profile", icon: <FaRegUser/>},
  { id: 2, name: "Attendance", icon: <FaFileSignature/> },
  { id: 3, name: "Projects", icon: <MdOutlineWorkOutline/> },
];




const Page = () => {

    const [activeTab, setActiveTab] = useState(1);

const renderContent = () => {
  switch (activeTab) {
    case 1:
      return <EmployeeProfile/>;
    case 2:
      return <EmployeeAttendance />;
      case 3:
        return <EmpoloyeeProjects />;
    default:
      return null;
  }
};


  return (
    <section>
    <DashboardHeader title="All Employees" subtitle="All Employee Information" />

    <DashboardContainer>
        <div className='border rounded-lg border-gray p-4'> 
    <div className=' flex justify-between  items-end '>

        <div className='flex space-x-2'>
            <Image 
            src={"/assets/images/Man.jpg"}
            alt=''
            width={120}
            height={120}
            className='cover rounded-lg'
            />

            <div>
                <h1 className='text-lg font-bold'> Dina Coneva </h1>

                <p className='flex items-center mt-1'> <span className='mr-2 text-sm'> <FaBriefcase/> </span>   Project Manager </p>
                <p className='flex items-center'> <span className='mr-2'> <IoIosMailUnread /> </span> E-mail </p>
            </div> 
        </div>

        <div>
            <YellowBtn className="px-4 flex items-center"> <CiEdit  className='text-lg mr-2'/> Edit Profile  </YellowBtn>
        </div>

    </div>

    <div className='h-[1px] w-full mt-6 mb-6 bg-gray'> </div>


    <div className='flex space-x-6'>
    <div className="flex flex-col border rounded-lg w-[12rem] p-4 border-gray">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex  items-center gap-2 px-6 py-3 text-sm font-medium ${
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

      <div className="mt-6">{renderContent()}</div>

    </div>
    </div>
    </DashboardContainer>
    </section>
  )
}

export default Page