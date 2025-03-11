export interface EmployeeData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  maritalStatus: string;
  gender: string;
  nationality: string;
  address: string;
  state: string;
  [key: string]: string; 
}

export interface ProfessionalData {
  employeeId: string;
  employeeWorkEmail: string;
  employeeType: string;
  workingDays: string;
  joiningDate: string;
  officeLocation: string;
  [key: string]: string; 
}

export interface ApiResponse {
    success: boolean;
  message: string;
  data: ProfessionalData;
}

export interface PApiResponse {
  success: boolean;
  message: string;
  data: EmployeeData;
}