import React, { useState, useEffect, ChangeEvent } from 'react';
import { InputComponent } from '../styles/InputComponent';
import { useFetchEmployeeDetailsQuery } from '@/redux/services/dashboardService';
import { YellowBtn } from '../styles/YellowBtn';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import axios, { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { PApiResponse, ProfessionalData } from '@/Interface/employee';

const ProfessionalInformationData: React.FC = () => {
  const selectedEmployeeId = localStorage.getItem('selectedEmployee');
  const { data, isLoading, error, refetch } = useFetchEmployeeDetailsQuery(selectedEmployeeId);
  const employeeDetails = data?.data?.employee || {};
  
  const [formData, setFormData] = useState<ProfessionalData>({
    employeeId: '',
    employeeWorkEmail: '',
    employeeType: '',
    workingDays: '',
    joiningDate: '',
    officeLocation: ''
  });
  
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  // Update form data when employee details are loaded
  useEffect(() => {
    if (employeeDetails && Object.keys(employeeDetails).length > 0) {
      setFormData({
        employeeId: employeeDetails.employeeId || '',
        employeeWorkEmail: employeeDetails.email || '',
        employeeType: employeeDetails.jobStatus || '',
        workingDays: employeeDetails.workingDays || '5',
        joiningDate: employeeDetails.joinDate ? new Date(employeeDetails.joinDate).toISOString().split('T')[0] : '',
        officeLocation: employeeDetails.roleType || ''
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
      
      // Create a new object with only the editable fields
      const editableData = {
        employeeType: formData.employeeType,
        workingDays: formData.workingDays,
        joiningDate: formData.joiningDate,
        officeLocation: formData.officeLocation
      };
      
      const response = await axios.put<PApiResponse>(
        `${baseUrl}/employees/${selectedEmployeeId}`,
        editableData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );
      
      if (response.data.success === true) {
        toast.success(response.data.message || 'Professional information updated successfully');
        setIsEditing(false);
        refetch();
      } else {
        toast.error(response.data.message || 'Failed to update professional information');
      }
    } catch (err) {
      console.error('Error updating professional info:', err);
      const error = err as AxiosError<{message: string}>;
      toast.error(error.response?.data?.message || 'An error occurred while updating');
    } finally {
      setIsSaving(false);
    }
  };

  // Helper function to render input fields with loading state
  const renderInputField = (label: string, name: string, value: string, disabled: boolean = false): React.ReactElement => (
    <div className='border-b mt-4 border-gray'>
      <p className='text-graysecondary'>{label}</p>
      {isLoading ? (
        <Skeleton height={40} width="100%" />
      ) : (
        <InputComponent 
          name={name}
          value={value}
          onChange={handleInputChange}
          disabled={disabled}
          className={`border-0 px-0 w-full ${disabled ? 'text-gray-500 cursor-not-allowed' : 'text-white'}`}
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
          className="border-0 px-0 text-white w-full  bg-transparent focus:outline-none py-2"
        >
          <option className='bg-[#121212]' value="" disabled>Select {label}</option>
          {options.map((option) => (
            <option className='bg-[#121212] ' key={option.value} value={option.value}>
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
            <p className='text-graysecondary'>Employee ID</p>
            {isLoading ? (
              <Skeleton height={40} width="100%" />
            ) : (
              <InputComponent 
                name="employeeId"
                value={formData.employeeId}
                disabled={true}
                className="border-0 px-0 text-gray-500 cursor-not-allowed w-full"
              />
            )}
          </div>
          
          {renderSelectField('Employee Type', 'employeeType', formData.employeeType, [
            { value: 'contract', label: 'Contract' },
            { value: 'fulltime', label: 'Full Time' }
          ])}
          
          {renderInputField('Working Days', 'workingDays', formData.workingDays)}
        </div>

        <div className=''>
          <div className='border-b border-gray'>
            <p className='text-graysecondary'>Company Email Address</p>
            {isLoading ? (
              <Skeleton height={40} width="100%" />
            ) : (
              <InputComponent 
                name="email"
                value={formData.employeeWorkEmail}
                disabled={true}
                className="border-0 px-0 text-gray-500 cursor-not-allowed w-full"
              />
            )}
          </div>
          
          {renderDateField('Joining Date', 'joiningDate', formData.joiningDate)}
          
          {renderSelectField('Office Location', 'officeLocation', formData.officeLocation, [
            { value: 'remote', label: 'Remote' },
            { value: 'onsite', label: 'Onsite' },
            { value: 'hybrid', label: 'Hybrid' }
          ])}
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

export default ProfessionalInformationData;