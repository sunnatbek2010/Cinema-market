import React from 'react'
import { Link } from 'react-router'

const LinksProfile = ({ navTitle, link, children }) => {
    return (
        <>
            <Link to={link} className='flex gap-2.5 py-4 items-center'>
                {children}
                {navTitle}
            </Link>
        </>
    )
}

export default LinksProfile