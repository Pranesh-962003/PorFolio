import React from 'react'
import { experience } from '../assets/assets'

const Experience = () => {
  return (
    <div>
        <h1 className='text-2xl font-semibold'>Experience</h1>
        <div className='p-2'>
        <div className='flex flex-wrap items-center justify-center gap-7 '>
          {
            experience.map((items,index)=>(
              <div key={index} className='border py-3 px-3 rounded-sm shadow-xl hover:scale-[1.02] transition-all duration-500'>
              <h1 className='text-lg font-semibold'>{items.company}</h1>
              <h1 className='text-sm text-gray-600 mt-2'>{items.role}</h1>
              <p className='text-xs mt-1 text-gray-500'>{items.des}</p>
            </div>
            ))
          }
        </div>
        </div>
    </div>
  )
}

export default Experience