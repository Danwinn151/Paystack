import React from 'react'
import  {styles} from "../style"
import Card from "../assets/card.png"

const CardDeal = () => {
  return (
    <section id='cardDeal' className='flex flex-col md:flex-row justify-between items-start'>
      <div>
        <h1 className={`${styles.heading2} text-white`}>
       Find a Better Card Deal <br className='sm:block hidden'/>
        In few easy steps
       </h1>
       <p className={`${styles.paragraph} text-white max-w-[470px]`}>
       Arcu tortor, pusrus in nattis at sed integer faucibus. Aliquet quis alisquet eget nauris 
       tortor Aliquet ultrices ac, ametau
       </p>
       <button className="bg-blue-gradient font-poppins px-4 py-4 rounded-xl mt-2 mb-3">
            Get Started
        </button>
      </div>
       <div className={`flex ${styles.marginX}`}>
         <img src={Card} className="w-[600px]" alt="card"/>
       </div>
    </section>
  )
}

export default CardDeal