// components/Footer.jsx
import { MailIcon, MapPin, Phone } from "lucide-react";
import "../css/Footer.css";
import { BrowserRouter, Link, Router, Routes } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-inner container">

                {/* Brand */}
                <div className="footer-brand">
                    <h3>Press 1 Technologies</h3>
                    <p>
                        Building digital experiences that help businesses grow, scale,
                        and stand out.
                    </p>
                    <p className="footer-contact">
                        <span>
                            <MapPin size={16} strokeWidth={1.5} />
                            Denver, Colorado
                        </span>
                        <span>
                            <MapPin size={16} strokeWidth={1.5} />
                            Gatthaghar, Nepal
                        </span>
                        <span>
                            <MailIcon size={16} strokeWidth={1.5} />
                            hello@press1.dev
                        </span>
                    </p>
                </div>

                {/* Links */}
                <div className="footer-links">
                    <div>
                        <span className="footer-title">Company</span>
                        <a href="#about">About</a>
                        <a href="#services">Services</a>
                        <a href="#portfolio">Portfolio</a>

                        <Link to="/career">Career</Link>


                        <a href="#contact">Contact</a>
                    </div>

                    <div>
                        <span className="footer-title">Services</span>
                        <a href="#services">Web Development</a>
                        <a href="#services">UI / UX Design</a>
                        <a href="#services">Brand Identity</a>
                        <a href="#services">Digital Marketing</a>
                    </div>
                </div>

                {/* CTA */}
                <div className="footer-cta">
                    <span>Have a project in mind?</span>
                    <a href="#contact" className="footer-btn">
                        Let’s Talk
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                © {new Date().getFullYear()} Press 1 Technologies. All rights reserved.
            </div>
        </footer>
    );
}
