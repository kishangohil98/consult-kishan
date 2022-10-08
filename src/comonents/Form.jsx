import React from 'react'
import { TextInput } from '../inputs/TextInput'

export const Form = () => {
  return (
    <div className='container mx-auto my-9 pt-9'>
        <div className='flex flex-col md:flex-row'>
            <div className='w-full md:w-4/12 flex justify-center items-center'>
                <h6 className='font-bold text-4xl my-9 ml-6 text-center md:text-left'>
                    We Would Love To Help!!!
                </h6>
            </div>
            <div className='w-full md:w-8/12 ml-3'>
                <div className='grid grid-cols-2'>
                    <TextInput
                        label="First Name*"
                        placeholder="First Name*"
                    />
                    <TextInput
                        label="Last Name*"
                        placeholder="Last Name*"
                    />
                    <TextInput
                        label="Email ID*"
                        placeholder="Email ID*"
                    />
                    <TextInput
                        label="Contact Number"
                        placeholder="Contact Number"
                    />
                </div>
                <div>
                    <TextInput
                        label="About Project"
                        placeholder="About Project"
                    />
                </div>
                <div className='mt-9 pt-6 flex justify-center'>
                    <a href="#" className='bg-[#214462] text-[#FFFFFF] px-6 py-3 font-bold rounded-lg mx-auto'>Get Free Quote</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form