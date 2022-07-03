import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Home from '../pages/Home';
// import Articles from '../pages/Articles';

const Home = lazy(() => import('../pages/Home'));
const Articles = lazy(() => import('../pages/Articles'));
const Chatbot = lazy(() => import('../pages/Chatbot'));


export default props => (
  <Router>
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/chat" element={<Chatbot />} />
      </Routes>
    </Suspense>
  </Router>
);