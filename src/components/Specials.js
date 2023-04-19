import React from 'react';
import './Specials.css';
import greeksalad from '../assets/greeksalad.jpg';
import lemoncake from '../assets/lemondessert.jpg';
import bruschetta from '../assets/bruchetta.svg';

export function Specials() {
    return (
        <>
            <section className="Specials">
                <div className="SpecialsHead">
                    <h2>This week's specials!</h2>
                    <button className="btn">Online Menu</button>
                </div>
            </section>
            <article className="SpecialsContent">
                <card>
                    <img src={ greeksalad } alt="Greek Salad"></img>
                    <h4>Greek Salad</h4>
                    <p>$8.99</p>
                    <p>Torem ipsum dolor sit amet, consectetur adipiscing elit. Torem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </card>
                <card>
                    <img src={ bruschetta } alt="Bruschetta"></img>
                    <h4>Bruschetta</h4>
                    <p>$12.99</p>
                    <p>Torem ipsum dolor sit amet, consectetur adipiscing elit. Torem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </card>
                <card>
                    <img src={ lemoncake } alt="Lemon Cake"></img>
                    <h4>Lemon Cake</h4>
                    <p>$6.99</p>
                    <p>Torem ipsum dolor sit amet, consectetur adipiscing elit. Torem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </card>
            </article>
        </>
    );
}