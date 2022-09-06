import React from 'react'
import { styles } from '../style'
import FeedBackCard from './FeedBackCard'
import { feedback } from '../Constants'
const Testimonials = () => {
  return (
    <section id='testimonials' className={`${styles.marginY}`}>
       <div className='flex flex-col md:flex-row justify-between sm:px-16  py-3'>
        <div>
          <h1 className={`${styles.heading2} max-w-[800px]`}>
          What People are Saying <br/> about us
          </h1>
       </div>
       <p className={`${styles.paragraph} max-w-[500px] flex items-center`}>
       Everything you need to accept card payments and 
       grow your business anywhere on the planet.
       </p>
          </div>
       <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative
     z-[1]'>
       {feedback.map(card => {
        return <FeedBackCard key={card.id} card={card}
        />
       })}
     </div>
       
       
    </section>
  )
}

export default Testimonials