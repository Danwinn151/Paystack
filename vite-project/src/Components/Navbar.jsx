import React, {useState} from 'react'
import OIP from "../assets/OIP.jpg"
import { NavLinks } from '../Constants'
import menu from "../assets/menu.svg"
import close from "../assets/close.svg"

const Navbar = () => {
const [Toggle, setToggle] = useState(false)
const ToggleButton = () => {
  setToggle(prevValue => !prevValue)
}
const styles = {
  position: "fixed",
  top: "0",
  right: "0%",
  width: "100%",
  zIndex: "10"
}
  return (
  <>
    <nav style={styles} className='w-full bg-black-gradient  py-6 flex z-10 justify-between items-center text-white navbar'>
     
      <img src={OIP} className="w-[100px] ml-10  z-20" alt="paystack"  />
             <ul className='list-none sm:flex hidden justify-end items-end'>
              {NavLinks.map((link,index) => {
                return (
                  <div key={link.id}>
                    <li className='font-poppins mr-3 font-normal cursor-ponter text-[16px]'>
                      <a href={link.link}>{link.name}</a>
                    </li>
                  </div>
                )
              })}
             </ul>
             {/* for the menu icon */}
             <div className='sm:hidden flex flex-1 justify-end items-center'>
                   <img onClick={() => {ToggleButton()}} src={`${Toggle ? close : menu}`} className={`text-white cursor-pointer text-[5px]  w-[28px] h-[28px] object-contain'`} alt="toggleicon"/>
              </div>
            {/*To get my items when i toggle*/}
            <div className={`${Toggle ? "flex": "hidden"} sm:hidden rounded-2xl absolute top-20 right-0 
            bg-black-gradient p-3 mr-3 sidebar`}>
                <ul className='list-none sm:flex'>
                {NavLinks.map(link => {
                  return (
                    <div key={link.id}>
                      <li className='font-poppins text-[18px]'>
                        <a href={link.link}>{link.name}</a>
                      </li>
                    </div>
                  )
                })}
                 
                </ul>
            </div>
     
        
    </nav>
  </>
  )
}

export default Navbar