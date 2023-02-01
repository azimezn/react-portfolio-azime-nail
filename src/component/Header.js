import React, { useState } from 'react';

const pages = ["Home", "About Me", "Portfolio", "Contact", "Resume"];
// const [currentPage, setCurrentPage] = useState("Home");

// const highlightPage = () => {
//     setCurrentPage(item);
//     // add css attribute to <li>
// }

const Header = () => {
    return (
        <div>
            <h1>Azime Nail</h1>
            <nav>
                {/* maps through the pages and lists them */}
                {pages.map(item => (
                    // <li onClick={highlightPage}>{item}</li>
                    <li>{item}</li>
                ))}
            </nav>
        </div>
    )
}

export default Header