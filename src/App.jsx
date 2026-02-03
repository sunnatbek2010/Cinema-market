import React from 'react'
import Layout from './pages/Layout'
import Discover from './pages/Discover'
import Marketplace from "./pages/Marketplace";
import Info from './pages/Info.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/Home';
import Settings from './pages/Settings.jsx';
import ProfileLayout from './pages/profileLayout.jsx';
import Liked from './pages/Liked.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="discover" element={<Discover />} />
        <Route path="info/:id" element={<Info />} />
        <Route path="marketplace" element={<Marketplace />} />

        <Route element={<ProfileLayout />}>
          <Route path="/liked" element={<Liked />} />
          <Route path='/settings' element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;