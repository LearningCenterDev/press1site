import React, { useEffect } from "react";
import "../css/Career.css";
import { useNavigate } from "react-router-dom";
import {
    ArrowLeft,
    ArrowRight,
    Sparkles,
    Users,
    GraduationCap,
    Clock,
    Mail,
    BadgeCheck,
} from "lucide-react";

const perks = [
    {
        title: "Remote-first & Flexible",
        desc: "Work from anywhere with a schedule that respects deep focus.",
        icon: Clock,
    },
    {
        title: "Strong Team Culture",
        desc: "We collaborate fast, communicate clearly, and support each other.",
        icon: Users,
    },
    {
        title: "Learning & Growth",
        desc: "Mentorship and learning resources to help you level up faster.",
        icon: GraduationCap,
    },
    {
        title: "Meaningful Impact",
        desc: "Build real digital products that help businesses grow and scale.",
        icon: Sparkles,
    },
];

export default function Career() {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, []);

    return (
        <main className="career">
            {/* TOP BAR */}
            <div className="career-topbar">
                <div className="container career-topbar-inner">
                    <button type="button" className="career-back" onClick={() => navigate("/")}>
                        <ArrowLeft size={16} /> Back to Home
                    </button>

                    <a className="career-topbar-mail" href="mailto:press1technologies@gmail.com">
                        <Mail size={16} />
                        press1technologies@gmail.com
                    </a>
                </div>
            </div>

            {/* HERO */}
            <section className="career-hero">
                <div className="container career-hero-inner">
                    <div className="career-hero-left">
                        <span className="career-eyebrow">Careers</span>
                        <h1 className="career-title">Build work you’re proud of.</h1>
                        <p className="career-subtitle">
                            Press 1 Technologies is a small, fast-moving team building digital products
                            and marketing systems for ambitious brands. We value clean execution, strong
                            communication, and a growth mindset.
                        </p>

                        <div className="career-badges">
                            <span className="career-badge">
                                <BadgeCheck size={16} /> Growth mindset
                            </span>
                            <span className="career-badge">
                                <BadgeCheck size={16} /> High standards
                            </span>
                            <span className="career-badge">
                                <BadgeCheck size={16} /> Real impact
                            </span>
                        </div>

                        <div className="career-hero-cta">
                            <a className="career-btn" href="#talent-pool">
                                Join Talent Pool <ArrowRight size={18} />
                            </a>
                            <a className="career-btn ghost" href="mailto:press1technologies@gmail.com">
                                Email us
                            </a>
                        </div>
                    </div>

                    {/* RIGHT CARD */}
                    <aside className="career-hero-card">
                        <div className="career-hero-card-top">
                            <h3>Currently hiring?</h3>
                            <p>
                                We don’t have open positions at the moment — but we’re always happy to
                                meet great people.
                            </p>
                        </div>

                        <div className="career-status">
                            <span className="career-dot" />
                            <span>No open roles right now</span>
                        </div>

                        <a className="career-mini-link" href="#talent-pool">
                            Submit your profile <ArrowRight size={16} />
                        </a>
                    </aside>
                </div>
            </section>

            {/* PERKS */}
            <section className="career-section">
                <div className="container">
                    <div className="career-head">
                        <h2>What it feels like to work here</h2>
                        <p>Simple, modern work culture — built for quality and speed.</p>
                    </div>

                    <div className="career-grid">
                        {perks.map((p) => {
                            const Icon = p.icon;
                            return (
                                <article key={p.title} className="career-card">
                                    <div className="career-icon">
                                        <Icon size={18} strokeWidth={2} />
                                    </div>
                                    <h3>{p.title}</h3>
                                    <p>{p.desc}</p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* TALENT POOL */}
            <section id="talent-pool" className="career-section alt">
                <div className="container">
                    <div className="career-head">
                        <h2>Join our talent pool</h2>
                        <p>
                            Send your CV + portfolio. We’ll reach out when a matching role opens.
                        </p>
                    </div>

                    <div className="talent-card">
                        <div className="talent-left">
                            <h3>What to send</h3>
                            <ul>
                                <li>• Your CV / resume</li>
                                <li>• Portfolio or GitHub link</li>
                                <li>• Role you’re interested in</li>
                                <li>• Your availability (optional)</li>
                            </ul>
                        </div>

                        <div className="talent-right">
                            <a className="career-btn" href="mailto:press1technologies@gmail.com?subject=Talent%20Pool%20-%20Press%201%20Technologies">
                                Email your profile <ArrowRight size={18} />
                            </a>
                            <p className="talent-note">
                                Tip: Write 2–3 lines about what you’re best at and what you want to build.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* BOTTOM */}
            <section className="career-bottom">
                <div className="container career-bottom-inner">
                    <p>© {new Date().getFullYear()} Press 1 Technologies</p>
                    <button className="career-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                        Back to top ↑
                    </button>
                </div>
            </section>
        </main>
    );
}
