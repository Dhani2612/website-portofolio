import React, { useEffect, useState } from 'react';
import { FiBriefcase, FiUsers } from 'react-icons/fi';
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
      } catch (error) {
        console.error("Error fetching experience data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const professionals = experiences.filter(exp => exp.type === 'professional');
  const organizations = experiences.filter(exp => exp.type === 'organization');

  if (isLoading) {
    return (
      <section id="experience" className="experience-section">
        <div className="container" style={{ textAlign: 'center', padding: '5rem 0' }}>
          <h2>Loading...</h2>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Pengalaman & <span>Pendidikan</span></h2>

        {/* Bagian Pendidikan bergaya Kartu Glassmorphism */}
        <motion.div 
          className="education-banner"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="edu-card">
            <div className="edu-card-header">
              <span className="edu-badge">Status: Mahasiswa Aktif</span>
            </div>
            <div className="edu-card-body body-flex">
              <div className="edu-logo-wrapper">
                <img src="/LogoUPN.png" alt="Logo UPN Veteran Yogyakarta" />
              </div>
              <div className="edu-details">
                <h3 className="edu-major">Informatika</h3>
                <p className="edu-univ">Universitas Pembangunan Nasional "Veteran" Yogyakarta</p>
                <p className="edu-period">2023 - Sekarang</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="experience-grid">
          {/* Bagian Pengalaman Magang (Kiri) */}
          <div className="timeline-column">
            <h3 className="column-title"><FiBriefcase /> Profesional & Magang</h3>
            <div className="timeline">
              {professionals.map((item, index) => (
                <motion.div 
                  key={item._id}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-date">{item.period}</span>
                    <div className="timeline-header-flex">
                      <div>
                        <h4 className="timeline-role">{item.role}</h4>
                        <p className="timeline-company">{item.company}</p>
                      </div>
                      {item.logo && (
                        <img src={urlFor(item.logo).url()} alt={`Logo ${item.company}`} className="timeline-logo" />
                      )}
                    </div>
                    <p className="timeline-desc">
                      {item.desc && item.desc.map((bullet, i) => (
                        <React.Fragment key={i}>
                          • {bullet}<br/>
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="timeline-column">
            <h3 className="column-title"><FiUsers /> Organisasi & Pengalaman Lain</h3>
            <div className="bento-grid">
              {organizations.map((item, index) => (
                <motion.div 
                  key={item._id}
                  className="bento-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                >
                  <div className="bento-content">
                    <span className="timeline-date">{item.period}</span>
                    <div className="timeline-header-flex">
                      <div>
                        <h4 className="timeline-role">{item.role}</h4>
                        <p className="timeline-company">{item.company}</p>
                      </div>
                      {item.logo && (
                        <img src={urlFor(item.logo).url()} alt={`Logo ${item.company}`} className="timeline-logo" />
                      )}
                    </div>
                    <p className="timeline-desc">
                      {item.desc && item.desc.map((bullet, i) => (
                        <React.Fragment key={i}>
                          • {bullet}<br/>
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bagian Pencapaian */}
        {achievements.length > 0 && (
          <motion.div 
            className="achievements-section" 
            style={{ marginTop: '5rem' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="column-title" style={{ justifyContent: 'center', marginBottom: '2rem' }}>Pencapaian</h3>

            {achievements.map((item, index) => (
              <div key={item._id} className="timeline-content" style={{ maxWidth: '800px', margin: index === achievements.length - 1 ? '0 auto' : '0 auto 1.5rem', textAlign: 'center' }}>
                <span className="timeline-date">{item.period}</span>
                <h4 className="timeline-role" style={{ marginTop: '0.5em', fontSize: '1.4rem', color: index % 2 === 0 ? '#10b981' : '#38bdf8' }}>{item.title}</h4>
                {item.org && <p className="timeline-company" style={{ fontWeight: '600', marginTop: '0.2em' }}>{item.org}</p>}
                <p className="timeline-desc" style={{ marginTop: '1em' }}>{item.desc}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Experience;
