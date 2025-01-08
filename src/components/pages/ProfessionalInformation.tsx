import React from 'react'
import { InputComponent } from '../styles/InputComponent'
import { YellowBtn } from '../styles/YellowBtn'

const ProfessionalInformation = () => {
  return (
     <div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <InputComponent className='w-full'  placeholder="Employee ID"/>
            <InputComponent className='w-full'  placeholder="User Name"/>
    
            </div>
    
    
            <div className='grid mt-4 grid-cols-1 md:grid-cols-2 gap-4'>
            <InputComponent className='w-full'  placeholder="Mobiel Number"/>
            <InputComponent className='w-full'  placeholder="Email Address"/>
    
            </div>
    
            <div className='grid mt-4 grid-cols-1 md:grid-cols-2 gap-4'>
            <InputComponent className='w-full'  placeholder="Date of Birth" type="date"/>
            <InputComponent className='w-full'  placeholder="Marital Status"/>
    
            </div>
    
    
            <div className='grid mt-4 grid-cols-1 md:grid-cols-2 gap-4'>
            <InputComponent className='w-full'  placeholder="Gender" />
            <InputComponent className='w-full'  placeholder="Nationality"/>
    
            </div>
    
            <div className='grid mt-4 grid-cols-1 gap-4'>
            <InputComponent className='w-full'  placeholder="Select Office Location" />
            </div>
    
            <span className='flex justify-end'>
            <YellowBtn className='mt-10 px-10' label='Save'> Save </YellowBtn>
            </span>
        </div>
  )
}

export default ProfessionalInformation