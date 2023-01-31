import React from 'react';

const pages = ["Home", "Resume", "Contact", "idk", "some more options", "hello"]

const Header = () => {
    return (
        <div>
            <h1>Azime Nail</h1>
            <nav>
                {/* maps through the pages and lists them */}
                {pages.map(item => (
                    <li>{item}</li>
                ))}
            </nav>
        </div>
    )
}

export default Header