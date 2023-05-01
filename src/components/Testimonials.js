import React from 'react';
import './Testimonials.css';
import { FaStar } from "react-icons/fa";

export function Testimonials() {
    return (
        <div className="Testimonials">
            <div className="TestiSection">
                <section className="TestiMain">
                    <h2>Testimonials</h2>
                    <p>Hear from some of our satisfied customers!</p>
                </section>
                <article className="TestiReviews">
                    <card>
                        <div className="TopRow">
                            <h4>Bob Smith</h4>
                        </div>
                        <div>
                            <FaStar className="checked" />
                            <FaStar className="checked" />
                            <FaStar className="checked" />
                            <FaStar className="checked" />
                            <FaStar className="checked" />
                        </div>
                        <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Yorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </card>
                    <card>
                        <div className="TopRow">
                            <h4>Nancy Jones</h4>
                        </div>
                        <div>
                            <FaStar className="checked" />
                            <FaStar className="checked" />
                            <FaStar className="checked" />
                            <FaStar className="checked" />
                            <FaStar className="unchecked" />
                        </div>
                        <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Yorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </card>
                    <card>
                        <div className="TopRow">
                            <h4>Joe Guy</h4>
                        </div>
                        <div>
                            <FaStar className="checked" />
                            <FaStar className="checked" />
                            <FaStar className="checked" />
                            <FaStar className="checked" />
                            <FaStar className="checked" />
                        </div>
                        <p>Yorem ipsum dolor sit amet, consectetur adipiscing elit. Yorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </card>
                </article>
            </div>
        </div>
    );
}