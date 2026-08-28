import React from 'react';
import { FiBriefcase, FiUsers } from 'react-icons/fi';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
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
              <motion.div 
                className="timeline-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">Agustus 2026 - November 2026</span>
                  <div className="timeline-header-flex">
                    <div>
                      <h4 className="timeline-role">Web & CMS Administrator</h4>
                      <p className="timeline-company">Divisi Humas UPN "Veteran" Yogyakarta</p>
                    </div>
                    <img src="/logo/LogoUPN.png" alt="Logo Divisi Humas UPN Veteran Yogyakarta" className="timeline-logo" />
                  </div>
                  <p className="timeline-desc">
                    • Mengelola dan memelihara sistem web Hubungan Masyarakat (Humas) UPN "Veteran" Yogyakarta.<br/>
                    • Bertanggung jawab atas Content Management System (CMS) untuk publikasi berita resmi kampus.<br/>
                    • Mengoptimalkan UI/UX situs web secara berkala agar lebih responsif dan mudah diakses oleh sivitas akademika.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="timeline-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">April 2026</span>
                  <div className="timeline-header-flex">
                    <div>
                      <h4 className="timeline-role">TOP 800 Proposalist, Ketua Tim</h4>
                      <p className="timeline-company">PIDI - DIGDAYA X Hackathon 2026 by Bank Indonesia</p>
                    </div>
                    <img src="/logo/LogoBI.png" alt="Logo Bank Indonesia" className="timeline-logo" />
                  </div>
                  <p className="timeline-desc">
                    • Memimpin tim merancang prototipe "NusaLink AI", platform remote-work bagi talenta IT lokal.<br/>
                    • Mengonsep arsitektur yang memanfaatkan Local Language Model (LLM) untuk penerjemahan real-time.<br/>
                    • Mengintegrasikan konsep Smart Contract untuk mengefisiensikan biaya transaksi lintas negara.
                  </p>
                </div>
              </motion.div>


              <motion.div 
                className="timeline-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">Januari 2026 – Februari 2026</span>
                  <div className="timeline-header-flex">
                    <div>
                      <h4 className="timeline-role">Software Development Intern</h4>
                      <p className="timeline-company">PT. Kereta Api Indonesia (KAI) Daop 6 Yogyakarta</p>
                    </div>
                    <img src="/logo/LogoKAI.png" alt="Logo PT. Kereta Api Indonesia (KAI) Daop 6 Yogyakarta" className="timeline-logo" />
                  </div>
                  <p className="timeline-desc">
                    • Berkolaborasi dengan tim IT mengembangkan website manajemen arsip digital untuk Unit SDM.<br/>
                    • Mendigitalisasi dan memvalidasi 5.000+ dokumen kontrak pegawai ke dalam sistem terpusat.<br/>
                    • Mempercepat proses pencarian dan akses data pegawai secara signifikan.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="timeline-item"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">Januari 2025</span>
                  <h4 className="timeline-role">Magang Berbasis Projek : Data Scientist</h4>
                  <p className="timeline-company">Rakamin Academy X ID/X Partners</p>
                  <p className="timeline-desc">
                    • Menggunakan Python dan SQL untuk memproses data dan mengembangkan model prediktif.<br/>
                    • Melakukan Exploratory Data Analysis (EDA) dari studi kasus industri untuk menghasilkan actionable insights.<br/>
                    • Merangkum hasil analisis ke dalam visualisasi data interaktif.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="timeline-column">
            <h3 className="column-title"><FiUsers /> Organisasi & Pengalaman Lain</h3>
            <div className="bento-grid">
              <motion.div 
                className="bento-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="bento-content">
                  <span className="timeline-date">Juli 2026</span>
                  <div className="timeline-header-flex">
                    <div>
                      <h4 className="timeline-role">Koordinator Mahasiswa Kelompok KKN UPNYK 84.065</h4>
                      <p className="timeline-company">LPPM UPN "Veteran" Yogyakarta</p>
                    </div>
                    <img src="/logo/LogoUPN.png" alt="Logo LPPM UPN Veteran Yogyakarta" className="timeline-logo" />
                  </div>
                  <p className="timeline-desc">
                    • Memimpin tim mahasiswa dari berbagai program studi dalam pelaksanaan Kuliah Kerja Nyata (KKN).<br/>
                    • Bertindak sebagai penghubung antara pihak desa, dosen pembimbing, dan anggota tim.<br/>
                    • Mengawasi jalannya 3 program kerja utama pemberdayaan masyarakat agar selesai sesuai target operasional lapangan.
                  </p>
                </div>
              </motion.div>


              <motion.div 
                className="bento-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="bento-content">
                  <span className="timeline-date">Apr 2025 - Agt 2025</span>
                  <div className="timeline-header-flex">
                    <div>
                      <h4 className="timeline-role">Koordinator Umum</h4>
                      <p className="timeline-company">PKKBN IF UPN "Veteran" Yogyakarta</p>
                    </div>
                    <img src="/logo/logoJIF.png" alt="Logo PKKBN IF UPN Veteran Yogyakarta" className="timeline-logo" />
                  </div>
                  <p className="timeline-desc">
                    • Mengoordinasikan lebih dari 100 panitia dari berbagai divisi.<br/>
                    • Memimpin tahapan perencanaan hingga pelaksanaan acara PKKBN Informatika 2025.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="bento-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <div className="bento-content">
                  <span className="timeline-date">Feb 2025 - Des 2025</span>
                  <div className="timeline-header-flex">
                    <div>
                      <h4 className="timeline-role">Wakil Kepala Divisi Advokasi & Kesejahteraan Mahasiswa</h4>
                      <p className="timeline-company">BEM FTI UPN "Veteran" Yogyakarta</p>
                    </div>
                    <img src="/logo/LogoBEMFTI.png" alt="Logo BEM FTI UPN Veteran Yogyakarta" className="timeline-logo" />
                  </div>
                  <p className="timeline-desc">
                    • Menjembatani aspirasi mahasiswa dengan pihak fakultas melalui program advokasi.<br/>
                    • Aktif menangani dan mencari solusi untuk berbagai keluhan mahasiswa terkait kendala akademik maupun non-akademik.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="bento-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bento-content">
                  <span className="timeline-date">Okt 2024 - Des 2024</span>
                  <div className="timeline-header-flex">
                    <div>
                      <h4 className="timeline-role">PLT Kementerian Analisis Isu Kampus</h4>
                      <p className="timeline-company">BEM KM UPN "Veteran" Yogyakarta</p>
                    </div>
                    <img src="/logo/LogoBEMKM.png" alt="Logo BEM KM UPN Veteran Yogyakarta" className="timeline-logo" />
                  </div>
                  <p className="timeline-desc">
                    • Dipercaya mengambil alih kepemimpinan kementerian sementara secara penuh.<br/>
                    • Memimpin langsung tim dalam menganalisis isu-isu kampus yang krusial dan menyusun langkah advokasi relevan.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="bento-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.35 }}
              >
                <div className="bento-content">
                  <span className="timeline-date">Mei 2024 - Agt 2024</span>
                  <div className="timeline-header-flex">
                    <div>
                      <h4 className="timeline-role">Koordinator Lapangan Penyokong</h4>
                      <p className="timeline-company">PKKBN IF UPN "Veteran" Yogyakarta</p>
                    </div>
                    <img src="/logo/logoJIF.png" alt="Logo PKKBN IF UPN Veteran Yogyakarta" className="timeline-logo" />
                  </div>
                  <p className="timeline-desc">
                    • Bertanggung jawab atas manajemen lapangan dan logistik pada acara PKKBN.<br/>
                    • Mengoordinasikan 100+ panitia saat hari H dan sekaligus bertugas sebagai MC utama acara.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                className="bento-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="bento-content">
                  <span className="timeline-date">Feb 2024 - Okt 2024</span>
                  <div className="timeline-header-flex">
                    <div>
                      <h4 className="timeline-role">Staff Kementerian Analisis Isu Kampus</h4>
                      <p className="timeline-company">BEM KM UPN "Veteran" Yogyakarta</p>
                    </div>
                    <img src="/logo/LogoBEMKM.png" alt="Logo BEM KM UPN Veteran Yogyakarta" className="timeline-logo" />
                  </div>
                  <p className="timeline-desc">
                    • Terlibat langsung dalam pengumpulan data kajian dari 1.000+ mahasiswa.<br/>
                    • Berkontribusi dalam penyusunan 8+ laporan analisis yang digunakan sebagai landasan perbaikan fasilitas kampus.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bagian Pencapaian */}
        <motion.div 
          className="achievements-section" 
          style={{ marginTop: '5rem' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="column-title" style={{ justifyContent: 'center', marginBottom: '2rem' }}>Pencapaian</h3>

          <div className="timeline-content" style={{ maxWidth: '800px', margin: '0 auto 1.5rem', textAlign: 'center' }}>
            <span className="timeline-date">2025</span>
            <h4 className="timeline-role" style={{ marginTop: '0.5em', fontSize: '1.4rem', color: '#10b981' }}>Awardee Beasiswa Bank Indonesia</h4>
            <p className="timeline-company" style={{ fontWeight: '600', marginTop: '0.2em' }}>Bank Indonesia</p>
            <p className="timeline-desc" style={{ marginTop: '1em' }}>Terpilih sebagai penerima beasiswa Bank Indonesia melalui tahapan seleksi ketat berdasarkan rekam jejak akademis, keaktifan organisasi, serta potensi kepemimpinan.</p>
          </div>

          <div className="timeline-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="timeline-date">Maret - Mei 2024</span>
            <h4 className="timeline-role" style={{ marginTop: '0.5em', fontSize: '1.4rem', color: '#38bdf8' }}>Staff Of The Month</h4>
            <p className="timeline-company" style={{ fontWeight: '600', marginTop: '0.2em' }}>BEM KM UPN "Veteran" Yogyakarta</p>
            <p className="timeline-desc" style={{ marginTop: '1em' }}>Mendapatkan penghargaan atas kinerja yang konsisten dan tanggung jawab penuh dalam menyelesaikan setiap target program kerja kementerian, serta mampu menjalin kolaborasi tim yang baik.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
