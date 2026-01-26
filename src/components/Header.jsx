import React from 'react'

const Header = () => {
    return (
        <div className='w-[1110px] mt-[147px] pb-[300px] mx-auto'>
            <h1 className='text-white text-[46px] text-center  font-bold'>NFTs by Curios Music</h1>
            <p className='text-white text-[20px] mt-3 text-center '>Own a one-of-a-kind and limited digital collectible</p>
            <div className='flex justify-center mt-[27px]'>
                <button className='text-white bg-gradient-to-r from-[#5D00FA] to-[#D70BCA] font-bold  py-3.5 px-10 rounded-[46px] '>Latest NFT drops</button>
            </div>
        </div>
    )
}

export default Header