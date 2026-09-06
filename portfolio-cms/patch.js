import {getCliClient} from 'sanity/cli'

const client = getCliClient()

const patches = [
  {id: "k5SsXVtg04B1Uu1lddZz0D", set: {title_en: "SPADA UPNYK Mobile App", desc_en: "An unofficial smart WebView-based mobile application to access SPADA UPN Veteran Yogyakarta faster, more modernly, and responsively."}},
  {id: "k5SsXVtg04B1Uu1ldda2YD", set: {title_en: "Mobile Financial Notes", desc_en: "A cash flow recording mobile app built with Flutter, offering centralized financial management with secure local SQLite data storage."}},
  {id: "k5SsXVtg04B1Uu1ldda5j9", set: {title_en: "PupukKu – Integrated Distribution Web App", desc_en: "An integrated web management system with a multi-role architecture to track fertilizer distribution, quota allocation, and customer data collection in real-time."}},
  {id: "k5SsXVtg04B1Uu1ldda60t", set: {title_en: "Village Portal | Padukuhan Karang", desc_en: "The official information portal and digital profile for Padukuhan Karang, highlighting local MSME potential and KKN activity galleries."}},
  {id: "k5SsXVtg04B1Uu1lddaYO0", set: {title_en: "Virtual Internship: Data Scientist", org_en: "Rakamin x ID/X Partners"}},
  {id: "k5SsXVtg04B1Uu1lddaYlx", set: {title_en: "Vice Head of Advocacy Division", org_en: "BEM FTI UPN Veteran Yogyakarta"}},
  {id: "k5SsXVtg04B1Uu1lddaYwb", set: {title_en: "International Conference Participant", org_en: "International Conference"}},
  {id: "k5SsXVtg04B1Uu1lddaZDS", set: {role_en: "Web & CMS Administrator", company_en: "Public Relations Div. UPN \"Veteran\" Yogyakarta", period_en: "August 2026 - November 2026", desc_en: ["Manage and maintain the Public Relations web system of UPN \"Veteran\" Yogyakarta.","Responsible for the Content Management System (CMS) for official campus news publications.","Optimize website UI/UX periodically to be more responsive and accessible for the academic community."]}},
  {id: "k5SsXVtg04B1Uu1lddaZMK", set: {role_en: "TOP 800 Proposalist, Team Leader", company_en: "PIDI - DIGDAYA X Hackathon 2026 by Bank Indonesia", period_en: "April 2026", desc_en: ["Led the team in designing the \"NusaLink AI\" prototype, a remote-work platform for local IT talents.","Conceptualized architecture utilizing Local Language Models (LLM) for real-time translation.","Integrated Smart Contract concepts to streamline cross-border transaction costs."]}},
  {id: "k5SsXVtg04B1Uu1lddaZVC", set: {role_en: "Software Development Intern", company_en: "PT. Kereta Api Indonesia (KAI) Daop 6 Yogyakarta", period_en: "January 2026 - February 2026", desc_en: ["Collaborated with the IT team to develop a digital archive management website for the HR Unit.","Digitalized and validated 5,000+ employee contract documents into a centralized system.","Significantly accelerated the search process and employee data access."]}},
  {id: "k5SsXVtg04B1Uu1lddaZfq", set: {role_en: "Vice Head of Advocacy & Student Welfare", company_en: "BEM FTI UPN \"Veteran\" Yogyakarta", period_en: "Feb 2025 - Dec 2025", desc_en: ["Bridged student aspirations with the faculty through advocacy programs.","Actively handled and sought solutions for various student complaints regarding academic and non-academic issues."]}},
  {id: "k5SsXVtg04B1Uu1lddaa18", set: {title_en: "Bank Indonesia Scholarship Awardee", org_en: "Bank Indonesia", period_en: "2025", desc_en: "Selected as a Bank Indonesia scholarship recipient through a rigorous selection process based on academic track record, organizational activity, and leadership potential."}},
  {id: "k5SsXVtg04B1Uu1lddaa4g", set: {title_en: "Staff Of The Month", org_en: "BEM KM UPN \"Veteran\" Yogyakarta", period_en: "March - May 2024", desc_en: "Received an award for consistent performance and full responsibility in completing every ministry work program target, as well as the ability to foster good team collaboration."}}
];

async function run() {
  console.log('Patching documents...');
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
