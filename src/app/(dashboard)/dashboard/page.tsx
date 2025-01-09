import DashboardHeader from '@/components/layouts/DashboardHeader'
import DashboardStats from '@/components/pages/DashboardStats';
import { DashboardContainer } from '@/components/styles/DashboardContainer';
import React from 'react'



const page = () => {




  return (
    <section>
      <DashboardHeader title="Hello Kayode" subtitle="Good Morning" />
     <DashboardContainer>
  <DashboardStats/>
      </DashboardContainer> 
     
      </section>
    
  )
}

export default page