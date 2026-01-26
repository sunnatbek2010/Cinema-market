import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Discover from './pages/Discover'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="discover" element={<Discover />} />
        </Route>
      </Routes>
    </>
  )
}

export default App