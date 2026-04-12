import React from 'react';
import { FiBriefcase, FiUsers } from 'react-icons/fi';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Pengalaman & <span>Pendidikan</span></h2>

        {/* Bagian Pendidikan bergaya Editor Kode */}
        <div className="education-banner fade-in">
          <div className="edu-terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="t-dot red"></span>
                <span className="t-dot yellow"></span>
                <span className="t-dot green"></span>
              </div>
              <span className="terminal-title">education.json</span>
            </div>
            <div className="terminal-body body-flex">
              <div className="edu-logo-wrapper">
                <img src="/LogoUPN.png" alt="Logo UPN Veteran Yogyakarta" />
              </div>
              <pre>
                <code>{`{
  "major": "Informatika",
  "university": "Universitas Pembangunan Nasional Veteran Yogyakarta",
  "period": "2023 - Present",
  "status": "Active Student"
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="experience-grid">
          {/* Bagian Pengalaman Magang (Kiri) */}
          <div className="timeline-column fade-in">
            <h3 className="column-title"><FiBriefcase /> Profesional & Magang</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">April 2026</span>
                  <h4 className="timeline-role">Peserta, Ketua Tim</h4>
                  <p className="timeline-company">PIDI - DIGDAYA X Hackathon 2026</p>
                  <p className="timeline-desc">Memimpin tim pengembang merancang "NusaLink AI", sebuah ekosistem remote-work untuk mengakselerasi ekspor talenta IT lokal ke pasar global. Mengonsep arsitektur platform yang mengintegrasikan Local Language Model (LLM) untuk penerjemahan komunikasi real-time dan Smart Contract Escrow (Blockchain) guna menekan biaya transaksi lintas negara hingga 0%.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">Maret 2026 - April 2026</span>
                  <h4 className="timeline-role">Peserta, Ketua Tim</h4>
                  <p className="timeline-company">Data Analytics Competition (DAC) Find IT! 2026 – DTETI UGM</p>
                  <p className="timeline-desc">Merancang model Computer Vision (liveness detection) untuk mendeteksi dan mengklasifikasikan 6 kelas ancaman siber face spoofing. Melatih model prediktif menggunakan dataset citra dunia nyata yang kompleks, menghasilkan sistem verifikasi identitas dengan skor akurasi 0.75.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">Januari 2026 – Februari 2026</span>
                  <h4 className="timeline-role">Software Development Intern</h4>
                  <p className="timeline-company">PT. Kereta Api Indonesia (KAI) Daop 6 Yogyakarta</p>
                  <p className="timeline-desc">Mengembangkan website manajemen arsip digital untuk Unit SDM melalui kolaborasi dengan tim IT guna meningkatkan efisiensi operasional harian. Memvalidasi dan mendigitalisasi 5.000+ dokumen kontrak serta pegawai ke dalam sistem terpusat guna menjamin akurasi dan mempercepat akses data.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">Januari 2025</span>
                  <h4 className="timeline-role">Magang Berbasis Projek : Data Scientist</h4>
                  <p className="timeline-company">Rakamin Academy X ID/X Partners</p>
                  <p className="timeline-desc">Mengimplementasikan Python dan SQL untuk memproses Big Data, menyusun query kompleks, serta mengembangkan model prediktif berdasarkan simulasi studi kasus industri nyata. Melakukan Exploratory Data Analysis (EDA) dan analisis statistik untuk mengekstrak data mentah menjadi actionable insights, yang kemudian disajikan melalui visualisasi data komprehensif.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bagian Organisasi (Kanan) */}
          <div className="timeline-column fade-in">
            <h3 className="column-title"><FiUsers /> Organisasi & Kepanitiaan</h3>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">2024</span>
                  <h4 className="timeline-role">Speaker (Sekolah Kastrat)</h4>
                  <p className="timeline-company">HMTM UPN "Veteran" Yogyakarta</p>
                  <p className="timeline-desc">Diundang khusus sebagai pembicara di acara <i>"Thought Leaders Next Gen."</i> Mampu melatih perumusan kajian isu kritis dan memfasilitasi diskusi interaktif guna memberdayakan daya analitik peserta agar berkembang menjadi pemimpin masa depan yang berdampak.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">Apr 2025 - Agt 2025</span>
                  <h4 className="timeline-role">Koordinator Umum</h4>
                  <p className="timeline-company">PKKBN IF UPN "Veteran" Yogyakarta</p>
                  <p className="timeline-desc">Memimpin perencanaan dan koordinasi terhadap 100+ anggota panitia dari berbagai divisi untuk menyukseskan program kerja PKKBN Informatika 2025 dengan lancar.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">Feb 2025 - Des 2025</span>
                  <h4 className="timeline-role">Wakil Kepala Divisi Advokasi & Kesejahteraan Mahasiswa</h4>
                  <p className="timeline-company">BEM FTI UPN "Veteran" Yogyakarta</p>
                  <p className="timeline-desc">Bertindak sebagai penghubung antara mahasiswa dan fakultas sembari mengoordinasikan upaya advokasi dan inisiatif kesejahteraan mahasiswa. Turut menyusun dan mengeksekusi program-program proaktif untuk menampung serta menyelesaikan permasalahan akademik maupun non-akademik secara efektif.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">Okt 2024 - Des 2024</span>
                  <h4 className="timeline-role">PLT Kementerian Analisis Isu Kampus</h4>
                  <p className="timeline-company">BEM KM UPN "Veteran" Yogyakarta</p>
                  <p className="timeline-desc">Ditunjuk atas rekam jejak kerja yang luar biasa. Memimpin langsung upaya analisis dan advokasi isu kampus, menunjukkan kepemimpinan adaptif, kolaborasi tangguh, dan formulasi pemecahan masalah strategis untuk memajukan tujuan organisasi.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">Mei 2024 - Agt 2024</span>
                  <h4 className="timeline-role">Koordinator Lapangan Penyokong</h4>
                  <p className="timeline-company">PKKBN IF UPN "Veteran" Yogyakarta</p>
                  <p className="timeline-desc">Mengawasi pelaksanaan teknis dan logistik untuk acara-acara besar. Merencanakan dan mengelola operasi lapangan yang melibatkan 100+ anggota panitia, serta bertugas sebagai MC untuk menciptakan interaksi positif yang menghidupkan antusiasme peserta.</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">Feb 2024 - Okt 2024</span>
                  <h4 className="timeline-role">Staff Kementerian Analisis Isu Kampus</h4>
                  <p className="timeline-company">BEM KM UPN "Veteran" Yogyakarta</p>
                  <p className="timeline-desc">Bertanggung jawab untuk mengidentifikasi, menganalisis, dan mengadvokasi isu-isu terkait kampus. Memimpin pengumpulan data dari 1.000+ mahasiswa, turut menyusun 8+ laporan analitis berdampak nyata, dan berkontribusi penuh pada 5+ proyek strategis demi peningkatan pengalaman mahasiswa.</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bagian Pencapaian */}
        <div className="achievements-section fade-in" style={{ marginTop: '5rem' }}>
          <h3 className="column-title" style={{ justifyContent: 'center', marginBottom: '2rem' }}>Pencapaian</h3>

          <div className="timeline-content" style={{ maxWidth: '800px', margin: '0 auto 1.5rem', textAlign: 'center' }}>
            <span className="timeline-date">2025</span>
            <h4 className="timeline-role" style={{ marginTop: '0.5em', fontSize: '1.4rem', color: '#10b981' }}>Awardee Beasiswa Bank Indonesia</h4>
            <p className="timeline-company" style={{ fontWeight: '600', marginTop: '0.2em' }}>Bank Indonesia</p>
            <p className="timeline-desc" style={{ marginTop: '1em' }}>Terpilih sebagai salah satu penerima program beasiswa bergengsi dari Bank Indonesia atas pencapaian akademis dan dedikasi kontribusi luar biasa bagi komunitas serta pengembangan kepemimpinan yang progresif.</p>
          </div>

          <div className="timeline-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="timeline-date">Maret - Mei 2024</span>
            <h4 className="timeline-role" style={{ marginTop: '0.5em', fontSize: '1.4rem', color: '#38bdf8' }}>Staff Of The Month</h4>
            <p className="timeline-company" style={{ fontWeight: '600', marginTop: '0.2em' }}>BEM KM UPN "Veteran" Yogyakarta</p>
            <p className="timeline-desc" style={{ marginTop: '1em' }}>Dianugerahi penghargaan berkat kedisiplinan dan kapabilitas luar biasa dalam mengeksekusi misi manajerial kementerian. Mampu mendemonstrasikan etos kerja yang konsisten melebihi target dan membawa nilai kolaborasi positif bagi tim.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
