import React from 'react'
import Discount from "../assets/Discount.svg"
import payment from "../assets/payment.png"
import { styles } from '../style'

const Hero = () => {
  return (
   <section id='home' className={`flex  mt-4 md:flex-row flex-col ${styles.marginY}`}>
     <div className='flex flex-1 justofy-start items-start flex-col  xl:px-0 sm:px-16 px-6'>
      <div className='absolute z-[0] pink__gradient  bottom-100 stdiv w-[30%] h-[40%]'/>
      <div className='bg-black-gradient py-5 px-4 relative z-[0] flex flex-row items-center rounded-xl'>
        <img src={Discount} alt="discount"/>
        <p className={`font-poppins text-blue-300 ml-2`}>
          <span className='text-white'>50%
        </span> Discount For {"  "}
        <span className='text-white'> 3 Month
        </span>
        </p>
      </div>

       <div className='font-poppins mt-2  text-white'>
        <h1 className='text-[40px]'>
          The Next <br className='sm:block hidden'/>
         <span className='text-blue-400'>Generation {" "}
         </span>
         payment Method
        </h1>
        <p className='text-[16px] max-w-[460px] text-dimWhite'>
        Our Teams of experts uses a 
        methodology to identify the 
        credit cards most likely
         to fit your needs.
         we examine annual percentage rates, 
         annual fees.
        </p>
       </div>
      
     </div>
     <div className='flex mt-2 justify-start py-4 sm:px-9'>
      <img src={payment} className="w-[300px] h-[200px] xl:mr-20 px-6" />
     </div>
        
   </section>
  )
}

export default Hero