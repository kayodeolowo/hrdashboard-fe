"use client"
import React, { useState } from 'react'
import DashboardHeader from '@/components/layouts/DashboardHeader'
import PersonalInformation from '@/components/pages/PersonalInformation';
import { DashboardContainer } from '@/components/styles/DashboardContainer'





const Page = () => {




  return (
    <section>
    <DashboardHeader title="All Employees" subtitle="All Employee Information" />

    <DashboardContainer>
<div className="p-4 rounded-lg text-white w-full border border-gray ">
<PersonalInformation />
    </div>

  </DashboardContainer>
  </section>
  )
}

export default Page