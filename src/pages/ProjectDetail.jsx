import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiGithub, FiExternalLink, FiList } from 'react-icons/fi';
import { client, urlFor } from '../sanity';
import { useLanguage } from '../context/LanguageContext';
import { PortableText } from '@portabletext/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Mermaid from '../components/Mermaid';
import './ProjectDetail.css';

// Utility for slugifying headers for TOC anchor links
const slugify = (text) => {
  if (!text) return '';
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')       // Replace spaces with -
    .replace(/[^\w-]+/g, '')    // Remove all non-word chars
    .replace(/--+/g, '-')       // Replace multiple - with single -
    .replace(/^-+/, '')         // Trim - from start of text
    .replace(/-+$/, '');        // Trim - from end of text
};

const ProjectDetail = () => {
  const { lang, t } = useLanguage();
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchProject = async () => {
      try {
        const query = `*[_type == "project" && _id == $id][0]`;
        const data = await client.fetch(query, { id });
        setProject(data);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchProject();
  }, [id]);

  const tf = (item, field) => {
    return (lang === 'en' && item[`${field}_en`]) ? item[`${field}_en`] : item[field];
  };

  if (isLoading) {
    return (
      <div className="project-detail-page" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'var(--text-muted)'}}>
        <h2>{t('projectDetail', 'loading')}</h2>
      </div>
    );
  }

  if (!project) {
    return (
      <motion.div 
        className="project-detail-not-found"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h2>{t('projectDetail', 'notFound')}</h2>
        <button onClick={() => navigate('/')} className="btn btn-primary">{t('projectDetail', 'backHome')}</button>
      </motion.div>
    );
  }

  const content = tf(project, 'content');
  
  // Extract Headings for Table of Contents
  const toc = content 
    ? content
        .filter(block => block._type === 'block' && (block.style === 'h2' || block.style === 'h3'))
        .map(block => {
          const text = block.children.map(child => child.text).join('');
          return {
            text,
            slug: slugify(text),
            level: block.style === 'h2' ? 2 : 3
          };
        })
    : [];

  // Portable Text custom components
  const components = {
    block: {
      h2: ({children}) => {
        const text = children.map(child => (typeof child === 'string' ? child : child.props?.text)).join('');
        return <h2 id={slugify(text)} className="pd-content-h2">{children}</h2>;
      },
      h3: ({children}) => {
        const text = children.map(child => (typeof child === 'string' ? child : child.props?.text)).join('');
        return <h3 id={slugify(text)} className="pd-content-h3">{children}</h3>;
      },
      normal: ({children}) => <p className="pd-content-p">{children}</p>,
      blockquote: ({children}) => <blockquote className="pd-content-quote">{children}</blockquote>
    },
    types: {
      image: ({value}) => {
        if (!value?.asset?._ref) {
          return null
        }
        return (
          <div className="pd-content-img-wrapper">
            <img
              alt={value.alt || 'Project illustration'}
              loading="lazy"
              src={urlFor(value).url()}
              className="pd-content-img"
            />
          </div>
        )
      },
      code: ({value}) => {
        if (!value || !value.code) return null;
        if (value.language === 'mermaid') {
          return <Mermaid chart={value.code} />;
        }
        return (
          <div className="pd-code-block">
            <SyntaxHighlighter 
              language={value.language || 'text'} 
              style={vscDarkPlus}
              customStyle={{ borderRadius: '0', background: 'var(--bg-secondary)', border: '1px solid var(--card-border)', padding: '1rem', fontSize: '0.85rem' }}
            >
              {value.code}
            </SyntaxHighlighter>
          </div>
        )
      }
    }
  };

  return (
    <motion.div 
      className="project-detail-page fade-in"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Helmet>
        <title>{tf(project, 'title')} | Dhani Kartika</title>
        <meta name="description" content={tf(project, 'desc')} />
        <meta property="og:title" content={tf(project, 'title')} />
        <meta property="og:description" content={tf(project, 'desc')} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="container">
        <button onClick={() => navigate('/')} className="back-btn">
          <FiArrowLeft /> {t('projectDetail', 'backHome')}
        </button>

        <div className="pd-header">

          <h1 className="pd-title">{tf(project, 'title')}</h1>
          {/* Dynamic Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="pd-tags">
              {project.tags.map(tag => (
                <span key={tag} className="pd-tag">{tag}</span>
              ))}
            </div>
          )}

          {/* Highlight Cards */}
          {project.cards && project.cards.length > 0 && (
            <div className="pd-highlight-cards">
              {project.cards.map((card, idx) => (
                <div key={idx} className="pd-highlight-card">
                  <h4>{tf(card, 'title')}</h4>
                  <p>{tf(card, 'desc')}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="pd-body-layout">
          {/* Main Content (Left) */}
          <div className="pd-main-content">
            {content ? (
              <PortableText value={content} components={components} />
            ) : (
              // Fallback for old projects before the dynamic schema (just in case)
              <div className="pd-legacy-content">
                <div
                  className="pd-long-desc"
                  dangerouslySetInnerHTML={{ __html: tf(project, 'longDesc') ? tf(project, 'longDesc').replace(/\n\n/g, '<br/><br/>') : tf(project, 'desc') }}
                />
              </div>
            )}
          </div>

          {/* Sidebar (Right) */}
          <div className="pd-sidebar">
            <div className="pd-sidebar-sticky">
              
              {/* Table of Contents */}
              {toc.length > 0 && (
                <div className="pd-toc-card">
                  <h3><FiList style={{marginRight: '8px', verticalAlign: 'middle'}}/> {lang === 'id' ? 'Daftar Isi' : 'Table of Contents'}</h3>
                  <ul className="pd-toc-list">
                    {toc.map((item, idx) => (
                      <li key={idx} className={`toc-level-${item.level}`}>
                        <a href={`#${item.slug}`}>{item.text}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Links under TOC */}
              <div className="pd-actions-card">
                {project.github && project.github !== "#" && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-block">
                    <FiGithub /> {t('projectDetail', 'repo')}
                  </a>
                )}
                {project.demo && project.demo !== "#" && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">
                    <FiExternalLink /> {t('projectDetail', 'demo')}
                  </a>
                )}
                {(!project.github && !project.demo) && (
                  <p style={{fontSize: '0.8rem', color: 'var(--text-muted)'}}>
                    {lang === 'id' ? 'Tautan belum tersedia untuk proyek ini.' : 'Links are not available for this project yet.'}
                  </p>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
