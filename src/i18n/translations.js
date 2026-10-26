// Bilingual content dictionaries — English (default) and Khmer.
// Khmer translations favor natural phrasing; technical terms and proper
// names stay recognizable in Latin script.
export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      skipToContent: "Skip to content",
    },
    hero: {
      availability: "Available for internships, part-time & freelance work",
      name: "Kang Sivmey",
      role: "Computer Science Student | Aspiring Developer",
      headlineA: "Building digital experiences",
      headlineB: "with code, creativity, and AI.",
      intro:
        "I'm a frontend developer in the making — crafting interfaces with React, solving problems with Python, and exploring how AI can help people in everyday life.",
      explore: "Explore My Work",
      contactMe: "Contact Me",
    },
    about: {
      label: "About Me",
      title: "Curious mind, practical hands.",
      p1: "I'm a Year 3 Computer Science student based in Phnom Penh, passionate about building useful digital products and growing through real projects.",
      p2:
        "I enjoy turning ideas into clean, usable interfaces — from designing in Figma to building with React — and I'm continuously learning how AI can support better problem solving.",
      highlightsTitle: "What I focus on",
      highlights: [
        "Frontend development with React.js",
        "Python for problem solving",
        "AI understanding & practical use",
        "UX/UI design with Figma",
        "Continuous learning & teamwork",
      ],
      photoCaption: "A photo of me will live here soon.",
    },
    experience: {
      label: "Experience",
      title: "Where I've been learning.",
      items: [
        {
          role: "Data Labeler",
          org: "Digital Divide Data (DDD)",
          client: "Client project: MSL Cruise",
          period: "Oct 2025 – Present",
          location: "Phnom Penh, Cambodia",
          description:
            "Structured data-labeling work following project guidelines, with a focus on accuracy, consistency, and attention to detail.",
          current: "Current",
        },
        {
          role: "Video Editor",
          org: "Wedu",
          client: "",
          period: "May 2025 · 3-month role",
          location: "",
          description:
            "Video editing and content preparation, building creative skills and visual communication.",
          current: "",
        },
        {
          role: "Marketing Volunteer",
          org: "Western University",
          client: "",
          period: "August 2025",
          location: "",
          description:
            "Supported marketing-related activities while developing communication and teamwork skills.",
          current: "",
        },
      ],
    },
    projects: {
      label: "Projects",
      title: "Things I'm building & designing.",
      viewLabel: "VIEW PROJECT",
      statusLabel: "Status",
      myRoleLabel: "My role",
      objectiveLabel: "Objective",
      skillsLabel: "Skills involved",
      items: [
        {
          name: "Medical Advisor",
          number: "01",
          role: "AI Problem & Support — Team Project",
          status: "Concept / in progress",
          objective:
            "A health-information support website concept designed to help people access useful health information and explore their questions about health.",
          skills: [
            "Framing AI problems",
            "Research & information support",
            "Team collaboration",
          ],
          tags: ["React.js", "Python", "AI", "Teamwork"],
          disclaimer:
            "An informational concept — it does not diagnose diseases or provide clinically validated recommendations.",
          cta: "Demo link coming soon",
        },
        {
          name: "AUREN",
          number: "02",
          role: "UX/UI Designer — Figma",
          status: "Prototype in progress",
          objective:
            "A luxury streetwear e-commerce website prototype with a clean, dark visual identity.",
          skills: [
            "Black / white / gray design system",
            "Homepage & product presentation",
            "E-commerce user journey",
            "Login & registration design",
            "Clickable prototype planned",
          ],
          tags: ["Figma", "UX/UI", "E-commerce", "Design Systems"],
          disclaimer: "",
          cta: "Screenshots coming soon",
        },
      ],
    },
    skills: {
      label: "Skills",
      title: "Tools I use to build & learn.",
      groups: [
        {
          title: "Development",
          skills: ["React.js", "Frontend Development", "Python"],
        },
        { title: "Design", skills: ["Figma", "UX/UI Design"] },
        {
          title: "AI & Data",
          skills: ["AI Understanding", "Problem Solving", "Data Labeling"],
        },
        {
          title: "Media & Communication",
          skills: ["Video Editing", "Marketing Support"],
        },
      ],
    },
    how: {
      label: "How I Work",
      title: "A simple way of getting things done.",
      principles: [
        {
          title: "Understand the problem",
          text: "Ask questions first, so the solution fits the real need.",
        },
        {
          title: "Plan the experience",
          text: "Sketch the user journey before writing any code.",
        },
        {
          title: "Build & test iteratively",
          text: "Small steps, early feedback, steady progress.",
        },
        {
          title: "Learn & improve",
          text: "Review, reflect, and get a little better each time.",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Let's build something together.",
      text: "Whether it's an internship, a freelance project, or just a hello — my inbox is open.",
      info: {
        email: "Email",
        phone: "Phone",
        location: "Location",
        github: "GitHub",
      },
      locationValue: "Phnom Penh, Cambodia",
      form: {
        name: "Your name",
        email: "Email address",
        subject: "Subject",
        message: "Message",
        send: "Open Email Draft",
        success:
          "Your draft is ready — your email app should open. If not, use the address on the left.",
        errors: {
          name: "Please enter your name.",
          email: "Please enter a valid email address.",
          subject: "Please enter a subject.",
          message: "Please enter a message (at least 10 characters).",
        },
      },
    },
    footer: {
      tagline: "Designed & built by Kang Sivmey.",
      rights: "© 2026 Kang Sivmey. All rights reserved.",
      backToTop: "Back to top",
    },
  },

  kh: {
    nav: {
      home: "ទំព័រដើម",
      about: "អំពីខ្ញុំ",
      experience: "បទពិសោធន៍",
      projects: "គំរោង",
      skills: "ជំនាញ",
      contact: "ទំនាក់ទំនង",
      openMenu: "បើកម៉ឺនុយ",
      closeMenu: "បិទម៉ឺនុយ",
      skipToContent: "ទៅកាន់ខ្លឹមសារ",
    },
    hero: {
      availability: "ព្រមទទួលសិក្ខាសាលាការងារ (Internship) ការងារពេលខ្លះ និង Freelance",
      name: "Kang Sivmey",
      role: "និស្សិតវិទ្យាសាស្ត្រកុំព្យូទ័រ | អ្នកអភិវឌ្ឍន៍នាពេលខាងមុខ",
      headlineA: "បង្កើតបទពិសោធន៍ឌីជីថល",
      headlineB: "ជាមួយកូដ ភាពច្នៃប្រឌិត និង AI។",
      intro:
        "ខ្ញុំជាអ្នកអភិវឌ្ឍន៍ផ្នែក Frontend ដែលកំពុងរៀនសូត្រ — បង្កើតចំណុចប្រទាក់ដោយ React ដោះស្រាយបញ្ហាដោយ Python និងស្វែងរកពីរបៀបដែល AI អាចជួយមនុស្សក្នុងជីវិតប្រចាំថ្ងៃ។",
      explore: "មើលការងាររបស់ខ្ញុំ",
      contactMe: "ទំនាក់ទំនងមកខ្ញុំ",
    },
    about: {
      label: "អំពីខ្ញុំ",
      title: "ចិត្តចង់ដឹង អនុវត្តជាក់ស្តែង។",
      p1: "ខ្ញុំជានិស្សិតឆ្នាំទី៣ ផ្នែកវិទ្យាសាស្ត្រកុំព្យូទ័រ នៅរាជធានីភ្នំពេញ ដែលមានចំណាប់អារម្មណ៍លើការបង្កើតផលិតផលឌីជីថលដែលមានប្រយោជន៍ និងរីកចម្រើនតាមរយៈគំរោងពិតប្រាកដ។",
      p2:
        "ខ្ញុំចូលចិត្តបំលែងគំនិតទៅជាចំណុចប្រទាក់ស្អាតៗ និងងាយស្រួលប្រើ — ពីការរចនានៅក្នុង Figma ដល់ការសាងសង់ដោយ React — ហើយខ្ញុំកំពុងរៀនសូត្របន្ថែមពីរបៀបដែល AI អាចជួយដោះស្រាយបញ្ហាបានកាន់តែល្អ។",
      highlightsTitle: "អ្វីដែលខ្ញុំផ្តោត",
      highlights: [
        "ការអភិវឌ្ឍន៍ Frontend ជាមួយ React.js",
        "Python សម្រាប់ដោះស្រាយបញ្ហា",
        "ការយល់ដឹង និងអនុវត្ត AI",
        "ការរចនា UX/UI ជាមួយ Figma",
        "ការរៀនសូត្រ និងធ្វើការជាក្រុមជាប្រចាំ",
      ],
      photoCaption: "រូបភាពរបស់ខ្ញុំនឹងត្រូវដាក់នៅទីនេះឆាប់ៗ។",
    },
    experience: {
      label: "បទពិសោធន៍",
      title: "កន្លែងដែលខ្ញុំបានរៀនសូត្រ។",
      items: [
        {
          role: "អ្នកដាក់ស្លាកទិន្នន័យ (Data Labeler)",
          org: "Digital Divide Data (DDD)",
          client: "គំរោងសម្រាប់ក្រុមហ៊ុនកុងតាក់៖ MSL Cruise",
          period: "តុលា ២០២៥ – បច្ចុប្បន្ន",
          location: "ភ្នំពេញ កម្ពុជា",
          description:
            "ធ្វើកិច្ចការដាក់ស្លាកទិន្នន័យតាមទម្រង់កំណត់ អនុវត្តតាមគោលការណ៍ណែននាំរបស់គំរោង ដោយផ្តោតលើភាពត្រឹមត្រូវ ភាពស្ថិតស្ថេរ និងការយកចិត្តទុកដាក់លើព័ត៌មានលម្អិត។",
          current: "បច្ចុប្បន្ន",
        },
        {
          role: "អ្នកកែសម្រួលវីដេអូ",
          org: "Wedu",
          client: "",
          period: "ឧសភា ២០២៥ · រយៈពេល ៣ ខែ",
          location: "",
          description:
            "កែសម្រួលវីដេអូ និងរៀបចំខ្លឹមសារមាតិកា ដើម្បីពង្រឹងជំនាញច្នៃប្រឌិត និងការទំនាក់ទំនងតាមរូបភាព។",
          current: "",
        },
        {
          role: "ស្ម័គ្រចិត្តផ្នែកទីផ្សារ",
          org: "Western University",
          client: "",
          period: "សីហា ២០២៥",
          location: "",
          description:
            "ចូលរួមគាំទ្រសកម្មភាពទីផ្សារ ខណៈពេលពង្រីកជំនាញទំនាក់ទំនង និងការធ្វើការជាក្រុម។",
          current: "",
        },
      ],
    },
    projects: {
      label: "គំរោង",
      title: "អ្វីដែលខ្ញុំកំពុងសាងសង់ និងរចនា។",
      viewLabel: "មើលគំរោង",
      statusLabel: "ស្ថានភាព",
      myRoleLabel: "តួនាទីរបស់ខ្ញុំ",
      objectiveLabel: "គោលបំណង",
      skillsLabel: "ជំនាញពាក់ព័ន្ធ",
      items: [
        {
          name: "Medical Advisor",
          number: "01",
          role: "AI ដោះស្រាយបញ្ហា និងជំនួយ — គំរោងក្រុម",
          status: "គំនិត / កំពុងដំណើរការ",
          objective:
            "គំនិតគេហទំព័រជំនួយព័ត៌មានសុខភាព ដែលត្រូវបានរចនាឡើងដើម្បីជួយឱ្យមនុស្សទទួលបានព័ត៌មានសុខភាពមានប្រយោជន៍ និងស្វែងរកចម្លើយស្តីពីបញ្ហាសុខភាព។",
          skills: [
            "ការកំណត់បញ្ហា AI",
            "ការស្រាវជ្រាវ និងជំនួយព័ត៌មាន",
            "ការសហការក្នុងក្រុម",
          ],
          tags: ["React.js", "Python", "AI", "Teamwork"],
          disclaimer:
            "ជាគំនិតផ្តល់ព័ត៌មានប៉ុណ្ណោះ — មិនធ្វើរោគវិនិច្ឆ័យជំងឺ ឬផ្តល់អនុសាសន៍ដែលបានផ្ទៀងផ្ទាត់ផ្នែកវេជ្ជសាស្ត្រឡើយ។",
          cta: "លិង្ខបង្ហាញនឹងមកដល់ឆាប់ៗ",
        },
        {
          name: "AUREN",
          number: "02",
          role: "អ្នករចនា UX/UI — Figma",
          status: "គំរូកំពុងដំណើរការ",
          objective:
            "គំរូគេហទំព័រលក់សម្លៀកបំពាក់ Streetwear បែបប្រណិត ដែលមានអត្តសញ្ញាណខ្មៅ ស និងប្រផេះ ស្អាតៗ។",
          skills: [
            "ប្រព័ន្ធរចនាខ្មៅ / ស / ប្រផេះ",
            "ទំព័រដើម និងការបង្ហាញផលិតផល",
            "ដំណើរការអ្នកប្រើប្រាស់ E-commerce",
            "ការរចនាចូលប្រើ និងចុះឈ្មោះ",
            "គំរូចុចបានគ្រោងទុក",
          ],
          tags: ["Figma", "UX/UI", "E-commerce", "Design Systems"],
          disclaimer: "",
          cta: "រូបភាពនឹងមកដល់ឆាប់ៗ",
        },
      ],
    },
    skills: {
      label: "ជំនាញ",
      title: "ឧបករណ៍ដែលខ្ញុំប្រើដើម្បីសាងសង់ និងរៀនសូត្រ។",
      groups: [
        {
          title: "ការអភិវឌ្ឍន៍",
          skills: ["React.js", "ការអភិវឌ្ឍន៍ Frontend", "Python"],
        },
        { title: "ការរចនា", skills: ["Figma", "ការរចនា UX/UI"] },
        {
          title: "AI និងទិន្នន័យ",
          skills: ["ការយល់ដឹងអំពី AI", "ដោះស្រាយបញ្ហា", "ដាក់ស្លាកទិន្នន័យ"],
        },
        {
          title: "មេឌៀ និងទំនាក់ទំនង",
          skills: ["ការកែសម្រួលវីដេអូ", "គាំទ្រទីផ្សារ"],
        },
      ],
    },
    how: {
      label: "របៀបធ្វើការរបស់ខ្ញុំ",
      title: "វិធីសាស្ត្រសាមញ្ញមួយក្នុងការបញ្ចប់កិច្ចការ។",
      principles: [
        {
          title: "យោគយល់ពីបញ្ហា",
          text: "សួរសំណួរជាមុនសិន ដូច្នេះដំណោះស្រាយត្រូវនឹងតម្រូវការពិត។",
        },
        {
          title: "រៀបចំបទពិសោធន៍អ្នកប្រើ",
          text: "គូររូបភាពដំណើររបស់អ្នកប្រើមុនពេលចាប់សរសេរកូដ។",
        },
        {
          title: "សាងសង់ និងសាកល្បងជាដំណាក់",
          text: "ជំហានតូចៗ មតិយោបល់ឆាប់ៗ និងវឌ្ឍនភាពស្ថិតស្ថេរ។",
        },
        {
          title: "រៀនសូត្រ និងកែលម្អ",
          text: "ពិនិត្យឡើងវិញ ស្រាវជ្រាវ និងធ្វើឱ្យប្រសើរឡើងបន្តិចរាល់ដង។",
        },
      ],
    },
    contact: {
      label: "ទំនាក់ទំនង",
      title: "តោះ មកសាងសង់អ្វីមួយរួមគ្នា។",
      text: "ទោះជាសិក្ខាសាលាការងារ គំរោង Freelance ឬគ្រាន់តែជំរាបសួរក៏ដោយ — អ៊ីមែលរបស់ខ្ញុំបើកជានិច្ច។",
      info: {
        email: "អ៊ីមែល",
        phone: "ទូរស័ព្ទ",
        location: "ទីតាំង",
        github: "GitHub",
      },
      locationValue: "ភ្នំពេញ កម្ពុជា",
      form: {
        name: "ឈ្មោះរបស់អ្នក",
        email: "អាសយដ្ឋានអ៊ីមែល",
        subject: "ប្រធានបទ",
        message: "សារ",
        send: "បើកព្រាងអ៊ីមែល",
        success:
          "ព្រាងសាររបស់អ្នករួចរាល់ហើយ — កម្មវិធីអ៊ីមែលរបស់អ្នកគួរតែបើក។ ប្រសិនបើមិនបើក សូមប្រើអាសយដ្ឋាននៅខាងឆ្វេង។",
        errors: {
          name: "សូមបញ្ចូលឈ្មោះរបស់អ្នក។",
          email: "សូមបញ្ចូលអាសយដ្ឋានអ៊ីមែលត្រឹមត្រូវ។",
          subject: "សូមបញ្ចូលប្រធានបទ។",
          message: "សូមបញ្ចូលសារ (យ៉ាងតិច ១០ តួអក្សរ)។",
        },
      },
    },
    footer: {
      tagline: "រចនា និងសាងសង់ដោយ Kang Sivmey។",
      rights: "© ២០២៦ Kang Sivmey។ រក្សាសិទ្ធិគ្រប់បែបប្រការ។",
      backToTop: "ត្រឡប់ទៅខាងលើ",
    },
  },
};
