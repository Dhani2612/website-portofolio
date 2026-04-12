export const projects = [
  {
    id: 1,
    title: "DHT22 Relay LCD – IoT Monitoring",
    desc: "Sistem IoT cerdas memanfaatkan mikrokontroler Arduino, modul sensor terpadu, dan aktuator relai dalam mengelola iklim ruangan UMKM.",
    tags: ["Arduino", "C++", "IoT", "Hardware"],
    img: "/wiring.jpg",
    github: "https://github.com/Dhani2612/temp-humidity-monitor",
    demo: "#",
    longDesc: `Proyek IoT (Internet of Things) ini saya buat sebagai implementasi pragmatis untuk mata kuliah Komputer dan Masyarakat. Visinya adalah memecahkan kendala lapangan yang ada di lingkungan lokal seperti UMKM pengrajin (furniture production) di mana kelembapan udara yang keliru dapat segera merusak material kayu yang sensitif.
    
    Dilengkapi perangkat keras berupa sensor DHT22 untuk mengukur matriks Suhu dan Kelembapan ruangan, data mentah akan ditayangkan secara waktu nyata atau real time ke dalam layar LCD I2C 20x4.
    
    Yang membuat sistem ini otonom adalah blok logikanya. Saat program C++ Arduino mendeteksi nilai kelembapan atau suhu menembus pelambung batas (humidity < 50 atau temperature < 28), modul Relay pendamping akan otomatis tersulut dan mengatifkan instrumen penstabil udara secara mandiri!`,
    collages: ["/wiring.jpg", "/umkmmebel.jpeg"],
    features: [
      "Pembaca suhu dan kelembapan ruangan tanpa sela",
      "Dasbor fisik LCD I2C",
      "Pembangkit mekanis relay otomatis dari ambang toleransi mikrokontroler"
    ]
  },
  {
    id: 2,
    title: "SPADA UPNYK Mobile App",
    desc: "Aplikasi mobile unofficial berbasis WebView pintar untuk mengakses SPADA UPN Veteran Yogyakarta secara lebih cepat, modern, dan responsif.",
    tags: ["Capacitor", "Vite", "JavaScript", "Mobile"],
    img: "/spadaapp1.jpeg",
    github: "https://github.com/Dhani2612/spadaupn-app",
    demo: "#",
    longDesc: `Aplikasi mobile unofficial yang dibangun dengan framework Capacitor, Vite, dan murni HTML/CSS/Vanilla JS untuk mengakses platform SPADA UPN "Veteran" Yogyakarta secara lebih cepat dan modern dibanding akses browser biasa.

Aplikasi ini menghadirkan Dashboard dan Statistik Terpusat yang menampilkan ringkasan SKS, jumlah mata kuliah, serta tugas aktif dalam satu layar. Dilengkapi fitur Auto-Login sehingga pengguna cukup login sekali dan bisa mengakses berulang kali tanpa memasukkan kredensial Moodle lagi.

Fitur Smart Assignment mengurutkan tugas otomatis berdasarkan deadline terdekat dan mendukung pengumpulan tugas langsung dari dalam aplikasi. Sistem Absensi Sekali Klik memungkinkan mahasiswa melihat seluruh jadwal absensi satu semester dan melakukan absen langsung tanpa membuka browser. Tersedia juga Push Notifications yang memunculkan pengingat otomatis ketika deadline tugas kurang dari 24 jam atau sesi absen sedang dibuka.`,
    collages: ["/spadaapp1.jpeg", "/spadaapp2.jpeg", "/spadaapp3.jpeg", "/spadaapp4.jpeg", "/spadaapp5.jpeg"],
    features: [
      "Dashboard ringkasan SKS, mata kuliah, dan tugas aktif",
      "Auto-Login dan manajemen sesi cepat",
      "Smart Assignment dengan sorting deadline otomatis",
      "Sistem absensi sekali klik langsung dari aplikasi",
      "Push Notifications pengingat deadline dan kehadiran",
      "Desain UI gelap modern bertema kosmik/astronomi"
    ]
  },
  {
    id: 3,
    title: "Kripto Sakti – Secure LMS",
    desc: "Purwarupa LMS berbasis web yang mengintegrasikan enkripsi AES-256, steganografi LSB, dan autentikasi scrypt untuk keamanan data akademik.",
    tags: ["Python", "Flask", "Cryptography", "MySQL"],
    img: "/kriptoapp0.png",
    github: "https://github.com/Dhani2612/LMS-kripto-projek",
    demo: "#",
    longDesc: `Kripto Sakti adalah purwarupa aplikasi berbasis web bertema Learning Management System (LMS) yang dirancang secara khusus untuk mendemonstrasikan integrasi berbagai algoritma keamanan siber dan kriptografi modern ke dalam alur kerja pendidikan digital sehari-hari, seperti pengelolaan tugas mahasiswa dan transkrip akademik.

Aplikasi ini tidak sekadar bertindak sebagai sarana unggah-unduh file biasa, melainkan menyuntikkan keamanan tingkat tinggi di balik layar. Saat mahasiswa mengunggah file tugas (PDF/DOCX), sistem mengenkripsinya menggunakan kombinasi AES-256 yang dimodifikasi dengan Caesar Cipher, sehingga dokumen asli tidak pernah disimpan secara utuh di server. Hanya dosen pembimbing yang berwenang yang dapat mendekripsinya kembali.

Untuk verifikasi transkrip, sistem menyisipkan watermark digital ke dalam gambar menggunakan teknik Steganografi LSB (Least Significant Bit), sehingga keaslian transkrip dapat diverifikasi tanpa merusak visual gambar secara kasat mata. Password dilindungi dengan hashing modern scrypt dari Werkzeug Security, dan endpoint vital dilindungi dengan Rate Limiting untuk mencegah serangan brute-force.`,
    collages: ["/kriptoapp0.png", "/kriptoapp1.png", "/kriptoapp2.png"],
    features: [
      "Hybrid Cryptography: enkripsi file tugas dengan AES-256 + Caesar Cipher",
      "Steganografi LSB untuk watermark digital pada transkrip nilai",
      "Autentikasi aman dengan hashing scrypt dan fallback MD5",
      "Anti brute-force melalui Rate Limiting pada login dan registrasi",
      "HTTPS development dengan sertifikat self-signed (mkcert)",
      "Antarmuka responsif bertema Professional LMS White & Modern Blue"
    ]
  },
  {
    id: 4,
    title: "Catatan Keuangan Mobile",
    desc: "Aplikasi mobile pencatatan arus kas yang dibangun dengan Flutter, menawarkan manajemen finansial terpusat dengan penyimpanan data lokal SQLite yang aman.",
    tags: ["Flutter", "Dart", "SQLite", "Mobile"],
    img: "/cash1.jpeg",
    github: "https://github.com/Dhani2612/catatan-keuangan.git",
    demo: "#",
    longDesc: `Proyek "Catatan Keuangan" adalah aplikasi mobile yang dikembangkan menggunakan framework Flutter untuk memfasilitasi manajemen arus kas pribadi secara praktis. Aplikasi ini dirancang agar pengguna dapat mencatat pemasukan dan pengeluaran harian dengan antarmuka yang intuitif dan berfokus pada kecepatan entri data.
    
Di balik layar, sistem ini memanfaatkan SQLite sebagai mesin basis data relasional lokal (offline-first). Pendekatan arsitektur ini menjamin bahwa seluruh data riwayat finansial pengguna tersimpan secara aman langsung di dalam ruang penyimpanan perangkat (device storage). Hal ini memungkinkan aplikasi beroperasi dengan performa penuh tanpa memerlukan sinkronisasi ke server eksternal, sehingga menjamin privasi absolut dan aksesibilitas tanpa konektivitas internet.
    
Struktur aplikasi ini dipecah menjadi beberapa modul fungsional: Dasbor (Home Page) untuk visibilitas saldo instan, Form Transaksi (Transaction Page) untuk pencatatan debit/kredit, Log Riwayat (History Page) untuk penelusuran transaksi masa lalu, dan Dasbor Laporan (Report Page) yang menyajikan rekapitulasi analitik dari pola pengeluaran.`,
    collages: ["/cash1.jpeg", "/cash2.jpeg", "/cash3.jpeg"],
    features: [
      "Pengembangan lintas platform (Cross-platform) menggunakan framework Flutter & Dart",
      "Arsitektur offline-first dan manajemen basis data lokal dengan SQLite",
      "Modul antarmuka untuk pencatatan entri pemasukan dan pengeluaran yang terstruktur (Transaction Page)",
      "Sistem pelaporan analitik (Report Page) untuk memantau kesehatan finansial",
      "Audit riwayat transaksi secara menyeluruh dan berurut (History Page)"
    ]
  },
  {
    id: 5,
    title: "PupukKu – Integrated Distribution Web App",
    desc: "Sistem manajemen web terpadu dengan arsitektur multi-peran untuk melacak distribusi, alokasi kuota, dan pendataan pelanggan pupuk secara real-time.",
    tags: ["Next.js", "TypeScript", "Prisma", "Supabase", "Tailwind"],
    img: "/pupuk1.png",
    github: "https://github.com/Dhani2612/rpl_pupukku",
    demo: "#",
    longDesc: `Proyek "PupukKu" adalah sebuah platform web full-stack yang dirancang untuk mendigitalisasi, memantau, dan mengelola rantai pasok distribusi pupuk komersial. Dibangun dengan standar arsitektur web modern menggunakan kerangka kerja Next.js (App Router) dan TypeScript, sistem ini memastikan performa tinggi dan keamanan tipe data (type-safety) dari ujung ke ujung (end-to-end).
    
Sistem ini memisahkan logika bisnis ke dalam dua portal antarmuka otorisasi utama: Dasbor Administrator untuk manajemen operasional (meliputi pengelolaan data pelanggan, penetapan kuota/jatah pupuk, dan pencatatan distribusi aktual) serta Dasbor Customer yang memungkinkan pelanggan melacak profil dan hak alokasi mereka sendiri.
    
Di sisi kapabilitas backend, aplikasi ini meninggalkan pendekatan konvensional dengan mengimplementasikan Prisma ORM untuk menjembatani interaksi basis data secara elegan, dipadukan dengan keandalan Supabase (PostgreSQL) sebagai solusi penyimpanan data utama. Antarmuka pengguna (UI) dirancang menggunakan Tailwind CSS dan komponen berbasis shadcn/ui, menghadirkan pengalaman visual yang bersih, profesional, dan sepenuhnya responsif.`,
    collages: [
      "/pupuk1.png", "/pupuk2.png", "/pupuk3.png", "/pupuk4.png", "/pupuk5.png"
    ],
    features: [
      "Portal otorisasi multi-peran (Admin & Customer) dengan proteksi rute API",
      "Arsitektur Full-Stack modern dengan Next.js App Router dan Server Components",
      "Manajemen basis data relasional yang type-safe menggunakan Prisma ORM dan Supabase",
      "Dasbor operasional terpusat untuk CRUD data pelanggan, distributor, dan riwayat distribusi",
      "Modul spesifik untuk penetapan dan pelacakan 'Jatah Pupuk' (kuota individu)",
      "Antarmuka responsif dan teraksesibilitas baik menggunakan Tailwind CSS"
    ]
  }
];
