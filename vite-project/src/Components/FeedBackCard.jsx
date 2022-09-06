import React from 'react'
import  quotes  from '../assets/quotes.svg'
const FeedBackCard = ({card}) => {
  return (
    <>
      <div className='flex justify-between flex-col px-10 py-12
      rounded-[20px] max-w-[370px] feedback-card'>
         <img src={quotes} alt="quotes" className='w-[42px] h-[27px] object-contain'/>
         <p className='font-poppins text-white leading-[32px] my-10'>
           {card.content}
         </p>
         <div className='flex flex-row '>
           <img src={card.img} alt="card" className='w-[48px] h-[48px] rounded-full'/>
           <div>
            <h1 className='font-poppins font-semibold text-white text-[18px] px-3 flex items-center'>{card.name}</h1>
           <p className='font-poppins text-[15px] text-dimWhite px-3 flex items-center'>{card.title}</p>
           </div>
           
         </div>
      </div>
    </>

  )  
}

export default FeedBackCard