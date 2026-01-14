import React, { useState } from "react";
import "../css/About.css";
import Journey from "../assets/journey.webp";
import Team from "./Team";

const About = () => {
    const [showTeam, setShowTeam] = useState(false);

    return (
        <>
            <section className="about" id="about">
                <div className="about-card container" id="about-container">
                    <div className="about-left">
                        <span className="about-eyebrow">About us</span>
                        <h2 className="about-title">Our Journey</h2>

                        <p className="about-desc">
                            Founded with a vision to bridge the gap between business needs and
                            technology solutions, Press 1 Technologies has been at the forefront
                            of digital transformation.
                            <br /><br />
                            Our team of experienced developers, designers, and consultants work
                            collaboratively to deliver solutions that not only meet your
                            current requirements but also scale with your future growth.
                            <br /><br />
                            We believe in the power of technology to transform businesses and
                            create meaningful impact.
                        </p>

                        <div className="about-stats">
                            <div className="stat">
                                <h3>5+</h3>
                                <p>Years Experience</p>
                            </div>
                            <div className="stat">
                                <h3>50+</h3>
                                <p>Projects Delivered</p>
                            </div>
                            <div className="stat">
                                <h3>99%</h3>
                                <p>Client Satisfaction</p>
                            </div>
                            <div className="stat">
                                <h3>24/7</h3>
                                <p>Support & Care</p>
                            </div>
                        </div>

                        <button
                            className={`team-toggle-btn ${showTeam ? "active" : ""}`}
                            onClick={() => setShowTeam((v) => !v)}
                        >
                            Meet our Team
                            <span className="arrow">{showTeam ? "↑" : "↓"}</span>
                        </button>
                    </div>

                    <div className="about-right">
                        <img src={Journey} alt="Our journey" loading="lazy" />
                    </div>
                </div>
            </section>

            <div className={`team-wrapper ${showTeam ? "open" : ""}`}>
                <div className="team-inner">
                    <Team />
                </div>
            </div>
        </>
    );
};

export default About;
