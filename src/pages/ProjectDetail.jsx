import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { projects } from '../data/projectsData';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImg, setCurrentImg] = useState(0);
  const [imgOrientation, setImgOrientation] = useState('landscape');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <motion.div 
        className="project-detail-not-found"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <h2>Mohon maaf, Proyek ini tidak ditemukan!</h2>
        <button onClick={() => navigate('/')} className="btn btn-primary">Kembali ke Beranda</button>
      </motion.div>
    );
  }

  const totalImages = project.collages ? project.collages.length : 0;

  const handleImageLoad = (e) => {
    const { naturalWidth, naturalHeight } = e.target;
    setImgOrientation(naturalWidth >= naturalHeight ? 'landscape' : 'portrait');
  };

  return (
    <motion.div 
      className="project-detail-page fade-in"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container">

        <button onClick={() => navigate('/')} className="back-btn">
          <FiArrowLeft /> Kembali ke Beranda
        </button>

        <div className="pd-header">
          <h1 className="pd-title">{project.title}</h1>
          <div className="pd-tags">
            {project.tags.map(tag => (
              <span key={tag} className="pd-tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* Image Carousel — tombol panah di samping kiri & kanan gambar */}
        {totalImages > 0 && (
          <div className={`pd-carousel ${imgOrientation}`}>
            {totalImages > 1 && (
              <button
                className="carousel-arrow carousel-arrow-left"
                onClick={() => setCurrentImg(prev => prev - 1)}
                disabled={currentImg === 0}
              >
                <FiChevronLeft />
              </button>
            )}

            <div className="pd-carousel-img-wrapper">
              <img
                key={currentImg}
                src={project.collages[currentImg]}
                alt={`${project.title} - foto ${currentImg + 1}`}
                onLoad={handleImageLoad}
              />
              {totalImages > 1 && (
                <span className="carousel-counter">{currentImg + 1} / {totalImages}</span>
              )}
            </div>

            {totalImages > 1 && (
              <button
                className="carousel-arrow carousel-arrow-right"
                onClick={() => setCurrentImg(prev => prev + 1)}
                disabled={currentImg === totalImages - 1}
              >
                <FiChevronRight />
              </button>
            )}
          </div>
        )}

        {/* Konten Deskripsi Proyek */}
        <div className="pd-body">
          <div className="pd-desc">
            <h3>Tentang Proyek</h3>
            <div
              className="pd-long-desc"
              // Kita me-render JSX dengan memecah line-break `\n` menjadi paragraf agar rapi
              dangerouslySetInnerHTML={{ __html: project.longDesc.replace(/\n\n/g, '<br/><br/>') }}
            />
          </div>

          <div className="pd-sidebar">
            <h3>Fitur / Peran Khusus</h3>
            <ul className="pd-features">
              {project.features && project.features.map((feat, index) => (
                <li key={index}>{feat}</li>
              ))}
            </ul>

            <div className="pd-actions">
              {project.github !== "#" && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-block">
                  <FiGithub /> Repositori Kode
                </a>
              )}
              {project.demo !== "#" && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-block">
                  <FiExternalLink /> Coba Aplikasi
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
