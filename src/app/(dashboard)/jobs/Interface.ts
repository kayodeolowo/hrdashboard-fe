export interface JobTypes {
    id: number;
    title: string;
    category: string;
    type: string;
    location: string;
    salary: string;
    status: 'active' | 'inactive' | 'completed';
  }