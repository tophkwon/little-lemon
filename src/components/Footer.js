import React from 'react';
import Logo2 from '../assets/Logo2.svg';
import './Footer.css';

export function Footer() {
    return (
        <nav className="FooterNav">
            <div className="FooterLogo">
                <img src={Logo2} alt="Logo" />
            </div>
            <ul className="Doormat">
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
            <ul className="FooterContact">
                <li><b>Address: </b>123 ABC St. Washington, D.C.</li>
                <li><b>Phone Number: </b>(123) 232 3232</li>
                <li><b>Email Address: </b>ll@littlelemon.com</li>
            </ul>
            <ul className="FooterSocials">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Yelp</li>
            </ul>
        </nav>
    )
};