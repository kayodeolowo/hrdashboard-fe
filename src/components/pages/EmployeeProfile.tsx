import React, { useState } from 'react'
import { FaUser, FaBriefcase} from "react-icons/fa";
import PersonalInformationData from './PersonalInformationData';
import ProfessionalInformationData from './ProfessionalInformationData';
import { useFetchEmployeeDetailsQuery } from '@/redux/services/dashboardService';

const EmployeeProfile = () => {
  

  const tabs = [
    { id: 1, name: "Personal Information", icon: <FaUser /> },
    { id: 2, name: "Professional Information", icon: <FaBriefcase /> },
  ];


  const [activeTab, setActiveTab] = useState(1);

  const renderContent = () => {
    switch (activeTab) {
      case 1:
        return <PersonalInformationData  />;
      case 2:
        return <ProfessionalInformationData />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex overflow-x-auto border-b border-gray">
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
      <div className="mt-6 w-full ">{renderContent()}</div>
    </div>
  )
}

export default EmployeeProfile