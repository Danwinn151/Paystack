import React from 'react'
import { clients } from '../Constants'
const Clients = () => {
  return (
    <section id='clients' className='flex flex-wrap flex-row'>
       <div className='flex px-6 py-4  flex-wrap  items-center'>
        {clients.map(client => {
          return (
            <div key={client.id} className='flex flex-1 mr-3 ml-3 items-center'>
              <img src={client.icon} className="min-w-[200px] w-200px"/>
            </div>
          )
        })}
       </div>
    </section>
  )
}

export default Clients