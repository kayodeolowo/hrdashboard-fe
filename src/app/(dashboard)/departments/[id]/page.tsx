import DashboardHeader from '@/components/layouts/DashboardHeader'
import React from 'react'
import { DepartmentTypes } from '../Interface';
import { DashboardContainer } from '@/components/styles/DashboardContainer';
import {  FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import { YellowBtn } from '@/components/styles/YellowBtn';
import { Button } from '@/components/styles/Button';
import { GoPlus } from 'react-icons/go';
import { BiFilter } from 'react-icons/bi';
import { RiEdit2Line } from 'react-icons/ri';
import { IoTrashOutline } from 'react-icons/io5';

const page: React.FC = () => {

  const employees: DepartmentTypes[] = [
    {
      id: 1,
      name: "Vasilisa",
      image: "/assets/images/displaypic.png", // Replace with actual path
      employeeId: "000666000",
      department: "Design",
      designation: "UI/UX Designer",
      type: "Office",
      status: "Activated",
    },
    {
      id: 2,
      name: "Dina",
      image: "/assets/images/displaypic.png", // Replace with actual path
      employeeId: "000666000",
      department: "Development",
      designation: "PHP Developer",
      type: "Remote",
      status: "Activated",
    },
    {
      id: 3,
      name: "Jack",
      image: "/assets/images/displaypic.png", // Replace with actual path
      employeeId: "000666000",
      department: "Sales",
      designation: "Sales Manager",
      type: "Office",
      status: "Activated",
    },
  ];


  return (
    <section>
     <DashboardHeader title="Design Department" subtitle="All Departments" />

     <DashboardContainer>
     <div className="p-6 border rounded-md border-gray">
<div className='flex md:flex-row flex-col md:items-center md:justify-between'>
<div className="relative py-1 md:w-[25rem] border border-gray rounded-md bg-inherit">
                  <FaSearch className="absolute top-3 left-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-10 bg-inherit pr-4 py-2 text-sm text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow"
                  />
                </div>
<div className='flex max-md:justify-between max-md:mt-4 items-center space-x-5'>
<YellowBtn className="flex items-center space-x-4"> <GoPlus className='text-lg mr-2 text-white'/> Add New Employee</YellowBtn>
<Button  className="flex items-center space-x-4"> <BiFilter className='text-lg mr-2 '/> Filter </Button>
</div>


      
</div>
<div className="overflow-x-auto mt-4">
    <table className="min-w-full table-auto text-white">
      <thead>
        <tr className="border-b border-gray text-[#A2A1A8] text-left">
        <th className="p-3 min-w-[10rem]">Employee ID</th>
          <th className="p-3 min-w-[10rem]">Employee Name</th>   
        
          <th className="p-3 min-w-[10rem]">Designation</th>
          <th className="p-3 ">Type</th>
          <th className="p-3 min-w-[10rem]">Status</th>
          <th className="p-3 min-w-[10rem]">Action</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr
            key={employee.id}
            className={`${
              index !== employees.length - 1 ? "border-b border-gray" : ""
            }`}
          >
           
            <td className="p-3 border-gray">{employee.employeeId}</td>
            <td className="p-3 flex items-center space-x-2">
              <Image
                src={employee.image}
                alt={employee.name}
                width={30}
                height={30}
                className="rounded-full"
              />
              <span>{employee.name}</span>
            </td>
           
            <td className="p-3 border-gray">{employee.designation}</td>
            <td className="p-3 border-gray">{employee.type}</td>
            <td className="p-3 border-gray">
              <span className="text-yellow bg-[#281913] px-3 py-1.5 rounded-md text-sm">
                {employee.status}
              </span>
            </td>
            <td className="p-3 space-x-4 items-center flex">
              <button className="text-xl text-green-500 hover:text-green-700">
                <RiEdit2Line />
              </button>
              <button className="text-xl text-red-500 hover:text-red-700">
                <IoTrashOutline />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
    </div>
     </DashboardContainer>
      </section>
  )
}

export default page