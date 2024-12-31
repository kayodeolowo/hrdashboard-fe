import DashboardSidebar from '@/components/layouts/DashboardSidebar';
import DashboardHeader from '@/components/layouts/DashboardHeader';
import React, { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode;
}



const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='flex space-x-4'>
      <DashboardSidebar   />
      <div className='w-full'>
        {children}
      </div>
    </div>
  )
}

export default Layout