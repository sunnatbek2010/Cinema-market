import React from 'react'
import { Outlet } from 'react-router'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Layout = ({ open, setOpen }) => {
    return (
        <>
            <Nav open={open} setOpen={setOpen} />
            <Outlet />
            <Footer />

        </>
    )
}

export default Layout