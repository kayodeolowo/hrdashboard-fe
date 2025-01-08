import DashboardHeader from '@/components/layouts/DashboardHeader'
import { DashboardContainer } from '@/components/styles/DashboardContainer';
import React from 'react'
import { FaSearch } from 'react-icons/fa';

interface Member {
  name: string;
  role: string;
}

interface Department {
  name: string;
  memberCount: number;
  members: Member[];
}


const departments: Department[] = [
  {
    name: "Design Department",
    memberCount: 20,
    members: [
      { name: "Evghenii Conev", role: "Lead UI/UX Designer" },
      { name: "Jack Conev", role: "Sr. UI/UX Designer" },
      { name: "Dina Conev", role: "UI/UX Designer" },
      { name: "Vasilisa Coneva", role: "UI/UX Designer" },
      { name: "Econev", role: "UI/UX Designer" },
    ],
  },
  {
    name: "Sales Department",
    memberCount: 14,
    members: [
      { name: "Evghenii Conev", role: "Sr. Sales Manager" },
      { name: "Dina Coneva", role: "Sr. Sales Manager" },
      { name: "Jack Conev", role: "BDM" },
      { name: "Vasilisa Coneva", role: "BDE" },
      { name: "Econev", role: "Sales" },
    ],
  },
  {
    name: "Project Manager Department",
    memberCount: 18,
    members: [
      { name: "Vasilisa Coneva", role: "Sr. Project Manager" },
      { name: "Econev", role: "Sr. Project Manager" },
      { name: "Jack Conev", role: "Project Manager" },
      { name: "Dina Coneva", role: "Project Manager" },
      { name: "Evghenii Conev", role: "Project Manager" },
    ],
  },
  {
    name: "Marketing Department",
    memberCount: 10,
    members: [
      { name: "Evghenii Conev", role: "Sr. Marketing Manager" },
      { name: "Econev", role: "Sr. Marketing Manager" },
      { name: "Jack Conev", role: "Marketing Coordinator" },
      { name: "Vasilisa Coneva", role: "Marketing Coordinator" },
      { name: "Dina Coneva", role: "Marketing" },
    ],
  },
];


const page = () => {
  return (
    <section>

<DashboardHeader title="All Departments" subtitle="All Employee Information" />



    <DashboardContainer className=''>
 <div className='border rounded-lg border-gray p-4'>


    <div className="relative py-1 max-sm:w-full lg:w-[25rem] border border-gray rounded-md bg-inherit">
              <FaSearch className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 bg-inherit pr-4 py-2 text-sm text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow"
              />
            </div>

            
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
 {departments.map((department) => (
   <div
     key={department.name}
     className=" border border-gray rounded-lg shadow-md p-4 text-white"
   >
     <div className="flex  justify-between items-center ">
       <h2 className="text-xl font-semibold">{department.name}</h2>
       <p className="text-sm text-yellow cursor-pointer">View All</p>
     </div>
     <p className="text-sm text-gray-400 mb-4 pb-2 border-gray border-b ">
       {department.memberCount} Members
     </p>
     <ul>
       {department.members.map((member, index) => (
         <li
           key={index}
           className="flex items-center justify-between py-2 "
         >
           <div className="flex items-center">
             <div className="w-8 h-8 rounded-full bg-blue-500 mr-3"></div>
             <div>
               <p className="text-sm font-medium">{member.name}</p>
               <p className="text-xs text-gray-400">{member.role}</p>
             </div>
           </div>
           <span className="text-white">{">"}</span>
         </li>
       ))}
     </ul>
   </div>
 ))}
</div>
</div>
    </DashboardContainer>
      </section>
  )
}

export default page