import React from 'react';
// bootstrap
import Nav from 'react-bootstrap/Nav';

const pages = ["About", "Portfolio", "Contact", "Resume"];

const Header = ({ currentPage, setCurrentPage }) => {
    return (
        <header>
            <h1>Hello! <br></br> I'm Azime Nail.</h1>
            <Nav className="justify-content-center" activeKey={currentPage}>
                {/* maps through the pages and lists them */}
                {pages.map(item => (
                    <Nav.Item key={item}>
                        <Nav.Link onClick={() => setCurrentPage(item)}>{item}</Nav.Link>
                    </Nav.Item>
                ))}
            </Nav>
        </header>
    )
}

export default Header