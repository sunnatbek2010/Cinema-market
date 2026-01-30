import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Liked from './pages/Liked';

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/liked' element={<Liked />} />
      </Route>
    </Routes>

  );
};

export default App;
