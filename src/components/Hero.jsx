import React, { useState } from "react";
import "../css/Hero.css";
import {
    ShieldCheck,
    Settings2,
    Rocket,
    Cloud,
    Sparkles,
    Lock,
    Zap,
    TrendingUp,
} from "lucide-react";

const Hero = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return alert("Please enter your business email");
        console.log("Captured email:", email);
    };

    return (
        <section className="hero" id="home">
            <div className="hero-inner">

                {/* LEFT */}
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-dot" />
                        Premium IT + Digital Growth Partner
                    </div>

                    <h1 className="hero-title">
                        Transforming Ideas into <span>Digital Solutions</span>
                    </h1>

                    <p className="hero-description">
                        We build modern web & mobile products, cloud systems, and digital
                        growth solutions with a production-first mindset — secure,
                        scalable, and conversion-focused.
                    </p>

                    <form className="hero-cta" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Enter your business email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button className="cta-btn" type="submit">
                            Get Started
                        </button>
                    </form>

                    <div className="hero-proof">
                        <div className="proof">
                            <Lock size={16} />
                            <span>Secure foundations</span>
                        </div>
                        <div className="proof">
                            <Zap size={16} />
                            <span>Fast delivery</span>
                        </div>
                        <div className="proof">
                            <TrendingUp size={16} />
                            <span>Growth focused</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT – IMAGE VIA URL + FLOATING ICONS */}
                <div className="hero-art" aria-hidden="true">
                    <div className="art-bg-grid" />
                    <div className="art-glow g1" />
                    <div className="art-glow g2" />

                    <div className="device">
                        <div className="device-top">
                            <span className="dot d1" />
                            <span className="dot d2" />
                            <span className="dot d3" />
                        </div>

                        <div className="device-screen">
                            {/* 🔥 Catchy IT / SaaS image */}
                            <img
                                className="hero-img"
                                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1600&auto=format&fit=crop"
                                alt="Modern IT solutions dashboard"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Floating chips */}
                    <div className="float f1">
                        <ShieldCheck size={18} />
                        <span>Secure</span>
                    </div>

                    <div className="float f2">
                        <Rocket size={18} />
                        <span>Launch</span>
                    </div>

                    <div className="float f3">
                        <Cloud size={18} />
                        <span>Cloud</span>
                    </div>

                    <div className="float f4">
                        <Settings2 size={18} />
                        <span>Automation</span>
                    </div>

                    <div className="float f5">
                        <Sparkles size={18} />
                        <span>Premium UI</span>
                    </div>

                    {/* Particles */}
                    <span className="p p1" />
                    <span className="p p2" />
                    <span className="p p3" />
                    <span className="p p4" />
                    <span className="p p5" />
                </div>

            </div>
        </section>
    );
};

export default Hero;
