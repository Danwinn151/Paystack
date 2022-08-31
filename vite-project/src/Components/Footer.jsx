import React from 'react'
import { footerLinks,socialMedia } from '../Constants'
import OIP from "../assets/OIP.jpg"
import { styles } from '../style'


const Footer = () => {
  return (
    <section id='footer' className='w-full  flex  flex-col justify-center sm:px-16 px-6 py-4 mt-8'>
       <div className='flex md:flex-row flex-col'>
       <div>
        <img src={OIP} className="w-[150px]"/>
        <p className='text-white font-poppins w-[400px] py-4'>A new Way to make the payments easy, 
        reliable and secure</p>
       </div>
          <div className='flex flex-row stdiv  justify-between px-4 sm:px-16'>
            {footerLinks.map(footerLink => {
              return (
                <div>
                   <h1 className='text-white text-[18px] mr-10 font-poppins'>
                 {footerLink.title}
                 </h1> 
                 <ul className='li list-none mt-4'>
                  {footerLink.links.map(link => {
                    return (
                      <li className='text-white' key={link.link}>
                        {link.name}
                      </li>
                    )
                  })}
                 </ul>
                </div>
                
               
              )
            
            })}
          </div>
       </div>
      <div className='flex flex-col px-6 sm:px-16'>
      <div className='text text-center py-4'>
        <p className='font-[poppins] text-[18px] font-normal text-white'>
      2022 Paystack All Rights Reserved
      </p>
      </div>
      <div>
         <ul className='list-none py-4 mt-4 flex flex-row justify-center'>
     {socialMedia.map(media => {
          return (
            <div className='flex-row flex ml-5'>
              <img src={media.icon}/>
            </div>
            
          )
         })}
      </ul>
      </div>
       
    
      
        
      </div>
    </section>
  )
}

export default Footer