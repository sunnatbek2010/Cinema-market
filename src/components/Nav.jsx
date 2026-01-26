import React from 'react'
import { Link } from 'react-router'
import bg from './../assets/Rectangle 4.png';



const Nav = () => {
  return (
    <div className=' bg-[#1E1E37]'>
      <header>
        <nav className='w-[1110px] mx-auto flex justify-center pb-22 pt-[61px]'>
          <div className='flex gap-12.5 items-center '>
            <Link className='text-[14px] font-bold text-white hover:text-[#5B00FB] hover:border-t transition-all' to="/">HOME</Link>
            <Link className='text-[14px] font-bold text-white hover:text-[#5B00FB] hover:border-t transition-all' to="/">DISCOVER</Link>
            <Link className='text-[14px] font-bold text-white hover:text-[#5B00FB] hover:border-t transition-all' to="/">MARKETPLACE</Link>
          </div>
          <div>
          </div>
        </nav>
      </header>
    </div>  
  )
}

export default Nav

