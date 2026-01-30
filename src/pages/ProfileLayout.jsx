import React from 'react'
import Nav from '../components/Nav'
import Profile from './Profile'
import { Outlet } from 'react-router'
import ProfileSideBar from '../components/ProfileSideBar'

const ProfileLayout = () => {
    return (
        <div className='flex justify-between'>
            <ProfileSideBar />
            <Outlet />
        </div>
    )
}

export default ProfileLayout