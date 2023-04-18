import React from 'react';
import Logo2 from '../assets/Logo2.svg';

export function Footer() {
    return (
        <>
            <div className="FooterLogo">
                <img src={Logo2} alt="Logo" />
            </div>
            <div className="FooterNav">
                <ul className="DoormatNav">
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
                <ul className="Contacts">
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email Address</li>
                </ul>
                <ul className="SocialMedia">
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>Yelp</li>
                </ul>
            </div>
        </>
    )
};