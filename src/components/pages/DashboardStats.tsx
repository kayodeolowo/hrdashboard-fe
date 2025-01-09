import React from 'react'
import { BsPeople } from "react-icons/bs";
import { HiOutlineBriefcase } from "react-icons/hi";
import { FaRegFileAlt } from "react-icons/fa";
import { LuConstruction } from "react-icons/lu";


interface DashboardCardProps {
    title: string;
    value: number | string;
    icon: React.ElementType;
  }
  
  
  const DashboardCard: React.FC<DashboardCardProps> =  ({ title, value, icon:Icon}) => {
    return (
      <div className=" text-white p-6  border border-gray rounded-lg  flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div>
           <div className='flex space-x-4 items-center'>
           <div className=' bg-darkyellow p-3 rounded-lg'>
           <Icon className="text-lg text-yellow" />
           </div>
           <p className="text-graysecondary ">{title}</p>
           </div>
            <h2 className="text-3xl font-bold mt-5">{value}</h2>
          </div>
          
        </div>
      
      </div>
    );
  };
const DashboardStats = () => {

    const cardsData = [
        { title: 'Total Employee', value: 666, icon: BsPeople  },
        { title: 'Total Applicant', value: '0666', icon: HiOutlineBriefcase,  },
        { title: 'Today Attendance', value: 666, icon: FaRegFileAlt},
        { title: 'Total Projects', value: 666, icon:LuConstruction  },
      ];


  return (
    <div>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardsData.map((card, index) => (
          <DashboardCard
            key={index}
            title={card.title}
            value={card.value}
            icon={card.icon}
            
            
          />
        ))}
   
    </div>
    </div>
  )
}

export default DashboardStats