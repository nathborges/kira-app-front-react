import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Chatbot = lazy(() => import('../pages/Chatbot'));
const Articles = lazy(() => import('../pages/Articles'));

export default props => (
  <Router>
    <Suspense fallback={<div>Carregando...</div>}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/chat" element={<Chatbot />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </Suspense>
  </Router>
);