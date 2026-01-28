import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Discover from './pages/Discover'
import Marketplace from './pages/Marketplace.jsx';
import Profile from './pages/Profile'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="discover" element={<Discover />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </>
  )
}


export default App