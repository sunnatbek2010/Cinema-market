import React from 'react'
import { Link } from 'react-router'

const LinksProfile = ({ children, navTitle, link, onClick }) => {
    if (!link) {
        return (
            <button
                onClick={onClick}
                className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/10 transition text-white w-full text-left"
            >
                {children}
                <span>{navTitle}</span>
            </button>
        );
    }

    return (
        <Link
            to={link}
            className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/10 transition text-white"
        >
            {children}
            <span>{navTitle}</span>
        </Link>
    );
}

export default LinksProfile
