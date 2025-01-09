import React from 'react'
import { InputComponent } from '../styles/InputComponent'

const PersonalInformationData = () => {
  return (
    <div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className=''>
                <div className='border-b border-gray'>
                    <p className='text-graysecondary'> First Name </p>
                    <InputComponent placeholder="" className="border-0 px-0 text-white"/>
                </div>

                <div className='border-b mt-4 border-gray '>
                    <p className='text-graysecondary'> Mobile Number </p>
                    <InputComponent placeholder="" className="border-0 px-0 text-white"/>
                </div>

                <div className='border-b mt-4 border-gray '>
                    <p className='text-graysecondary'> Date of Birth </p>
                    <InputComponent placeholder="" className="border-0 px-0 text-white"/>
                </div>

                <div className='border-b mt-4 border-gray '>
                    <p className='text-graysecondary'> Gender </p>
                    <InputComponent placeholder="" className="border-0 px-0 text-white"/>
                </div>

                <div className='border-b mt-4 border-gray '>
                    <p className='text-graysecondary'> Address</p>
                    <InputComponent placeholder="" className="border-0 px-0 text-white"/>
                </div>

                <div className='border-b mt-4 border-gray '>
                    <p className='text-graysecondary'> State </p>
                    <InputComponent placeholder="" className="border-0 px-0 text-white"/>
                </div>

               
                </div>

                <div className=''>
                <div className='border-b border-gray'>
                    <p className='text-graysecondary'> Last Name </p>
                    <InputComponent placeholder="" className="border-0 px-0 text-white"/>
                </div>

                <div className='border-b mt-4 border-gray '>
                    <p className='text-graysecondary'> Email Address </p>
                    <InputComponent placeholder="" className="border-0 px-0 text-white"/>
                </div>

                <div className='border-b mt-4 border-gray '>
                    <p className='text-graysecondary'> Marital Status </p>
                    <InputComponent placeholder="" className="border-0 px-0 text-white"/>
                </div>

                <div className='border-b mt-4 border-gray '>
                    <p className='text-graysecondary'> Nationality </p>
                    <InputComponent placeholder="" className="border-0 px-0 text-white"/>
                </div>

                <div className='border-b mt-4 border-gray '>
                    <p className='text-graysecondary'> City</p>
                    <InputComponent placeholder="" className="border-0 px-0 text-white"/>
                </div>

                <div className='border-b mt-4 border-gray '>
                    <p className='text-graysecondary'> Zip Code</p>
                    <InputComponent placeholder="" className="border-0 px-0 text-white"/>
                </div>

               
                </div>

                
        </div>
    </div>
  )
}

export default PersonalInformationData