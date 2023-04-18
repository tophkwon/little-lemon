import React from 'react';
import logo from '../assets/Logo.svg';
import './Header.css';

export function Header() {
    return (
        <>
            <img src={logo} alt="Logo"></img>
            <ul className="Links">
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
        </>
    )
};