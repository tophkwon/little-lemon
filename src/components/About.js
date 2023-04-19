import React from 'react';
import './About.css';
import chef from '../assets/restaurantchefB.jpg';

export function About () {
    return (
        <section className="About">
            <div className="AboutContent">
                <h2>About Little Lemon</h2>
                <h3>Washington, D.C.</h3>
                <p>Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti </p>
            </div>
            <div className="AboutPic">
                <img src={chef} alt="Little Lemon chef"></img>
            </div>
        </section>
    );
}