import React, { useState, useEffect, ChangeEvent } from 'react';
import { InputComponent } from '../styles/InputComponent';
import { useFetchEmployeeDetailsQuery } from '@/redux/services/dashboardService';
import { YellowBtn } from '../styles/YellowBtn';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { ApiResponse, EmployeeData } from '@/Interface/employee';


const PersonalInformationData: React.FC = () => {
  const selectedEmployeeId = localStorage.getItem('selectedEmployee');
  const { data, isLoading, error, refetch } = useFetchEmployeeDetailsQuery(selectedEmployeeId);
  const employeeDetails = data?.data?.employee || {};
  
  const [formData, setFormData] = useState<EmployeeData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    maritalStatus: '',
    gender: '',
    nationality: '',
    address: '',
    state: ''
  });
  
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  // Update form data when employee details are loaded
  useEffect(() => {
    if (employeeDetails && Object.keys(employeeDetails).length > 0) {
      setFormData({
        firstName: employeeDetails.firstName || '',
        lastName: employeeDetails.lastName || '',
        email: employeeDetails.email || '',
        phoneNumber: employeeDetails.phoneNumber || '',
        dateOfBirth: employeeDetails.dateOfBirth ? new Date(employeeDetails.dateOfBirth).toISOString().split('T')[0] : '',
        maritalStatus: employeeDetails.maritalStatus || '',
        gender: employeeDetails.gender || '',
        nationality: employeeDetails.nationality || '',
        address: employeeDetails.address || '',
        state: employeeDetails.state || ''
      });
    }
  }, [employeeDetails]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setIsEditing(true);
  };

  const handleSave = async (): Promise<void> => {
    setIsSaving(true);
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const token = localStorage.getItem('hrToken');
      
      const response = await axios.put<ApiResponse>(
        `${baseUrl}/employees/${selectedEmployeeId}`,
        formData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      
      if (response.data.success === true) {
        toast.success(response.data.message || 'Employee information updated successfully');
        setIsEditing(false);
        refetch();
      } else {
        toast.error(response.data.message || 'Failed to update employee information');
      }
    } catch (err) {
      console.error('Error updating employee:', err);
      const error = err as AxiosError<{message: string}>;
      toast.error(error.response?.data?.message || 'An error occurred while updating');
    } finally {
      setIsSaving(false);
    }
  };

  // Helper function to render input fields with loading state
  const renderInputField = (label: string, name: string, value: string): React.ReactElement => (
    <div className='border-b mt-4 border-gray'>
      <p className='text-graysecondary'>{label}</p>
      {isLoading ? (
        <Skeleton height={40} width="100%" />
      ) : (
        <InputComponent 
          name={name}
          value={value}
          onChange={handleInputChange}
          className="border-0 px-0 text-white w-full"
        />
      )}
    </div>
  );

  // Helper function to render select fields with loading state
  const renderSelectField = (label: string, name: string, value: string, options: {value: string, label: string}[]): React.ReactElement => (
    <div className='border-b mt-4 border-gray'>
      <p className='text-graysecondary'>{label}</p>
      {isLoading ? (
        <Skeleton height={40} width="100%" />
      ) : (
        <select
          name={name}
          value={value}
          onChange={handleInputChange}
          className="border-0 px-0 text-white w-full bg-inherit focus:outline-none py-2"
        >
          <option className='bg-[#121212]' value="" disabled>Select {label}</option>
          {options.map((option) => (
            <option className='bg-[#121212]' key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );

  // Helper function to render date picker with loading state
  const renderDateField = (label: string, name: string, value: string): React.ReactElement => (
    <div className='border-b mt-4 border-gray'>
      <p className='text-graysecondary'>{label}</p>
      {isLoading ? (
        <Skeleton height={40} width="100%" />
      ) : (
        <input
          type="date"
          name={name}
          value={value}
          onChange={handleInputChange}
          className="border-0 px-0 text-white w-full bg-transparent focus:outline-none py-2"
        />
      )}
    </div>
  );

  return (
    <div>
      {error && (
        <div className="p-4 mb-4 text-sm text-red-500 bg-red-100 rounded-lg">
          Failed to load employee data. Please try again later.
        </div>
      )}
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className=''>
          <div className='border-b border-gray'>
            <p className='text-graysecondary'>First Name</p>
            {isLoading ? (
              <Skeleton height={40} width="100%" />
            ) : (
              <InputComponent 
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="border-0 px-0 text-white w-full"
              />
            )}
          </div>
          
          {renderInputField('Mobile Number', 'phoneNumber', formData.phoneNumber)}
          {renderDateField('Date of Birth', 'dateOfBirth', formData.dateOfBirth)}
          {renderSelectField('Gender', 'gender', formData.gender, [
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' }
          ])}
          {renderInputField('Address', 'address', formData.address)}
        </div>

        <div className=''>
          <div className='border-b border-gray'>
            <p className='text-graysecondary'>Last Name</p>
            {isLoading ? (
              <Skeleton height={40} width="100%" />
            ) : (
              <InputComponent 
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="border-0 px-0 text-white w-full"
              />
            )}
          </div>
          
          {renderInputField('Email Address', 'email', formData.email)}
          {renderSelectField('Marital Status', 'maritalStatus', formData.maritalStatus, [
            { value: 'single', label: 'Single' },
            { value: 'married', label: 'Married' }
          ])}
          {renderInputField('Nationality', 'nationality', formData.nationality)}
          {renderInputField('State', 'state', formData.state)}
        </div>

        <span className='flex justify-end col-span-1 md:col-span-2'>
          <YellowBtn 
            className='mt-10 px-10' 
            onClick={handleSave}
            disabled={!isEditing || isSaving}
          >
            {isSaving ? 'Saving...' : 'Save'}
          </YellowBtn>
        </span>
      </div>
    </div>
  );
};

export default PersonalInformationData;