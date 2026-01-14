import { useState } from "react";
import "../css/Portfolio.css";
import Project1 from '../assets/project1.webp'
import Project4 from '../assets/project4.webp'
import Project2 from '../assets/project2.webp'
import Project3 from '../assets/project3.webp'



const projects = [
    {
        title: "Press1 Website",
        category: "Web Development",
        desc: "High-performance business website",
        image: Project4,
    },
    {
        title: "Mobile App UI",
        category: "UI/UX Design",
        desc: "Clean mobile interface system",
        image: Project1,
    },
    {
        title: "Brand Identity",
        category: "Branding",
        desc: "Visual identity & guidelines",
        image: Project3,
    },
    {
        title: "SEO Campaign",
        category: "Marketing",
        desc: "Growth-focused digital marketing",
        image: Project2,
    },
];

const categories = ["All", "Web Development", "UI/UX Design", "Branding", "Marketing"];

export default function Portfolio() {
    const [active, setActive] = useState("All");

    const filtered =
        active === "All"
            ? projects
            : projects.filter((p) => p.category === active);

    return (
        <section className="portfolio" id="portfolio">
            <div className="container">
                <span className="portfolio-eyebrow">Our Work</span>
                <h2 className="portfolio-title">Featured Projects</h2>

                <div className="portfolio-tabs">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`tab ${active === cat ? "active" : ""}`}
                            onClick={() => setActive(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="portfolio-grid">
                    {filtered.map((p, i) => (
                        <article key={i} className="portfolio-card">
                            <div className="portfolio-img">
                                <img src={p.image} alt={p.title} loading="lazy" />
                            </div>

                            <div className="portfolio-info">
                                <span className="portfolio-cat">{p.category}</span>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                                <span className="portfolio-link">View Case Study →</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
