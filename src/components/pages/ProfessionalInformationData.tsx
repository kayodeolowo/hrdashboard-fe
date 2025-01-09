import React from 'react'
import { InputComponent } from '../styles/InputComponent'

const ProfessionalInformationData = () => {
  return (
     <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className=''>
                    <div className='border-b border-gray'>
                        <p className='text-graysecondary'> Employee ID </p>
                        <InputComponent placeholder="" className="border-0 px-0 text-white"/>
                    </div>
    
                    <div className='border-b mt-4 border-gray '>
                        <p className='text-graysecondary'> Employee Type </p>
                        <InputComponent placeholder="" className="border-0 px-0 text-white"/>
                    </div>
    
                    <div className='border-b mt-4 border-gray '>
                        <p className='text-graysecondary'> Working Days </p>
                        <InputComponent placeholder="" className="border-0 px-0 text-white"/>
                    </div>
    
                    <div className='border-b mt-4 border-gray '>
                        <p className='text-graysecondary'> Office Location </p>
                        <InputComponent placeholder="" className="border-0 px-0 text-white"/>
                    </div>
    
                   
    
                   
                    </div>
    
                    <div className=''>
                    <div className='border-b border-gray'>
                        <p className='text-graysecondary'> User Name </p>
                        <InputComponent placeholder="" className="border-0 px-0 text-white"/>
                    </div>
    
                    <div className='border-b mt-4 border-gray '>
                        <p className='text-graysecondary'> Email Address </p>
                        <InputComponent placeholder="" className="border-0 px-0 text-white"/>
                    </div>
    
                    <div className='border-b mt-4 border-gray '>
                        <p className='text-graysecondary'> Designation </p>
                        <InputComponent placeholder="" className="border-0 px-0 text-white"/>
                    </div>
    
                    <div className='border-b mt-4 border-gray '>
                        <p className='text-graysecondary'> Joining Date </p>
                        <InputComponent placeholder="" className="border-0 px-0 text-white"/>
                    </div>
    
                  
    
                   
                    </div>
    
                    
            </div>
  )
}

export default ProfessionalInformationData