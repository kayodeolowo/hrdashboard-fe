import React, { useState } from "react";
import { InputComponent } from "../styles/InputComponent";
import { YellowBtn } from "../styles/YellowBtn";
import { useFetchAllDepartmentsQuery } from "@/redux/services/departmentService";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import axios from "axios";
import MediaUpload from "../utils/MediaUpload";
import DatePickerField from "../utils/CustomDateInput";

// Define types for department data
interface Department {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  employees: any[];
  totalEmployees: number;
}

interface DepartmentResponse {
  success: boolean;
  message: string;
  data: {
    data: Department[];
  };
}

// Define form data types
interface FormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: string;
  maritalStatus: string;
  gender: string;
  nationality: string;
  address: string;
  state: string;
  department: string;
  roleType: string;
  jobStatus: string;
  joinDate: string;
}

const PersonalInformation: React.FC = () => {
  // State for button text and avatar image
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  
  // Fetch departments data
  const { data: departmentsResponse, isLoading, error } = useFetchAllDepartmentsQuery({}) as {
    data?: DepartmentResponse;
    isLoading: boolean;
    error: any;
  };
  
  // Extract departments array from the response
  const departments: Department[] = departmentsResponse?.data?.data || [];

  // React Hook Form
  const { register, handleSubmit, control,reset , formState: { errors } } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      dateOfBirth: "",
      maritalStatus: "",
      gender: "",
      nationality: "",
      address: "",
      state: "",
      department: "",
      roleType: "",
      jobStatus: "",
      joinDate: "",
    }
  });

  // Countries list for dropdown
  const countries: string[] = [
    "Canadian",
    "American",
    "British",
    "Australian",
    "Nigerian"
  ];


  const maritalStatusOptions = [
    { label: "Married", value: "Married" },
    { label: "Single", value: "Single" },
    { label: "Divorced", value: "Divorced" },
  ];

  const roleTypeOptions = [
    { label: "Onsite", value: "Onsite" },
    { label: "Remote", value: "Remote" },
    { label: "Hybrid", value: "Hybrid" },
    
  ];

  const genderTypeOptions = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
  ];

  const employemntStatusOptions = [
    { label: "Permanent", value: "Permanent" },
    { label: "Contract", value: "Contract" },
  ];

  // Handle avatar upload success
  const handleAvatarUploadSuccess = (imageUrl: string) => {
    setAvatarUrl(imageUrl);
  };
  
  // Handle form submission
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setIsSubmitting(true);
      
      // Format the date fields to match required format (MM-DD-YYYY)
      const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}-${date.getFullYear()}`;
      };
      
      const formattedData = {
        ...data,
        dateOfBirth: formatDate(data.dateOfBirth),
        joinDate: formatDate(data.joinDate),
        avatar: avatarUrl // Include the avatar URL in the submission
      };
      
      // Get token from localStorage
      const token = localStorage.getItem('hrToken');
      const apiKey = process.env.NEXT_PUBLIC_APP_ID;
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      
      // Make API call
      const response = await axios.post(
        `${baseUrl}/employees/add`,
        formattedData,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
            'x-api-key': apiKey
          }
        }
      );
      
      console.log('Employee added successfully:', response.data);
      

       reset();
      
    } catch (error) {
      console.error('Error adding employee:', error);
      // Handle error (show error message)
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {/* Replace Image with MediaUpload component */}
        <MediaUpload
          onUploadSuccess={handleAvatarUploadSuccess}
          className="mt-4 mx-auto"
        />

        <h1 className="text-lg mt-4 mb-1 border-b border-yellow w-fit px-1 text-yellow">
          Personal Information
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-6 gap-4">
          <InputComponent 
            className="w-full" 
            placeholder="First Name" 
            {...register("firstName", { required: true })}
          />
          <InputComponent 
            className="w-full" 
            placeholder="Last Name" 
            {...register("lastName", { required: true })}
          />
        </div>

        <div className="grid mt-4 grid-cols-1 md:grid-cols-2 gap-4">
          <InputComponent 
            className="w-full" 
            placeholder="Mobile Number" 
            {...register("phoneNumber", { required: true })}
          />
          <InputComponent 
            className="w-full" 
            placeholder="Email Address" 
            {...register("email", { required: true })}
          />
        </div>

        <div className="grid mt-4 grid-cols-1 md:grid-cols-2 gap-4">
        <DatePickerField
            name="dateOfBirth"
            placeholder="Date of Birth"
            control={control}
            required={true}
            className="w-full  "
          />
          <div className="w-full">
            <Controller
              name="maritalStatus"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <select
                  {...field}
                  className="border rounded-lg focus:bg-inherit border-gray mt-1 text-whiteshade outline-none p-3 w-full bg-inherit focus:border-yellow"
                >
                  <option value="" disabled>Select Marital Status</option>
                  {maritalStatusOptions.map((option) => (
                    <option key={option.value} className="bg-black" value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>
        </div>

        <div className="grid mt-4 grid-cols-1 md:grid-cols-2 gap-4">
          {/* Gender Dropdown */}
          <div className="w-full">
            <Controller
              name="gender"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <select
                  {...field}
                  className="border rounded-lg focus:bg-inherit border-gray mt-1 text-whiteshade outline-none p-3 w-full bg-inherit focus:border-yellow"
                >
                  <option value="" disabled>Select Gender</option>
                  {genderTypeOptions.map((option) => (
                    <option key={option.value} className="bg-black" value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>
          
          {/* Nationality Dropdown */}
          <div className="w-full">
            <Controller
              name="nationality"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <select
                  {...field}
                  className="border rounded-lg focus:bg-inherit border-gray mt-1 text-whiteshade outline-none p-3 w-full bg-inherit focus:border-yellow"
                >
                  <option value="" disabled>Select Nationality</option>
                  {countries.map((country) => (
                    <option key={country} className="bg-black" value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>
        </div>

        <div className="grid mt-4 grid-cols-1 md:grid-cols-2 gap-4">
          <InputComponent 
            className="w-full" 
            placeholder="Address" 
            {...register("address", { required: true })}
          />
          <InputComponent 
            className="w-full" 
            placeholder="State" 
            {...register("state", { required: true })}
          />
        </div>

        <div className="mt-10">
          <h1 className="text-lg mb-1 border-b border-yellow w-fit px-1 text-yellow">
            Professional Information
          </h1>

          <div className="grid mt-6 grid-cols-1 md:grid-cols-2 gap-4">
            {/* Department Select Dropdown */}
            <div className="w-full">
              <Controller
                name="department"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <select
                    {...field}
                    className="border rounded-lg focus:bg-inherit border-gray mt-1 text-whiteshade outline-none p-3 w-full bg-inherit focus:border-yellow"
                  >
                    <option value="" disabled>Select Department</option>
                    {isLoading ? (
                      <option disabled>Loading departments...</option>
                    ) : error ? (
                      <option disabled>Error loading departments</option>
                    ) : (
                      departments.map((dept) => (
                        <option key={dept._id} className="bg-black" value={dept._id}>
                          {dept.name}
                        </option>
                      ))
                    )}
                  </select>
                )}
              />
            </div>
            
            {/* Job Status Dropdown */}
            <div className="w-full">
              <Controller
                name="jobStatus"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <select
                    {...field}
                    className="border rounded-lg focus:bg-inherit border-gray mt-1 text-whiteshade outline-none p-3 w-full bg-inherit focus:border-yellow"
                  >
                    <option value="" disabled>Select Employment Status</option>
                    {employemntStatusOptions.map((option) => (
                      <option key={option.value} className="bg-black" value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
          </div>

          <div className="grid mt-4 grid-cols-1 md:grid-cols-2 gap-4">
            {/* Role Type Dropdown */}
            <div className="w-full">
              <Controller
                name="roleType"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <select
                    {...field}
                    className="border rounded-lg focus:bg-inherit border-gray mt-1 text-whiteshade outline-none p-3 w-full bg-inherit focus:border-yellow"
                  >
                    <option value="" disabled>Select Role Type</option>
                    {roleTypeOptions.map((option) => (
                      <option key={option.value} className="bg-black text-whiteshade" value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
            
            <DatePickerField
              name="joinDate"
              placeholder="Joining Date"
              control={control}
              required={true}
              
            />
          </div>
        </div>

        <span className="flex justify-end">
          <YellowBtn 
            className="mt-10 px-10" 
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving..." : "Save"}
          </YellowBtn>
        </span>
      </div>
    </form>
  );
};

export default PersonalInformation;