import React, { useState } from 'react';
import './App.css';
import { Header, Home, About, Portfolio, Contact, Resume, Footer } from './component'

function App() {

  const [currentPage, setCurrentPage] = useState("About");

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {/* if currentPage is equal to Home, then go to Home */}
      {currentPage === "Home" && <Home setCurrentPage={setCurrentPage} />}
      {currentPage === "About" && <About />}
      {currentPage === "Portfolio" && <Portfolio />}
      {currentPage === "Contact" && <Contact />}
      {currentPage === "Resume" && <Resume />}
      <Footer />
    </>
  );
}

export default App;
