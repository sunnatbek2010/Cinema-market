import React, { useState } from 'react'
import { Link } from 'react-router'
import bg from './../assets/Rectangle 4.png';
import register from './../assets/register.png';
import useToggle from './Hooks/useToggle';


const Nav = () => {

  const { open, setOpen, toggle } = useToggle(false);

  const user = JSON.parse(localStorage.getItem("user"));

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
            {user ? (
              <Link to="/profile">
                <img
                  src={user.avatar || "https://ui-avatars.com/api/?name=User"}
                  alt="user"
                  className="w-9 h-9 rounded-full object-cover border border-[#5B00FB] cursor-pointer hover:scale-105 transition"
                />
              </Link>
            ) : (
              <Link
                to="/register"
                className="text-white hover:text-[#5B00FB] transition"
              >
                Register
              </Link>
            )}
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Nav
