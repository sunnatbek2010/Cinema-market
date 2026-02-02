import React from 'react'
import { Link } from 'react-router'
import bg from './../assets/Rectangle 4.png';
import register from './../assets/register.png';

 
const Nav = () => {
  return (
    <div >
      <header>
        <nav className='w-[1110px] mx-auto flex justify-between pb-22 pt-[61px]'>
          <div></div>
          <div className='flex gap-12.5  items-center '>
            <Link className='text-[14px] font-bold text-white hover:text-[#5B00FB] hover:border-t transition-all' to="/">HOME</Link>
            <Link className='text-[14px] font-bold text-white hover:text-[#5B00FB] hover:border-t transition-all' to="discover">DISCOVER</Link>
            <Link className='text-[14px] font-bold text-white hover:text-[#5B00FB] hover:border-t transition-all' to="marketplace">MARKETPLACE</Link>
          </div>
          <div className="relative z-50">
            <Link to="/profile">
              <img
                src={register}
                alt="register"
                className="w-8 h-8 cursor-pointer hover:scale-110 transition"
              />
            </Link>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Nav
