import DashboardHeader from '@/components/layouts/DashboardHeader'
import React from 'react'
import { AttendanceTypes } from './Interface';
import { DashboardContainer } from '@/components/styles/DashboardContainer';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';

const attendanceData: AttendanceTypes[] = [
  {
    id: 1,
    avatar: '/assets/images/displaypic.png', 
    name: 'John Doe',
    designation: 'Software Engineer',
    type: 'Present', 
    time: '09:00 AM',
    status: 'on time',
  },
  {
    id: 2,
    avatar: '/assets/images/displaypic.png', 
    name: 'Jane Smith',
    designation: 'Data Scientist',
    type: 'Present', 
    time: '09:15 AM',
    status: 'late',
  },
  {
    id: 3,
    avatar: '/assets/images/displaypic.png', 
    name: 'David Lee',
    designation: 'Marketing Manager',
    type: 'Present', 
    time: '09:00 AM',
    status: 'on time',
  },
];

const Page: React.FC = () => {
  return (
    <section>
      <DashboardHeader title="All Candidates" subtitle="All candidate Information" />
      <DashboardContainer>
        <div className="border rounded-lg border-gray p-4">
          <div className="flex sm:flex-row flex-col items-center justify-between">
            <div className="relative py-1 max-sm:w-full lg:w-[25rem] border border-gray rounded-md bg-inherit">
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
                <tr className="border-b border-gray text-[#A2A1A8] text-left">
                  <th className="p-3 min-w-[10rem]">Employee Name</th>
                  <th className="p-3 min-w-[10rem]">Designation</th>
                  <th className="p-3 min-w-[10rem]">Type</th>
                  <th className="p-3 min-w-[10rem]">Check In Time</th>
                  <th className="p-3 min-w-[10rem]">Status</th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((candidate, index) => (
                  <tr
                    key={candidate.id}
                    className={`${index !== attendanceData.length - 1 ? 'border-b border-gray' : ''}`}
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
                    <td className="p-3 border-gray">{candidate.designation}</td>
                    <td className="p-3 border-gray">{candidate.type}</td>
                    <td className="p-3 border-gray">{candidate.time}</td>
                    <td className="p-3 border-gray">{candidate.status}</td>
                   
                   
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
