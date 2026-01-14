
import React from "react";
import "../css/Services.css";

import {
    AppWindow,
    MessageSquareText,
    MailOpen,
    Palette,
    Video,
    GraduationCap,
} from "lucide-react";

const services = [
    {
        title: "Custom Apps (Web or Mobile)",
        desc: "Bespoke application development tailored to your unique business requirements.",
        icon: AppWindow,
        image: "/src/assets/app.jpg",
    },
    {
        title: "SMS Marketing",
        desc: "Direct-to-customer SMS campaigns that drive immediate engagement.",
        icon: MessageSquareText,
        image: "/src/assets/sms.jpg",
    },
    {
        title: "Email Marketing",
        desc: "Engaging email funnels that nurture leads and boost conversions.",
        icon: MailOpen,
        image: "/src/assets/email.jpg",
    },
    {
        title: "Graphic Designing",
        desc: "Compelling visual assets that strengthen your brand identity.",
        icon: Palette,
        image: "/src/assets/graphic.jpg",
    },
    {
        title: "Video Editing",
        desc: "Professional video editing that tells your story beautifully.",
        icon: Video,
        image: "/src/assets/video.jpg",
    },
    {
        title: "Educational Courses",
        desc: "High-quality tech training programs for digital transformation.",
        icon: GraduationCap,
        image: "/src/assets/education.jpg",
    },
];

export default function Services() {
    return (
        <section id="services" className="svc">
            <div className="container">
                {/* TOP */}
                <div className="svc-top">
                    <span className="svc-eyebrow">Services</span>
                    <h2 className="svc-title">What we do</h2>
                    <p className="svc-subtitle">
                        Everything you need to build, grow, and scale — from product
                        development to marketing systems that convert.
                    </p>

                    {/* INLINE CTA */}
                    <div className="svc-inline-cta">
                        <span>Need a custom plan?</span>
                        <a href="#contact" className="svc-inline-btn">
                            Get a free consultation →
                        </a>
                    </div>
                </div>

                {/* GRID */}
                <div className="svc-grid">
                    {services.map((s) => {
                        const Icon = s.icon;

                        return (
                            <article key={s.title} className="svc-card">
                                {/* OPTIONAL IMAGE */}
                                {s.image ? (
                                    <div className="svc-media" aria-hidden="true">
                                        <img src={s.image} alt="" loading="lazy" />
                                    </div>
                                ) : null}

                                {/* HEADER */}
                                <div className="svc-head">
                                    <div className="svc-icon">
                                        <Icon size={18} strokeWidth={2} />
                                    </div>

                                    <h3 className="svc-card-title">{s.title}</h3>
                                </div>

                                <p className="svc-card-desc">{s.desc}</p>

                                <a className="svc-link" href="#contact">
                                    Learn more →
                                </a>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
