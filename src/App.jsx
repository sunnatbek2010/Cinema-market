import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Liked from './pages/Liked';
import Disliked from './pages/Disliked';
import Watched from './pages/Watched';

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/liked' element={<Liked />} />
        <Route path='/disliked' element={<Disliked />} />
        <Route path='/watched' element={<Watched />} />
      </Route>
    </Routes>

  );
};

export default App;
