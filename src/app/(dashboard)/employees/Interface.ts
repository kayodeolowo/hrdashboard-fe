export interface Department {
  id: string;
  name: string;
}

export interface EmployeeTypes {
  id: string;
  name: string;
  avatar: string;
  firstName: string;
  lastName: string;
  image: string;
  employeeId: string;
  department: Department; 
  designation: string;
  type: string;
  status: string;
  roleType: string;
  jobStatus: string;
}
