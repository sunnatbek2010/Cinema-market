import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Layout from './pages/Layout';
import Home from './pages/Home';
import MarketplaceCard from './pages/MarketplaceCard';
import Profile from './pages/Profile'

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="marketplace" element={<MarketplaceCard />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>

  );
};

export default App;
