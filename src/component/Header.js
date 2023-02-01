import React, { useState } from 'react';
// bootstrap imports
import Nav from 'react-bootstrap/Nav';

const pages = ["Home", "About", "Portfolio", "Contact", "Resume"];

const Header = ({ handlePageChange }) => {
    return (
        <div>
            <h1>Azime Nail</h1>
            <Nav className="justify-content-center" activeKey="/home">
                {/* maps through the pages and lists them */}
                {pages.map(item => (
                    <Nav.Item>
                        <Nav.Link onClick={() => handlePageChange({item})}>{item}</Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
        </div>
    )
}



export default Header