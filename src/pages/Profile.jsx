import React from 'react'
import { Heart, Monitor, MonitorPause, ThumbsDown, SatelliteDish } from 'lucide-react'
import { Link } from 'react-router'
import LinksProfile from '../components/Props/LinksProfile'

const Profile = () => {
  return (
    <div className=' bg-[#101029] flex items-center  max-w-7x1 mx-auto gap-8 p-12 text-white'>
      <div className='bg-[#1E1E37] w-79.5 rounded-md ml-11 p-7 '>
        <div className='flex gap-5'>
          {/* avatar */}
          <img src="src/assets/Ellipse 180.svg" alt="" />
          <div className='flex flex-col'>
            <h3>Annette Black</h3>
            <p>Joined Nov 25, 2021</p>
          </div>
        </div>

      </div>

    </div >
  )
}

export default Profile
