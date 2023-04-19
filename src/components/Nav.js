import React from 'react';
import logo from '../assets/Logo.svg';
import './Nav.css';

export function Nav() {
    return (
        <>
            <nav className="TopNav">
                    <img src={logo} alt="Logo" className="HeaderLogo"></img>
                <ul className="NavLinks">
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </nav>
        </>
    )
};