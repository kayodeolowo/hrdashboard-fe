"use client"
import DashboardHeader from "@/components/layouts/DashboardHeader";
import { DashboardContainer } from "@/components/styles/DashboardContainer";
import { useFetchAllDepartmentsQuery } from "@/redux/services/departmentService";
import React from "react";
import { FaSearch } from "react-icons/fa";

// Define TypeScript types for the API response
interface Employee {
  jobStatus: string;
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  employeeId: string;
}

interface Department {
  _id: string;
  name: string;
  totalEmployees: number;
  employees: Employee[];
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: {
    data: Department[];
  };
}

const DepartmentsPage: React.FC = () => {
  const { data, isLoading, error } = useFetchAllDepartmentsQuery({});

  const departments: Department[] = data?.data?.data || [];

  return (
    <section>
      <DashboardHeader title="All Departments" subtitle="All Employee Information" />

      <DashboardContainer>
        <div className="border rounded-lg border-gray p-4">
          <div className="relative py-1 max-sm:w-full lg:w-[25rem] border border-gray rounded-md bg-inherit">
            <FaSearch className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 bg-inherit pr-4 py-2 text-sm text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {isLoading ? (
           
              [...Array(3)].map((_, index) => (
                <div key={index} className="border border-gray rounded-lg shadow-md p-4 animate-pulse bg-gray-800">
                  <div className="h-6 bg-gray rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray rounded w-1/2 mb-4"></div>
                  <div className="h-4 bg-gray rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray rounded w-full mb-2"></div>
                </div>
              ))
            ) : error ? (
              // Display error message
              <p className="text-red-500">Failed to load departments. Please try again.</p>
            ) : (
              departments.map((department) => (
                <div
                key={department._id}
                className="border border-gray rounded-lg shadow-md p-4 text-white"
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold">{department.name}</h2>
                  <p className="text-sm text-yellow cursor-pointer">View All</p>
                </div>
                <p className="text-sm text-gray-400 mb-4 pb-2 border-b border-gray">
                  {department.totalEmployees} Members
                </p>
                <ul>
                  {department.employees.slice(0, 3).map((member, index) => (
                    <li key={index} className="flex items-center justify-between py-2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-blue-500 mr-3"></div>
                        <div>
                          <p className="text-sm font-medium">{member.firstName} {member.lastName}</p>
                          <p className="text-xs text-gray-400">{member.jobStatus}</p>
                        </div>
                      </div>
                      <span className="text-white">{">"}</span>
                    </li>
                  ))}
                </ul>
              </div>
              ))
            )}
          </div>
        </div>
      </DashboardContainer>
    </section>
  );
};

export default DepartmentsPage;
