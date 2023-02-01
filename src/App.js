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
      {currentPage === "Home" && <Home />}
      <currentPage />
      <Footer />
    </>
  );
}

export default App;
