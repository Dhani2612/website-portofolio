import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { client, urlFor } from '../sanity';
import './Experience.css';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [expData, achData] = await Promise.all([
          client.fetch(`*[_type == "experience"] | order(order desc)`),
          client.fetch(`*[_type == "achievement"] | order(order desc)`)
        ]);
        setExperiences(expData);
        setAchievements(achData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="experience-loading">Loading...</div>;
  }

  const professionals = experiences.filter(exp => exp.type === 'professional');
  const organizations = experiences.filter(exp => exp.type === 'organization');
  const mergedExperiences = [...professionals, ...organizations];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <motion.div 
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
        >
          <span className="section-label">EXPERIENCE</span>
          <h2 className="section-heading">Pengalaman & Pendidikan</h2>
        </motion.div>

        <motion.div 
          className="education-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
        >
          <div className="education-header">
            <span className="status-badge">Status: Mahasiswa Aktif</span>
          </div>
          <div className="education-content">
            <div className="education-info">
              <h3>Informatika</h3>
              <h4>UPN "Veteran" Yogyakarta</h4>
              <span className="period">2023 - Present</span>
            </div>
          </div>
        </motion.div>

        <div className="experience-list">
          {mergedExperiences.map((exp) => (
            <motion.div 
              key={exp._id}
              className="experience-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUpVariant}
            >
              <div className="experience-card-header">
                <div className="experience-role-info">
                  <h3 className="role">{exp.role}</h3>
                  <span className="company-badge">{exp.company}</span>
                  <span className="period">{exp.period}</span>
                </div>
                {exp.logo && (
                  <div className="company-logo">
                    <img src={urlFor(exp.logo).url()} alt={`${exp.company} logo`} />
                  </div>
                )}
              </div>
              
              {exp.desc && exp.desc.length > 0 && (
                <ul className="experience-desc">
                  {exp.desc.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {achievements.length > 0 && (
          <motion.div 
            className="achievements-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
          >
            <div className="section-divider"></div>
            <span className="section-label">ACHIEVEMENTS</span>
            <div className="achievements-list">
              {achievements.map((ach) => (
                <div key={ach._id} className="achievement-card">
                  <div className="achievement-info">
                    <h3>{ach.title}</h3>
                    <span className="achievement-org">{ach.org}</span>
                    <span className="period">{ach.period}</span>
                  </div>
                  {ach.desc && <p className="achievement-desc">{ach.desc}</p>}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Experience;
