import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Welcome to my rest countries!!</h1>
            <nav className='menu'>
                <a href="./home">Home</a>
                <a href="./Shop">Shop</a>
                <a href="./Help">Help</a>
            </nav>
        </div>
    );
};

export default Header;