import React from 'react'
import { Link } from 'react-router'
import bg from './../assets/Rectangle 4.png';



const Nav = () => {
  return (
    <div className=' bg-[#0b0f2a] bg-[radial-gradient(ellipse_at_top_left,_rgba(168,85,247,0.35)_0%,_transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgba(236,72,153,0.35)_0%,_transparent_50%)]'>
      <header style={{ backgroundImage: `url(${bg})` }}>
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

