import React, { useState } from 'react';
import './App.css';
import { Header, Home, Footer } from './component'

// const pages = ["Home", "AboutMe", "Portfolio", "Contact", "Resume"];

function App() {

  const [currentPage, setCurrentPage] = useState("Home");

  const handlePageChange = (abc) => {
    setCurrentPage(abc);
  }

  return (
    <>
      <Header handlePageChange={handlePageChange} />
      {/* if currentPage is equal to Home, then go to Home */}
      {currentPage === "Home" && <Home />}
      <currentPage />
      <Footer />
    </>
  );
}

export default App;
