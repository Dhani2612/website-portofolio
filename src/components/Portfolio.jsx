import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';
import { client } from '../sanity';
import './Portfolio.css';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
    >
      <div className="project-category">
        {project.tags && project.tags.length > 0 ? project.tags[0] : 'PROJECT'}
      </div>
      <Link to={`/project/${project._id}`} className="project-title-link">
        <h3>{project.title} <FiArrowRight className="inline-icon" /></h3>
      </Link>
      <p className="project-desc">{project.desc}</p>
      
      {project.tags && project.tags.length > 0 && (
        <div className="project-tech-stack">
          {project.tags.join(' · ')}
        </div>
      )}
    </motion.div>
  );
};

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectData, certData] = await Promise.all([
          client.fetch('*[_type == "project"] | order(_createdAt asc)'),
          client.fetch('*[_type == "certificate"] | order(order desc)')
        ]);
        setProjects(projectData);
        setCertificates(certData);
      } catch (error) {
        console.error("Error fetching data from Sanity:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="section-header">
          <span className="section-label">SELECTED WORK</span>
          <h2 className="section-title">Karya & Portofolio</h2>
        </div>

        {isLoading ? (
          <div className="loading-state">Loading projects...</div>
        ) : (
          <div className="projects-grid">
            {projects.length > 0 ? (
              projects.map(project => (
                <ProjectCard key={project._id} project={project} />
              ))
            ) : (
              <div className="empty-state">No projects found.</div>
            )}
          </div>
        )}

        {certificates.length > 0 && !isLoading && (
          <div className="certificates-section">
            <div className="section-header">
              <span className="section-label">CERTIFICATIONS</span>
              <h2 className="section-title">Sertifikat</h2>
            </div>
            <div className="certificates-list">
              {certificates.map(cert => (
                <motion.div 
                  className="cert-item" 
                  key={cert._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="cert-info">
                    <h4>{cert.title}</h4>
                    <p>{cert.org}</p>
                  </div>
                  {cert.link && (
                    <a href={cert.link} target="_blank" rel="noreferrer" className="cert-link">
                      Lihat Kredensial <FiExternalLink />
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
