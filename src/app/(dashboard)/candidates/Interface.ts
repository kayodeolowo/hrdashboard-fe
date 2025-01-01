export interface CandidatesTypes {
    id: number;
    avatar: string;
    name: string;
    applied: string;
    date: string;
    email: string;
    number: string;
    status: 'selected' | 'in progress' | 'rejected';
  }