import React from "react";
import UI from "./components/Calculator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Quote from "./components/quote";

const App = () => (
  <React.Fragment>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<UI />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </Router>

    <Footer />
  </React.Fragment>
);

export default App;
