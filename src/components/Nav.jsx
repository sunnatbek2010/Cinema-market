import React from 'react'
import { Link } from 'react-router'
import bg from './../assets/Rectangle 4.png';



const Nav = () => {
  return (
    <div className='min-h-screen bg-[#0b0f2a] bg-[radial-gradient(ellipse_at_top_left,_rgba(168,85,247,0.35)_0%,_transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgba(236,72,153,0.35)_0%,_transparent_50%)]'>
      <header style={{ backgroundImage: `url(${bg})` }}>
        <nav className='w-[1110px] mx-auto flex justify-center pt-[61px]'>
          <div className='flex gap-12.5 items-center '>
            <Link className='text-[14px] font-bold text-white hover:text-[#5B00FB] hover:border-t transition-all' to="/">HOME</Link>
            <Link className='text-[14px] font-bold text-white hover:text-[#5B00FB] hover:border-t transition-all' to="/">DISCOVER</Link>
            <Link className='text-[14px] font-bold text-white hover:text-[#5B00FB] hover:border-t transition-all' to="/">MARKETPLACE</Link>
          </div>
          <div>
          
          </div>
        </nav>

        <div className='w-[1110px] mt-[147px] pb-[300px] mx-auto'>
          <h1 className='text-white text-[46px] text-center  font-bold'>NFTs by Curios Music</h1>
          <p className='text-white text-[20px] mt-3 text-center '>Own a one-of-a-kind and limited digital collectible</p>
          <div className='flex justify-center mt-[27px]'>
            <button className='text-white bg-gradient-to-r from-[#5D00FA] to-[#D70BCA] font-bold  py-3.5 px-10 rounded-[46px] '>Latest NFT drops</button>
          </div>
        </div>
      </header>
    </div>  
  )
}

export default Nav

