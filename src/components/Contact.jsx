import React, { useState } from 'react';
import { FiInstagram, FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: false, error: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });

    try {
      // Menggunakan AJAX endpoint dari FormSubmit agar tidak redirect ke halaman lain
      const response = await fetch("https://formsubmit.co/ajax/kartikadani0@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: "Pesan Baru dari Website Portofolio!"
        })
      });

      if (response.ok) {
        setStatus({ submitting: false, success: true, error: false });
        setFormData({ name: '', email: '', message: '' }); // Reset form
        
        // Hilangkan pesan sukses setelah 5 detik
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      } else {
        throw new Error("Gagal mengirim");
      }
    } catch (error) {
      setStatus({ submitting: false, success: false, error: true });
      setTimeout(() => setStatus(prev => ({ ...prev, error: false })), 5000);
    }
  };

  return (
    <footer id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Hubungi <span>Saya</span></h2>

        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h3>Mari Berdiskusi & Berkolaborasi!</h3>
            <p className="contact-desc">
              Punya ide proyek, tawaran kolaborasi, atau sekadar ingin menyapa? Jangan ragu untuk mengirimkan pesan melalui formulir di samping atau hubungi saya via media sosial!
            </p>

            <div className="contact-email">
              <FiMail className="contact-icon" />
              <span>kartikadani0@gmail.com</span>
            </div>

            <div className="social-links">
              <a href="https://www.instagram.com/dhann.kp/" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-icon">
                <FiInstagram />
              </a>
              <a href="https://github.com/Dhani2612" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-icon">
                <FiGithub />
              </a>
              <a href="https://www.linkedin.com/in/dhanikp/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon">
                <FiLinkedin />
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Nama</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status.submitting}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status.submitting}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Pesan</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  disabled={status.submitting}
                  required
                ></textarea>
              </div>
              
              {status.success && (
                <div style={{color: '#10b981', marginBottom: '1rem', padding: '0.5rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px', textAlign: 'center'}}>
                  Pesan berhasil terkirim! Saya akan segera membalasnya.
                </div>
              )}
              {status.error && (
                <div style={{color: '#ef4444', marginBottom: '1rem', padding: '0.5rem', background: 'rgba(239, 68, 68, 0.1)', borderRadius: '8px', textAlign: 'center'}}>
                  Gagal mengirim pesan. Silakan coba beberapa saat lagi.
                </div>
              )}

              <button type="submit" className="btn btn-primary w-full" disabled={status.submitting}>
                {status.submitting ? (
                  <>Mengirim... <span style={{marginLeft: '8px'}} className="spinner">⌛</span></>
                ) : (
                  <><FiSend style={{ marginRight: '8px' }} /> Kirim Pesan</>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dhani Kartika Prihantyo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
