import React from 'react'
import { stats } from '../Constants'


const Stats = () => {
  return (
    <section id='stats' className='stats flex justify-center flex-col md:flex-row items-center text-white sm:px-16 px-6 py-4'>
         <div className='flex flex-col md:flex-row'>
          {stats.map(stat => {
            return (
              <div key={stat.id} className='px-4 m-3 flex flex-1 justify-start items-center flex-wrap'>
                   <h1 className='text-[20px] font-poppins text-white'>{stat.message}</h1>
                   <p className='text-[19px] text-poppins text-gradient text-white ml-3'>{stat.number}</p>
              </div>
            )
          })}
         </div>
    </section>
  )
}

export default Stats