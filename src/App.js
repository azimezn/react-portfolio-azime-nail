import React, { useState } from 'react';
import './App.css';
import { Header, Home, About, Contact, Resume, Footer } from './component'

function App() {

  const [currentPage, setCurrentPage] = useState("Home");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <>
      <Header handlePageChange={handlePageChange} />
      {/* if currentPage is equal to Home, then go to Home */}
      {console.log(currentPage)}
      {currentPage === "Home" && <Home />}
      {currentPage === "About" && <About />}
      {currentPage === "Contact" && <Contact />}
      {currentPage === "Resume" && <Resume />}
      <Footer />
    </>
  );
}

export default App;
