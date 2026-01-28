import React from 'react'
import Layout from './pages/Layout'
import Home from './pages/Home'
import Discover from './pages/Discover'
import Marketplace from "./pages/Marketplace";
import Info from './pages/Info.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import MarketplaceCard from './pages/MarketplaceCard';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="discover" element={<Discover />} />
        <Route path="info/:id" element={<Info />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="marketplace" element={<MarketplaceCard />} />
      </Route>
    </Routes>
  );
};

export default App;
