"use client"
import DashboardSidebar from '@/components/layouts/DashboardSidebar';
import React, { ReactNode, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

interface LayoutProps {
  children: ReactNode;
}






const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    const userToken = localStorage.getItem('hrToken');
    if (!userToken) {
      toast.error('Please login');
      router.push('/login'); 
    }
  }, [router]);

  return (
    <div className='lg:flex lg:space-x-4'>
      <DashboardSidebar  />
      <div className='w-full'>
        {children}
      </div>

   
    </div>
  )
}

export default Layout