import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';
import { client, urlFor } from '../sanity';
import { useLanguage } from '../context/LanguageContext';
import './TabbedContent.css';

const TabbedContent = () => {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState(() => {
    return sessionStorage.getItem('activePortfolioTab') || 'profesional';
  });
  const [data, setData] = useState({
    professional: [],
    organization: [],
    projects: [],
    achievements: [],
    certificates: []
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [expData, projData, certData, achData] = await Promise.all([
          client.fetch(`*[_type == "experience"] | order(order desc)`),
          client.fetch(`*[_type == "project"] | order(_createdAt asc)`),
          client.fetch(`*[_type == "certificate"] | order(order desc)`),
          client.fetch(`*[_type == "achievement"] | order(order desc)`)
        ]);
        
        setData({
          professional: expData.filter(e => e.type === 'professional'),
          organization: expData.filter(e => e.type === 'organization'),
          projects: projData,
          achievements: achData,
          certificates: certData
        });
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    sessionStorage.setItem('activePortfolioTab', activeTab);
  }, [activeTab]);

  const tabs = [
    { id: 'profesional', label: t('tabs', 'prof') },
    { id: 'organisasi', label: t('tabs', 'org') },
    { id: 'projek', label: t('tabs', 'proj') },
    { id: 'pencapaian', label: t('tabs', 'ach') },
    { id: 'sertifikat', label: t('tabs', 'cert') }
  ];

  const tf = (item, field) => {
    return (lang === 'en' && item[`${field}_en`]) ? item[`${field}_en`] : item[field];
  };

  const renderExperience = (items) => (
    <div className="tab-experience-list">
      {items.length === 0 ? <div className="empty-state">{t('tabs', 'empty')}</div> : items.map(exp => (
        <div key={exp._id} className="tab-experience-card">
          <div className="tab-exp-header">
            <div className="tab-exp-info">
              <h3 className="tab-role">{tf(exp, 'role')}</h3>
              <span className="tab-company-badge">{tf(exp, 'company')}</span>
              <span className="tab-period">{tf(exp, 'period')}</span>
            </div>
            {exp.logo && (
              <div className="tab-company-logo">
                <img src={urlFor(exp.logo).url()} alt={`${tf(exp, 'company')} logo`} />
              </div>
            )}
          </div>
          {tf(exp, 'desc') && tf(exp, 'desc').length > 0 && (
            <ul className="tab-exp-desc">
              {tf(exp, 'desc').map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );

  const renderProjects = (items) => (
    <div className="tab-projects-grid">
      {items.length === 0 ? <div className="empty-state">{t('tabs', 'empty')}</div> : items.map(proj => (
        <div key={proj._id} className="tab-project-card">
          <div className="tab-project-category">
            {proj.tags && proj.tags.length > 0 ? proj.tags[0] : 'PROJECT'}
          </div>
          <Link to={`/project/${proj._id}`} className="tab-project-title-link">
            <h3>{tf(proj, 'title')} <FiArrowRight className="inline-icon" /></h3>
          </Link>
          <p className="tab-project-desc">{tf(proj, 'desc')}</p>
          {proj.tags && proj.tags.length > 0 && (
            <div className="tab-project-stack">
              {proj.tags.join(' · ')}
            </div>
          )}
        </div>
      ))}
    </div>
  );
  
  const renderAchievements = (items) => (
    <div className="tab-achievements-list">
      {items.length === 0 ? <div className="empty-state">{t('tabs', 'empty')}</div> : items.map((ach) => (
        <div key={ach._id} className="tab-achievement-card">
          <div className="tab-achievement-info">
            <h3>{tf(ach, 'title')}</h3>
            <span className="tab-achievement-org">{tf(ach, 'org')}</span>
            <span className="tab-period">{tf(ach, 'period')}</span>
          </div>
          {tf(ach, 'desc') && <p className="tab-achievement-desc">{tf(ach, 'desc')}</p>}
        </div>
      ))}
    </div>
  );

  const renderCerts = (items) => (
    <div className="tab-certs-list">
      {items.length === 0 ? <div className="empty-state">{t('tabs', 'empty')}</div> : items.map(cert => (
        <div key={cert._id} className="tab-cert-item">
          <div className="tab-cert-info">
            <h4>{tf(cert, 'title')}</h4>
            <p>{tf(cert, 'org')}</p>
          </div>
          {cert.link && (
            <a href={cert.link} target="_blank" rel="noreferrer" className="tab-cert-link">
              {t('tabs', 'viewCredential')} <FiExternalLink />
            </a>
          )}
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    if (isLoading) return <div className="loading-state">{t('tabs', 'loading')}</div>;

    switch (activeTab) {
      case 'profesional':
        return renderExperience(data.professional);
      case 'organisasi':
        return renderExperience(data.organization);
      case 'projek':
        return renderProjects(data.projects);
      case 'pencapaian':
        return renderAchievements(data.achievements);
      case 'sertifikat':
        return renderCerts(data.certificates);
      default:
        return null;
    }
  };

  return (
    <section className="tabbed-section">
      <div className="tabs-header">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="tabs-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TabbedContent;
