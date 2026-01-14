import React, { useState } from "react";
import "../css/Contact.css";
import Collab from "../assets/collab2.webp";

const SERVICES = [
    "Web Development",
    "UI/UX Design",
    "Brand Identity",
    "SEO",
    "Social Media",
    "Google Ads",
];

export default function Contact() {
    const [selected, setSelected] = useState(["Web Development"]);

    const toggle = (item) => {
        setSelected((prev) =>
            prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const payload = {
            name: form.get("name"),
            phone: form.get("phone"),
            email: form.get("email"),
            help: form.get("help"),
            services: selected,
        };

        console.log(payload);

        // simple fallback
        window.location.href =
            `mailto:hello@press1.dev?subject=${encodeURIComponent("Project Inquiry")}` +
            `&body=${encodeURIComponent(
                `Name: ${payload.name}\nPhone: ${payload.phone}\nEmail: ${payload.email}\n\nHow can we help?\n${payload.help}\n\nServices:\n- ${payload.services.join("\n- ")}`
            )}`;

        e.currentTarget.reset();
        setSelected(["Web Development"]);
    };

    return (
        <section className="contact" id="contact">
            <div className="contact-card container">
                {/* LEFT */}
                <div className="contact-left">
                    <span className="about-eyebrow">Get in touch</span>
                    <h2 className="contact-title">Let’s collaborate</h2>
                    <p className="contact-sub">
                        Get started —{" "}
                        <a className="contact-link" href="mailto:hello@press1.dev">
                            hello@press1.dev
                        </a>
                    </p>

                    <div className="contact-illu">
                        <img src={Collab} alt="Team collaboration illustration" loading="lazy" />
                    </div>

                    <div className="contact-mini">
                        <span className="dot" aria-hidden />
                        We usually reply within 24 hours.
                    </div>
                </div>

                {/* RIGHT */}
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label className="field">
                        <span>
                            Name <b>*</b>
                        </span>
                        <input name="name" placeholder="Type your name" required />
                    </label>

                    <label className="field">
                        <span>
                            Phone <b>*</b>
                        </span>
                        <input name="phone" placeholder="Type your phone number" required />
                    </label>

                    <label className="field">
                        <span>
                            Email <b>*</b>
                        </span>
                        <input name="email" type="email" placeholder="Type your email address" required />
                    </label>

                    <label className="field">
                        <span>How can we help?</span>
                        <textarea name="help" rows="4" placeholder="Type the brief description" />
                    </label>

                    <div className="services">
                        <p className="services-title">Services</p>
                        <div className="services-grid">
                            {SERVICES.map((s) => (
                                <label key={s} className="chk">
                                    <input
                                        type="checkbox"
                                        checked={selected.includes(s)}
                                        onChange={() => toggle(s)}
                                    />
                                    <span>{s}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <button className="contact-btn" type="submit">
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
}
