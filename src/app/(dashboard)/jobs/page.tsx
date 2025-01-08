"use client"
import DashboardHeader from '@/components/layouts/DashboardHeader'
import React, { useState } from 'react'
import { JobTypes } from './Interface'
import { DashboardContainer } from '@/components/styles/DashboardContainer';
import { YellowBtn } from '@/components/styles/YellowBtn';
import { FaSearch } from 'react-icons/fa';
import { GoPlus } from 'react-icons/go';
import { FaLocationDot } from 'react-icons/fa6';
import AddJobModal from '@/components/modals/AddJobModal';


const sampleJobs: JobTypes[] = [
  {
    id: 1,
    title: 'UI/UX Designer',
    category: 'Design',
    type: 'Full Time | Remote',
    location: 'Moldova',
    salary: '$3600/Month',
    status: 'active',
  },
  {
    id: 2,
    title: 'HR Executive',
    category: 'HR',
    type: 'Full Time | Remote',
    location: 'Moldova',
    salary: '$3600/Month',
    status: 'inactive',
  },
  {
    id: 3,
    title: 'Sr. UX Researcher',
    category: 'Design',
    type: 'Full Time',
    location: 'Moldova',
    salary: '$1500/Month',
    status: 'completed',
  },
];
const Page: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  
  return (
    
    <section>
     <DashboardHeader title="All Jobs" subtitle="All Employee Information" />

     <DashboardContainer>
<div className='border rounded-lg border-gray p-4'> 
     <div className='flex sm:flex-row flex-col items-center justify-between'>
      <div className="relative py-1 max-sm:w-full lg:w-[25rem] border border-gray rounded-md bg-inherit">
                        <FaSearch className="absolute top-3 left-3 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search"
                          className="pl-10 bg-inherit pr-4 py-2 text-sm text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow"
                        />
                      </div>
                      <YellowBtn   onClick={() => setOpenModal(true)} className=" max-sm:mt-4 max-sm:w-full flex items-center space-x-4"> <GoPlus className='text-lg mr-2 text-white'/> Add New Jobs</YellowBtn>
      
            
      </div>
     <div className="flex mt-6 flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
      
      {/* Active Jobs */}
      <div className="bg-inherit border border-gray p-4 rounded-lg w-full md:w-1/3">
        <h2 className="text-yellow-500 font-semibold text-lg mb-4">Active Jobs</h2>
        {sampleJobs.filter(job => job.status === 'active').map(job => (
          <div key={job.id} className="bg-darkgray p-4 rounded-md shadow-lg mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-white font-semibold">{job.title}</h3>
              <span className="text-sm text-yellow-500">● Active</span>
            </div>
            <div className="text-sm mt-4 text-gray-400">
              <span className="bg-yellow text-white px-2 py-1.5 text-sm rounded mr-2">{job.category}</span>
              <span className="bg-yellow text-white px-2 py-1.5 text-sm rounded mr-2">{job.type}</span>
            </div>
            <p className="text-gray-400 flex items-center space-x-2 mt-4">
            <FaLocationDot className='text-sm'/> <span className='mr-2'> {job.location} </span>
            </p>
            <p className="text-white font-semibold mt-2">{job.salary}</p>
          </div>
        ))}
      </div>

      {/* Inactive Jobs */}
      <div className="bg-inherit border border-gray p-4 rounded-lg w-full md:w-1/3">
        <h2 className="text-red-500 font-semibold text-lg mb-4">Inactive Jobs</h2>
        {sampleJobs.filter(job => job.status === 'inactive').map(job => (
          <div key={job.id} className="bg-darkgray p-4 rounded-md shadow-lg mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-white font-semibold">{job.title}</h3>
              <span className="text-sm text-red-500">● Inactive</span>
            </div>
            <div className="text-sm mt-4 text-gray-400">
              <span className="bg-yellow text-white px-2 py-1.5 text-sm rounded mr-2">{job.category}</span>
              <span className="bg-yellow text-white px-2 py-1.5 text-sm rounded mr-2">{job.type}</span>
            </div>
            <p className="text-gray-400 flex items-center space-x-2 mt-4">
            <FaLocationDot className='text-sm'/> <span className='mr-2'> {job.location} </span>
            </p>
            <p className="text-white font-semibold mt-2">{job.salary}</p>
          </div>
        ))}
      </div>

      {/* Completed Jobs */}
      <div className="bg-inherit border border-gray p-4 rounded-lg w-full md:w-1/3">
        <h2 className="text-green-500 font-semibold  mb-4">Completed Jobs</h2>
        {sampleJobs.filter(job => job.status === 'completed').map(job => (
          <div key={job.id} className="bg-darkgray p-4 rounded-md shadow-lg mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-white font-semibold">{job.title}</h3>
              <span className="text-sm text-green-500">● Completed</span>
            </div>
            <div className="text-sm mt-4 text-gray-400">
              <span className="bg-yellow text-white px-2 py-1.5 text-sm rounded mr-2">{job.category}</span>
              <span className="bg-yellow text-white px-2 py-1.5 text-sm rounded mr-2">{job.type}</span>
            </div>
            <p className="text-gray-400 flex items-center space-x-2 mt-4">
            <FaLocationDot className='text-sm'/> <span className='mr-2'> {job.location} </span>
            </p>
            <p className="text-white font-semibold mt-2">{job.salary}</p>
          </div>
        ))}
      </div>
    </div>
    </div>

    <AddJobModal onClose={() => setOpenModal(false)} isOpen={openModal} />
     </DashboardContainer>
      </section>
  )
}

export default Page