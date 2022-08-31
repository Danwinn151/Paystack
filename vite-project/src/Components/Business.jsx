import React from 'react'
import { Features } from '../Constants'

const Business = () => {
  return (
    <section id='AboutUs' className={`flex md:flex-row flex justify-between flex-col xl:px-16 px-6 xl:px-0`}>
      <div className='flex-col px-4 py-4'>
          <h1 className='font-poppins text-white text-[40px] leading-[50px]'>
          You do the business,<br/>
          We handle the money.
          </h1>
          <p className='text-white max-w-[470px] text-gradient'>
          with the right credit card, 
          you can improve your financial life by building credit, 
          earning rewards and saving money. 
          But with hundreds of credit cards on the market.
          </p>
          <button className="bg-blue-gradient font-poppins px-4 py-4 rounded-xl mt-5">
            Get Started
          </button>
      </div>
      <div className='px-6 md:px-16'>
        {Features.map(feature => {
          return (
            <>
               <div key={feature.id} className='flex text-white hover:bg-black-gradient rounded-xl my-3 flex-row py-4'>
              <img src={feature.icon}/>
              <div key={feature.id}>
               <h1 className='text-white px-4 font-bold font-poppins'>{feature.name}</h1>
               <p className='text-gradient font-poppins font-normal max-w-[470px]  px-4'>{feature.message}</p>
            </div>
            </div>
            </>
           
          )
        })}
      </div>
  </section>
  )
}

export default Business