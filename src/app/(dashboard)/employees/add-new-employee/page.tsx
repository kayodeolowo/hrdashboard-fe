"use client"
import React, { useState } from 'react'
import DashboardHeader from '@/components/layouts/DashboardHeader'
import PersonalInformation from '@/components/pages/PersonalInformation';
import ProfessionalInformation from '@/components/pages/ProfessionalInformation';
import { DashboardContainer } from '@/components/styles/DashboardContainer'
import { FaUser, FaBriefcase} from "react-icons/fa";


const tabs = [
  { id: 1, name: "Personal Information", icon: <FaUser /> },
  { id: 2, name: "Professional Information", icon: <FaBriefcase /> },
];


const Page = () => {

  const [activeTab, setActiveTab] = useState(1);

  const renderContent = () => {
    switch (activeTab) {
      case 1:
        return <PersonalInformation />;
      case 2:
        return <ProfessionalInformation />;
      default:
        return null;
    }
  };


  return (
    <section>
    <DashboardHeader title="All Employees" subtitle="All Employee Information" />

    <DashboardContainer>
<div className="p-4 rounded-lg text-white w-full border border-gray ">
      {/* Tab Header */}
      <div className="flex border-b border-gray">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium ${
              activeTab === tab.id
                ? "border-b-2 border-orange-500 text-orange-500"
                : "text-gray-400 hover:text-white"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            {tab.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">{renderContent()}</div>
    </div>

  </DashboardContainer>
  </section>
  )
}

export default Page