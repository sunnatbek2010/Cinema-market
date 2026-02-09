import React, { useState } from 'react'
import Discover from './pages/Discover'
import Marketplace from "./pages/Marketplace";
import Info from './pages/Info.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import MarketplaceCard from './pages/MarketplaceCard';
import ProfileLayout from './pages/profileLayout.jsx';
import Profile from './pages/Profile.jsx';
import Settings from './pages/Settings.jsx';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Liked from './pages/Liked';
import Disliked from './pages/Disliked';
import Watched from './pages/Watched';
import Register from './pages/Register.jsx';

const App = () => {


  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="discover" element={<Discover />} />
        <Route path="info/:id" element={<Info />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="marketplace" element={<MarketplaceCard />} />
        <Route path='register' element={<Register />} />

        <Route path='profile' element={<ProfileLayout />}>
          <Route index element={<Profile />} />
          <Route path='settings' element={<Settings />} />
          <Route path='liked' element={<Liked />} />
          <Route path='disliked' element={<Disliked />} />
          <Route path='watched' element={<Watched />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
