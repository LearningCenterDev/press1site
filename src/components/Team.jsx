import React from "react";
import "../css/Team.css";
import Team1 from '../assets/team1.webp'


const teamMembers = [
    {
        name: "Ashish Acharya",
        role: "Founder/CEO",
        image: Team1,
    },
    {
        name: "Shrijan Kafle",
        role: "Project Manager",
        image: Team1,
    },
    {
        name: "Sushant Hona",
        role: "Full-Stack Developer",
        image: Team1,
    },
    {
        name: "Ishowar Dev Bhandari",
        role: "Full-Stack/ Flutter Developer",
        image: Team1,
    },
    {
        name: "Sakar Khadka",
        role: "Full-Stack Developer",
        image: Team1,
    },
    {
        name: "Sampanna Sapkota",
        role: "Full-Stack Developer/ Digital Creator",
        image: Team1,
    },
];

const Team = () => {
    return (
        <section className="team">
            <div className="team-container container">
                <div className="team-head">
                    <span className="team-badge">Our Team</span>
                    <h2 className="team-title">People Behind Press 1 Technologies</h2>
                    <p className="team-subtitle">
                        A small, experienced team committed to building reliable and scalable
                        digital solutions.
                    </p>
                </div>

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <div className="team-card" key={index}>
                            <div className="team-image">
                                <img src={member.image} alt={member.name} loading="lazy" />
                            </div>

                            <div className="team-info">
                                <h3>{member.name}</h3>
                                <span className="team-role">{member.role}</span>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
