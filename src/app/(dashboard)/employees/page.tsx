"use client"
import DashboardHeader from '@/components/layouts/DashboardHeader'
import React from 'react'
import { EmployeeTypes } from './Interface'
import { DashboardContainer } from '@/components/styles/DashboardContainer';
import {  FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import { YellowBtn } from '@/components/styles/YellowBtn';
import { Button } from '@/components/styles/Button';
import { GoPlus } from 'react-icons/go';
import { BiFilter } from 'react-icons/bi';
import { RiEdit2Line } from 'react-icons/ri';
import { IoTrashOutline } from 'react-icons/io5';
import Link from 'next/link';
import { useFetchAllEmployeesQuery } from '@/redux/services/dashboardService';

const page: React.FC = () => {

  const { data, isLoading, error } = useFetchAllEmployeesQuery({});

  

  const all_employees = data?.data?.all_employees || []

 if  (isLoading) (
  <div className='text-white'>
  loading
  </div>
  
)


  return (
    <section>
     <div className='sticky z-10 top-0'>
     <DashboardHeader title="All Employees" subtitle="All Employee Information" />
     </div>

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
<Link href={`/employees/add-new-employee`}>
<YellowBtn className="flex items-center space-x-4"> <GoPlus className='text-lg mr-2 text-white'/> Add New Employee</YellowBtn>

</Link>
<Button  className="flex items-center space-x-4"> <BiFilter className='text-lg mr-2 '/> Filter </Button>
</div>


      
</div>
<div className="overflow-x-auto mt-4">
    <table className="min-w-full table-auto text-white">
      <thead>
        <tr className="border-b border-gray text-left">
          <th className="p-3 min-w-[10rem]">Employee Name</th>
          <th className="p-3 min-w-[10rem]">Employee ID</th>
          <th className="p-3 min-w-[10rem]">Department</th>
          <th className="p-3 min-w-[10rem]">Designation</th>
          <th className="p-3 ">Type</th>
          <th className="p-3 min-w-[10rem]">Status</th>
          <th className="p-3 min-w-[10rem]">Action</th>
        </tr>
      </thead>
      <tbody>
      {all_employees.map((employee: EmployeeTypes, index: number) => (
          <tr
            key={employee.id}
            className={`${
              index !== all_employees.length - 1 ? "border-b border-gray" : ""
            }`}
          >
            <td className="p-3 flex items-center space-x-2">
              {/* <Image
                src={employee.image}
                alt={employee.name}
                width={30}
                height={30}
                className="rounded-full"
              /> */}
              <span>{employee.name}</span>
            </td>
            <td className="p-3 border-gray">{employee.employeeId}</td>
            <td className="p-3 border-gray">{employee.department}</td>
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