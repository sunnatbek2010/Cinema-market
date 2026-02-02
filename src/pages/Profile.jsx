import React from 'react'
import { Heart, Monitor, MonitorPause, ThumbsDown, SatelliteDish } from 'lucide-react'
import { Link } from 'react-router'
import LinksProfile from '../components/Props/LinksProfile'
// bg-[#101029]
const Profile = () => {
  return (
    <div className='  flex items-center  max-w-7x1 mx-auto gap-8 p-12 text-white'>
      <div className='bg-[#1E1E37] w-79.5 rounded-md ml-11 p-7 '>
        <div className='flex gap-5'>
          {/* avatar */}
          <img src="src/assets/Ellipse 180.svg" alt="" />
          <div className='flex flex-col'>
            <h3>Annette Black</h3>
            <p>Joined Nov 25, 2021</p>
          </div>
        </div>
        {/* <img src="src/assets/Ellipse 180.svg" alt="" /> --- is gap line         */}
        <div className='h-[0.5px] bg-gray-600 w-full mt-12'></div>
        <ul>
          <li>
            <LinksProfile link={'/'} navTitle={"Liked movies"}>
              <Heart />
            </LinksProfile >
          </li>
          <li>
            <LinksProfile link={'/'} navTitle={"Disliked movies"}>
              <ThumbsDown />
            </LinksProfile >
          </li>
          <li>
            <LinksProfile link={'/'} navTitle={"whatched movies"}>
              <MonitorPause />
            </LinksProfile >
          </li>
          <li>
            <LinksProfile link={'/'} navTitle={"recemended movies"}>
              <SatelliteDish />
            </LinksProfile >
          </li>
        </ul>
      </div>

      <div className='flex flex-col gap-4'>
        <h1>Update Your Profile</h1>
        <p>All fields are required to complete your profile for bidding.</p>
        <input type="text" placeholder='First Name' className='rounded-full border-blue-50 border-[0.5px] p-2 ' />
        <input type="text" placeholder='Last Name' className='rounded-full border-blue-50 border-[0.5px] p-2' />
        <input type="text" placeholder='Display Name' className='rounded-full border-blue-50 border-[0.5px] p-2' />
        <input type="number" placeholder='Phone Number' className='rounded-full border-blue-50 border-[0.5px] p-2' />

        <button className='bg-[#D70BCA] p-3 w-3xs rounded-full border-blue-50 border-[0.5px]'>Save changes</button>
      </div>
    </div>
  )
}

export default Profile