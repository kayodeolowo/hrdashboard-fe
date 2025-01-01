import DashboardHeader from '@/components/layouts/DashboardHeader'
import React from 'react'
import { CandidatesTypes } from './Interface';
import { DashboardContainer } from '@/components/styles/DashboardContainer';
import { YellowBtn } from '@/components/styles/YellowBtn';
import { FaSearch } from 'react-icons/fa';
import { GoPlus } from 'react-icons/go';
import { RiEdit2Line } from 'react-icons/ri'; // Added missing import
import { IoTrashOutline } from 'react-icons/io5'; // Added missing import
import Image from 'next/image';

const candidatesData: CandidatesTypes[] = [
  {
    id: 1,
    avatar: '/assets/images/displaypic.png',
    name: 'John Doe',
    applied: 'Software Engineer',
    date: '2024-11-20',
    email: 'john.doe@example.com',
    number: '+1234567890',
    status: 'selected',
  },
  {
    id: 2,
    avatar: '/assets/images/displaypic.png',
    name: 'Jane Smith',
    applied: 'Data Scientist',
    date: '2024-11-18',
    email: 'jane.smith@example.com',
    number: '+9876543210',
    status: 'in progress',
  },
  {
    id: 3,
    avatar: '/assets/images/displaypic.png',
    name: 'David Lee',
    applied: 'Marketing Manager',
    date: '2024-11-15',
    email: 'david.lee@example.com',
    number: '+5551234567',
    status: 'rejected',
  },
];

const Page: React.FC = () => {
  return (
    <section>
      <DashboardHeader title="All Candidates" subtitle="All candidate Information" />
      <DashboardContainer>
        <div className="border rounded-lg border-gray-700 p-4">
          <div className="flex sm:flex-row flex-col items-center justify-between">
            <div className="relative py-1 max-sm:w-full lg:w-[25rem] border border-gray-600 rounded-md bg-inherit">
              <FaSearch className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="pl-10 bg-inherit pr-4 py-2 text-sm text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow"
              />
            </div>
          </div>

          <div className="overflow-x-auto mt-4">
            <table className="min-w-full table-auto text-white">
              <thead>
                <tr className="border-b border-gray-700 text-[#A2A1A8] text-left">
                  <th className="p-3 min-w-[10rem]">Candidate Name</th>
                  <th className="p-3 min-w-[10rem]">Applied for</th>
                  <th className="p-3 min-w-[10rem]">Applied Date</th>
                  <th className="p-3 min-w-[10rem]">Email Address</th>
                  <th className="p-3 min-w-[10rem]">Mobile Number</th>
                  <th className="p-3 min-w-[10rem]">Status</th>
                </tr>
              </thead>
              <tbody>
                {candidatesData.map((candidate, index) => (
                  <tr
                    key={candidate.id}
                    className={`${index !== candidatesData.length - 1 ? 'border-b border-gray-700' : ''}`}
                  >
                    <td className="p-3 flex items-center space-x-2">
                      <Image
                        src={candidate.avatar}
                        alt={candidate.name}
                        width={30}
                        height={30}
                        className="rounded-full"
                      />
                      <span>{candidate.name}</span>
                    </td>
                    <td className="p-3 border-gray-600">{candidate.applied}</td>
                    <td className="p-3 border-gray-600">{candidate.date}</td>
                    <td className="p-3 border-gray-600">{candidate.email}</td>
                    <td className="p-3 border-gray-600">{candidate.number}</td>
                    <td className="p-3 border-gray-600">
                      <span className="text-yellow bg-[#281913] px-3 py-1.5 rounded-md text-sm">
                        {candidate.status}
                      </span>
                    </td>
                   
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </DashboardContainer>
    </section>
  );
};

export default Page;
