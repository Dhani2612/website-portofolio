import {getCliClient} from 'sanity/cli'

const client = getCliClient()

const patches = [
  {
    id: "GNi82xCo1eRS3egKAio0Mf",
    set: {
      features_en: [
        "Full digitalization for official institution guestbook recording",
        "Structured data storage with automatic Timestamp",
        "Intuitive and responsive form filling interface",
        "Data recapitulation system to facilitate audit and reporting"
      ],
      longDesc_en: "I developed this Digital Guestbook System specifically during my tenure as Web & CMS Administrator at the Public Relations (Humas) Division of UPN \"Veteran\" Yogyakarta. This project was born from an initiative to digitalize the guest attendance recording process, which previously still relied on manual logbooks.\n\nThrough this web-based application, staff and guests can register their arrival faster and more structurally. The system automatically records identity, origin institution, purpose of visit, and accurate timestamps into a centralized database.\n\nBesides accelerating operational workflow at the receptionist desk, this digitalization greatly facilitates the Public Relations division in recapitulating reports, searching past guest archives, and analyzing visit data to support the improvement of the institution's public services."
    }
  },
  {
    id: "k5SsXVtg04B1Uu1lddZz0D",
    set: {
      features_en: [
        "Dashboard summarizing credits, courses, and active assignments",
        "Auto-Login and fast session management",
        "Smart Assignment with automatic deadline sorting",
        "One-click attendance system directly from the app",
        "Push Notifications for deadline and attendance reminders",
        "Modern dark UI design with cosmic/astronomy theme"
      ],
      longDesc_en: "An unofficial mobile application built with Capacitor, Vite, and pure HTML/CSS/Vanilla JS to access the SPADA platform of UPN \"Veteran\" Yogyakarta faster and more modernly compared to standard browser access.\n\nThis app presents a Centralized Dashboard and Statistics displaying a summary of credits, number of courses, and active assignments in one screen. Equipped with an Auto-Login feature so users only need to log in once and can access repeatedly without entering Moodle credentials again.\n\nThe Smart Assignment feature automatically sorts assignments based on the closest deadline and supports assignment submission directly from within the app. The One-Click Attendance system allows students to view their entire semester's attendance schedule and submit attendance directly without opening a browser. Push Notifications are also available, bringing up automatic reminders when an assignment deadline is under 24 hours or an attendance session is open."
    }
  },
  {
    id: "k5SsXVtg04B1Uu1ldda2YD",
    set: {
      features_en: [
        "Cross-platform development using Flutter & Dart framework",
        "Offline-first architecture and local database management with SQLite",
        "Interface module for structured income and expense entries (Transaction Page)",
        "Analytic reporting system (Report Page) to monitor financial health",
        "Comprehensive and sequential transaction history audit (History Page)"
      ],
      longDesc_en: "The \"Mobile Financial Notes\" project is a mobile application developed using the Flutter framework to facilitate practical personal cash flow management. The app is designed so users can record daily income and expenses with an intuitive interface focused on data entry speed.\n\nBehind the scenes, this system utilizes SQLite as a local relational database engine (offline-first). This architectural approach ensures that all user financial history data is securely stored directly within the device storage. This allows the app to operate at full performance without requiring external server synchronization, guaranteeing absolute privacy and accessibility without internet connectivity.\n\nThe application structure is broken down into several functional modules: Dashboard (Home Page) for instant balance visibility, Transaction Form (Transaction Page) for debit/credit recording, History Log (History Page) for past transaction tracing, and Report Dashboard (Report Page) presenting analytic recapitulation of spending patterns."
    }
  },
  {
    id: "k5SsXVtg04B1Uu1ldda5j9",
    set: {
      features_en: [
        "Multi-role authorization portal (Admin & Customer) with API route protection",
        "Modern Full-Stack architecture with Next.js App Router and Server Components",
        "Type-safe relational database management using Prisma ORM and Supabase",
        "Centralized operational dashboard for Customer, Distributor, and Distribution history CRUD",
        "Specific module for setting and tracking 'Fertilizer Quota' (individual allocation)",
        "Responsive interface with good accessibility using Tailwind CSS"
      ],
      longDesc_en: "The \"PupukKu\" project is a full-stack web platform designed to digitalize, monitor, and manage the commercial fertilizer distribution supply chain. Built with modern web architecture standards using Next.js (App Router) and TypeScript, this system ensures high performance and type-safety from end to end.\n\nThe system separates business logic into two main authorization interface portals: Administrator Dashboard for operational management (including customer data management, fertilizer quota allocation, and actual distribution recording) and Customer Dashboard allowing customers to track their own profiles and allocation rights.\n\nOn the backend capability side, this application leaves the conventional approach by implementing Prisma ORM to bridge database interactions elegantly, paired with the reliability of Supabase (PostgreSQL) as the primary data storage solution. The user interface (UI) is designed using Tailwind CSS and shadcn/ui based components, presenting a clean, professional, and fully responsive visual experience."
    }
  },
  {
    id: "k5SsXVtg04B1Uu1ldda60t",
    set: {
      features_en: [
        "Promotional catalog of local MSME highlights",
        "Village profile covering history, demographics, and organizational structure",
        "Archive gallery of UPNVY KKN work program documentation",
        "Highly responsive design optimized for mobile devices"
      ],
      longDesc_en: "I designed the \"Padukuhan Karang Village Portal\" project as a form of digitalization and community service during my Student Study Service (KKN) from UPN \"Veteran\" Yogyakarta. Its main objective is to bring local village potential to the internet realm to be more easily reached and known by the wider public.\n\nThrough this website platform, visitors can explore the regional profile, view a map catalog of local residents' featured MSMEs (such as handicrafts and local culinary), and browse documentation galleries of work programs we have carried out with the villagers.\n\nI developed this website entirely using the React and Vite ecosystem, combined with Tailwind CSS. This approach ensures a clean user interface, responsive across residents' smartphones, and has extremely agile page load performance."
    }
  }
];

async function run() {
  console.log('Patching project longDesc and features...');
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
