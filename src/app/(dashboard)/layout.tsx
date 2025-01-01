import DashboardSidebar from '@/components/layouts/DashboardSidebar';
import React, { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode;
}



const Layout: React.FC<LayoutProps> = ({ children }) => {
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