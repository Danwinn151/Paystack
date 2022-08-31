import React from 'react'
import apple from '../assets/apple.svg'
import bill from "../assets/bill.png"
import google from "../assets/google.svg"
import { styles } from '../style'

const Billing = () => {
  return (
    <section id='bill' className='flex flex justify-start items-start flex-col md:flex-row sm:px-16 px-6'>
        <div>
          <img src={bill} alt="bill"/>
        </div>
        <div className='flex flex-col justify-center items-center py-40 leading-[35px]'>
           <h1 className={`${styles.heading2} font-poppins text-[30px] font-bold text-white`}>
           Easily Control your
            billing & invoicing
           </h1>
           <p className='text-gradient text-[18px]'>
           Elit enim sed massa etian. 
           Mouris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliportitor integer platea placerat.
           </p>
           <div className='flex flex-row justify-between py-4'>
            <img src={apple} className="mr-3" />
            <img src={google}/>
           </div>
        </div>
    </section>
  )
}

export default Billing