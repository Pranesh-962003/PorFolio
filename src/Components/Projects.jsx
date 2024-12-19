import React from 'react'
import { projects } from '../assets/assets'

const Projects = () => {
  return (
    <div className='w-[98%] flex flex-wrap items-center gap-4'>
        <p className='text-2xl font-semibold'>Projects</p>
       {
        projects.map((items, index)=>(
            <div key={index} className='border p-5 rounded-lg shadow-xl mt-5 '>
                <div className=' h-[300px] m-2 flex items-end justify-center rounded-lg'>
                    <img className='h-[300px] w-full  rounded-xl' src="/src/assets/Screenshot 2024-11-27 092202.png" alt="" />
                </div>
                <div className='mx-3'>
                    <h1 className='text-lg font-medium'>{items.title}</h1>
                    <p className='text-xs mt-2 text-gray-500'>{items.des}</p>
                    <div className='flex gap-5 mt-5'>
                        <a href="" className='px-6 py-2  rounded-full bg-black text-white text-sm font-semibold hover:scale-[1.05] duration-300 transition-all'>Linkedin</a> 
                        <a href="" className='px-6 py-2  rounded-full bg-black text-white text-sm font-semibold hover:scale-[1.05] duration-300 transition-all'>Github</a>
                    </div>
                </div>
        </div>
        ))
       }
       
    </div>
  )
}

export default Projects