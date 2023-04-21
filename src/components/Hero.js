import React from 'react';
import './Hero.css';
import LandingPic from '../assets/restauranfood.jpg';

export function Hero() {
    return (
        <>
            <section className="HeroMain">
                <div className="NameLocale">
                    <h1>Little Lemon</h1>
                    <h2>Washington D.C.</h2>
                    <p>New for 2023, Little Lemon is now taking online reservations made thru our own website!</p>
                    <button className="btn">Reserve a Table</button>
                </div>
                <div className="LandingPic"></div>
            </section>
        </>
    );
}