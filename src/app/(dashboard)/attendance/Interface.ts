export interface AttendanceTypes {
    id: number;
    avatar: string;
    name: string;
    designation: string;
    type: string;
    time: string;
    status: 'on time' | 'late';
  }