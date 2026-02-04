import React from 'react'
import { Link } from 'react-router'

const LinksProfile = ({ children, navTitle, link }) => {
    return (
        <Link to={link}>
            <div className="group flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer text-white 
        hover:bg-[linear-gradient(90deg,#5D00FA_0%,#D70BCA_100%)]" >
                <span className="opacity-80 group-hover:opacity-100 transition">{children}</span>
                <span className="font-medium">{navTitle}</span>
            </div>
        </Link>
    )
}

export default LinksProfile
