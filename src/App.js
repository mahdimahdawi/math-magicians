import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UI from './components/Calculator';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Quote from './components/quote';

const App = () => (
  <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<UI />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </Router>

    <Footer />
  </>
);

export default App;
