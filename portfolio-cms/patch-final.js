import {getCliClient} from 'sanity/cli'

const client = getCliClient()

const patches = [
  // PROJECTS
  {
    id: "0Kx6dhY4cG5xUskekUoC19",
    set: {
      title_en: "DHT22 Relay LCD – IoT Monitoring",
      desc_en: "Smart IoT system utilizing an Arduino microcontroller, integrated sensor modules, and a relay actuator to manage MSME indoor climate.",
      longDesc_en: "I created this IoT (Internet of Things) project as a pragmatic implementation for the Computers and Society course. The vision is to solve field constraints existing in local environments such as MSME artisans (furniture production) where incorrect air humidity can quickly ruin sensitive wood materials.\n    \n    Equipped with DHT22 sensor hardware to measure Temperature and Humidity metrics in the room, the raw data will be displayed in real-time on a 20x4 I2C LCD screen.\n    \n    What makes this system autonomous is its logic block. When the Arduino C++ program detects humidity or temperature values breaching the threshold limits (humidity < 50 or temperature < 28), the accompanying Relay module will automatically trigger and independently activate the air stabilizer instrument!",
      features_en: [
        "Continuous room temperature and humidity reader",
        "Physical I2C LCD dashboard",
        "Automatic relay mechanical generator from microcontroller tolerance thresholds"
      ]
    }
  },
  {
    id: "GNi82xCo1eRS3egKAinoVK",
    set: {
      title_en: "Kripto Sakti – Secure LMS",
      desc_en: "Web-based LMS prototype integrating AES-256 encryption, LSB steganography, and scrypt authentication for academic data security.",
      longDesc_en: "Kripto Sakti is a web-based prototype application themed as a Learning Management System (LMS) specifically designed to demonstrate the integration of various modern cybersecurity and cryptographic algorithms into daily digital education workflows, such as managing student assignments and academic transcripts.\n\nThis application does not merely act as a regular file upload/download tool, but injects high-level security behind the scenes. When a student uploads an assignment file (PDF/DOCX), the system encrypts it using a combination of AES-256 modified with Caesar Cipher, ensuring the original document is never stored entirely on the server. Only authorized supervising lecturers can decrypt it back.\n\nFor transcript verification, the system inserts a digital watermark into the image using the LSB (Least Significant Bit) Steganography technique, so the authenticity of the transcript can be verified without visually destroying the image. Passwords are protected with modern scrypt hashing from Werkzeug Security, and vital endpoints are protected with Rate Limiting to prevent brute-force attacks.",
      features_en: [
        "Hybrid Cryptography: task file encryption with AES-256 + Caesar Cipher",
        "LSB Steganography for digital watermarks on grade transcripts",
        "Secure authentication with scrypt hashing and MD5 fallback",
        "Anti brute-force through Rate Limiting on login and registration",
        "HTTPS development with self-signed certificate (mkcert)",
        "Responsive interface with Professional LMS White & Modern Blue theme"
      ]
    }
  },
  // EXPERIENCES
  {
    id: "0Kx6dhY4cG5xUskekUpZwu",
    set: {
      role_en: "General Coordinator",
      company_en: "PKKBN IF UPN \"Veteran\" Yogyakarta",
      period_en: "Apr 2025 - Aug 2025",
      desc_en: [
        "Coordinated more than 100 committee members from various divisions.",
        "Led the planning through implementation stages of the Informatics PKKBN 2025 event."
      ]
    }
  },
  {
    id: "0Kx6dhY4cG5xUskekUpaVn",
    set: {
      role_en: "Supporting Field Coordinator",
      company_en: "PKKBN IF UPN \"Veteran\" Yogyakarta",
      period_en: "May 2024 - Aug 2024",
      desc_en: [
        "Responsible for field management and logistics at the PKKBN event.",
        "Coordinated 100+ committee members on D-Day and simultaneously served as the main event MC."
      ]
    }
  },
  {
    id: "GNi82xCo1eRS3egKAipGeR",
    set: {
      role_en: "Project-Based Internship: Data Scientist",
      company_en: "Rakamin Academy X ID/X Partners",
      period_en: "January 2025",
      desc_en: [
        "Used Python and SQL to process data and develop predictive models.",
        "Conducted Exploratory Data Analysis (EDA) on industry case studies to generate actionable insights.",
        "Summarized analysis results into interactive data visualizations."
      ]
    }
  },
  {
    id: "GNi82xCo1eRS3egKAipH2g",
    set: {
      role_en: "Student Coordinator of KKN UPNVY Group 84.065",
      company_en: "LPPM UPN \"Veteran\" Yogyakarta",
      period_en: "July 2026",
      desc_en: [
        "Led a team of students from various study programs in the implementation of the Student Study Service (KKN).",
        "Acted as a liaison between the village authorities, supervising lecturers, and team members.",
        "Supervised the execution of 3 main community empowerment work programs to ensure completion according to field operational targets."
      ]
    }
  },
  {
    id: "GNi82xCo1eRS3egKAipHjm",
    set: {
      role_en: "Acting Minister of Campus Issue Analysis",
      company_en: "BEM KM UPN \"Veteran\" Yogyakarta",
      period_en: "Oct 2024 - Dec 2024",
      desc_en: [
        "Entrusted to take over full temporary leadership of the ministry.",
        "Directly led the team in analyzing crucial campus issues and formulating relevant advocacy steps."
      ]
    }
  },
  {
    id: "GNi82xCo1eRS3egKAipIQs",
    set: {
      role_en: "Staff of Ministry of Campus Issue Analysis",
      company_en: "BEM KM UPN \"Veteran\" Yogyakarta",
      period_en: "Feb 2024 - Oct 2024",
      desc_en: [
        "Directly involved in collecting research data from 1,000+ students.",
        "Contributed to the preparation of 8+ analysis reports used as the basis for campus facility improvements."
      ]
    }
  },
  // CERTIFICATES
  {
    id: "0Kx6dhY4cG5xUskekUpYiU",
    set: {
      title_en: "Ministry Staff",
      org_en: "BEM KM UPN Veteran Yogyakarta"
    }
  },
  {
    id: "0Kx6dhY4cG5xUskekUpZJ2",
    set: {
      title_en: "Supporting Field Commander",
      org_en: "PKKBN IF UPN Veteran Yogyakarta"
    }
  },
  {
    id: "GNi82xCo1eRS3egKAipDOQ",
    set: {
      title_en: "Basic Web Programming",
      org_en: "Dicoding"
    }
  },
  {
    id: "GNi82xCo1eRS3egKAipDZC",
    set: {
      title_en: "Basic JavaScript Programming",
      org_en: "Dicoding"
    }
  },
  {
    id: "GNi82xCo1eRS3egKAipE8D",
    set: {
      title_en: "Content Creator Course",
      org_en: "Eduparx"
    }
  },
  {
    id: "GNi82xCo1eRS3egKAipEIz",
    set: {
      title_en: "Acting Minister",
      org_en: "BEM KM UPN Veteran Yogyakarta"
    }
  },
  {
    id: "GNi82xCo1eRS3egKAipEZ9",
    set: {
      title_en: "Staff of The Month",
      org_en: "BEM KM UPN Veteran Yogyakarta"
    }
  },
  {
    id: "GNi82xCo1eRS3egKAipF05",
    set: {
      title_en: "General Coordinator",
      org_en: "PKKBN IF UPN Veteran Yogyakarta"
    }
  },
  {
    id: "GNi82xCo1eRS3egKAipG02",
    set: {
      title_en: "Student Activity Speaker",
      org_en: "HMTM UPN Veteran Yogyakarta"
    }
  }
];

async function run() {
  console.log('Patching final missing documents...');
  for (const patch of patches) {
    try {
      await client.patch(patch.id).set(patch.set).commit();
      console.log(`Patched ${patch.id}`);
    } catch (err) {
      console.error(`Failed to patch ${patch.id}:`, err.message);
    }
  }
  console.log('Done!');
}

run();
