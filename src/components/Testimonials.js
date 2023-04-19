import React from 'react';
import './Testimonials.css';

export function Testimonials() {
    return (
        <div className="Testimonials">
            <section className="TestiMain">
                <h2>Testimonials</h2>
                <p>Hear from some of our satisfied customers!</p>
            </section>
            <article className="TestiReviews">
                <card>
                    <h4>Bob Smith</h4>
                    <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Yorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </card>
                <card>
                    <h4>Nancy Jones</h4>
                    <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Yorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </card>
                <card>
                    <h4>Joe Guy</h4>
                    <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Yorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </card>
            </article>
        </div>
    );
}