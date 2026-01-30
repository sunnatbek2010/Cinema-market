import React from 'react'
import {
    Heart,
    MonitorPause,
    ThumbsDown,
    SatelliteDish,
    Settings
} from 'lucide-react'
import LinksProfile from '../components/Props/LinksProfile'

const navlinks = [
    {
        link: '/profile',
        navTitle: 'Profile',
        icon: <Settings size={18} />
    },
    {
        link: '/liked',
        navTitle: 'Liked movies',
        icon: <Heart size={18} />
    },
    {
        link: '/disliked',
        navTitle: 'Disliked movies',
        icon: <ThumbsDown size={18} />
    },
    {
        link: '/watched',
        navTitle: 'Watched movies',
        icon: <MonitorPause size={18} />
    },
    {
        link: '/recommended',
        navTitle: 'Recommended movies',
        icon: <SatelliteDish size={18} />
    },
    {
        link: '/settings',
        navTitle: 'Settings',
        icon: <Settings size={18} />
    }
]

const ProfileSideBar = () => {
    return (
        <div className=" w-[320px] rounded-xl p-7">
            {/* avatar */}
            <div className="flex gap-4 items-center">
                <img
                    src="/src/assets/Ellipse 180.svg"
                    alt="avatar"
                    className="w-14 h-14 rounded-full"
                />
                <div>
                    <h3 className="font-semibold">Annette Black</h3>
                    <p className="text-sm text-gray-400">
                        Joined Nov 25, 2021
                    </p>
                </div>
            </div>

            <div className="h-[1px] bg-gray-600/40 my-8"></div>

            <ul className="flex flex-col gap-1">
                {
                    navlinks.map((item, index) => (
                        <LinksProfile key={index} link={item.link} navTitle={item.navTitle}>
                            {item.icon}
                        </LinksProfile>
                    ))
                }



            </ul>
        </div>
    )
}

export default ProfileSideBar