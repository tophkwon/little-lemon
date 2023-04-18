import React from 'react';
import Logo2 from '../assets/Logo2.svg';

function Footer() {
    return (
        <>
        <img src={Logo2} alt="Logo"/>
            <div className="Doormat Navigation">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </div>
            <div className="Contact">
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email Address</li>
                </ul>
            </div>
            <div className="Social Media">
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>Yelp</li>
                </ul>
            </div>
        </>
    )
};

export default Footer;