import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Discover from './pages/Discover'
import Marketplace from "./pages/Marketplace";
import Info from './pages/Info.jsx';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="discover" element={<Discover />} />
          <Route path="info/:id" element={<Info />} />
          <Route path="marketplace" element={<Marketplace />} />
        </Route>
      </Routes>
    </>
  )
}


export default App