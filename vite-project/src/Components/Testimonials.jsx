import React from 'react'
import { styles } from '../style'

const Testimonials = () => {
  return (
    <section id='testimonials' className={`${styles.marginY} flex flex-col md:flex-row justify-between`}>
       <div className=''>
          <h1 className={`${styles.heading2}`}>
          What People are Saying <br/> about us
          </h1>
       </div>
       <p className={`${styles.paragraph} max-w-[450px]`}>
       Everything you need to accept card payments and 
       grow your business anywhere on the planet.
       </p>
    </section>
  )
}

export default Testimonials