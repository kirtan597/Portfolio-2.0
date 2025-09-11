const certificates = [
  {
    id: 6,
    title: {
      en: 'Introduction to Advanced Generative AI Tools',
      ta: 'மேம்பட்ட உருவாக்க AI கருவிகளுக்கான அறிமுகம்',
    },
    subTitle: {
      en: 'Click here to download certificate',
      ta: 'சான்றிதழைப் பார்க்க இங்கே கிளிக் செய்யவும்',
    },
    status: {
      en: 'Completed',
      ta: 'நிறைவு',
    },
    level: {
      en: '13th August 2025',
      ta: '13 ஆகஸ்ட் 2025',
    },
    link: '/certi/Introduction to advanced generation ai tools.jpg',
    description: {
      en: 'Certificate Code: 8767674 \n\nCredentials ID: 45789357 \n\nSkills Acquired: Advanced Generative AI Tools\n\n',
      ta: 'சான்றிதழ் குறியீடு: 8767674 \n\nஅங்கீகார ஐடி: 45789357 \n\nபெற்ற திறன்கள்: மேம்பட்ட உருவாக்க AI கருவிகள்\n\n',
    },
    logo: '/certi/ai_logo.jpeg',
  },
  {
    id: 5,
    title: {
      en: 'Introduction to Generative AI Studio',
      ta: 'உருவாக்க AI ஸ்டுடியோவுக்கான அறிமுகம்',
    },
    subTitle: {
      en: 'Click here to download certificate',
      ta: 'சான்றிதழைப் பார்க்க இங்கே கிளிக் செய்யவும்',
    },
    status: {
      en: 'Completed',
      ta: 'நிறைவு',
    },
    level: {
      en: '11th August 2025',
      ta: '11 ஆகஸ்ட் 2025',
    },
    link: '/certi/Introduction To generative ai studio.jpg',
    description: {
      en: 'Certificate Code: 8767538 \n\nCredentials ID: GENAI-2025-0098 \n\nSkills Acquired: Generative AI Studio Tools and Applications\n\n',
      ta: 'சான்றிதழ் குறியீடு: 8767538 \n\nஅங்கீகார ஐடி: GENAI-2025-0098 \n\nபெற்ற திறன்கள்: உருவாக்க AI ஸ்டுடியோ கருவிகள் மற்றும் பயன்பாடுகள்\n\n',
    },
    logo: '/certi/ai_logo.jpeg',
  },
  {
    id: 4,
    title: {
      en: 'Code Generation with Generative AI',
      ta: 'உருவாக்க AI உடன் குறியீடு உருவாக்கம்',
    },
    subTitle: {
      en: 'Click here to download certificate',
      ta: 'சான்றிதழைப் பார்க்க இங்கே கிளிக் செய்யவும்',
    },
    status: {
      en: 'Completed',
      ta: 'நிறைவு',
    },
    level: {
      en: '8th August 2025',
      ta: '8 ஆகஸ்ட் 2025',
    },
    link: '/certi/Code Generation with generative ai.jpg',
    description: {
      en: 'Certificate Code: 8755489 \n\nCredentials ID: CODEGEN-2025-0154 \n\nSkills Acquired: Generative AI for Code Automation and Development\n\n',
      ta: 'சான்றிதழ் குறியீடு: 8755489 \n\nஅங்கீகார ஐடி: CODEGEN-2025-0154 \n\nபெற்ற திறன்கள்: குறியீடு தானியங்கு மற்றும் மேம்பாட்டிற்கான உருவாக்க AI\n\n',
    },
    logo: '/certi/ai_logo.jpeg',
  },
  // {
  //   id: 5,
  //   title: {
  //     en: 'Google Data Analytics Specialization',
  //     ta: 'கூகுள் தரவுகள் பகுப்பாய்வு சிறப்பு',
  //   },
  //   subTitle: {
  //     en: 'Click here to see certificate',
  //     ta: 'சான்றிதழைப் பார்க்க இங்கே கிளிக் செய்யவும்',
  //   },
  //   status: {
  //     en: 'Completed',
  //     ta: 'நிறைவு',
  //   },
  //   level: {
  //     en: 'March 2024',
  //     ta: 'மார்ச் 2024',
  //   },
  //   link: 'https://www.coursera.org/account/accomplishments/specialization/CGZH32563NGH',
  //   description: {
  //     en: 'Credentials ID: CGZH32563NGH \n\nSkills Acquired: Data Analysis, Microsoft Excel, Python\n\n',
  //     ta: 'அங்கீகார ஐடி: CGZH32563NGH \n\nபெற்ற திறன்கள்: தரவுகள் பகுப்பாய்வு, மைக்ரோசாஃப்ட் எக்செல், Python\n\n',
  //   },
  //   logo: '/certi/coursera_logo.jpeg',
  // },
  // {
  //   id: 4,
  //   title: {
  //     en: 'Google IT Support',
  //     ta: 'கூகுள் ஐடி ஆதரவு',
  //   },
  //   subTitle: {
  //     en: 'Click here to see certificate',
  //     ta: 'சான்றிதழைப் பார்க்க இங்கே கிளிக் செய்யவும்',
  //   },
  //   status: {
  //     en: 'Completed',
  //     ta: 'நிறைவு',
  //   },
  //   level: {
  //     en: 'October 2023',
  //     ta: 'அக்டோபர் 2023',
  //   },
  //   link: 'https://www.coursera.org/account/accomplishments/professional-cert/7B6496VHSVNK?utm_source=mobile&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof',
  //   description: {
  //     en: 'Credentials ID: 7B6496VHSVNK \n\nSkills Acquired: IT Service Management, Computer Networking, System Administration, IT Management, IT Security, IT Support \n\n',
  //     ta: 'அங்கீகார ஐடி: 7B6496VHSVNK \n\nபெற்ற திறன்கள்: ஐடி சேவை மேலாண்மை, கணினி நெட்வொர்க்கிங், சிஸ்டம் நிர்வாகம், ஐடி மேலாண்மை, ஐடி பாதுகாப்பு, ஐடி ஆதரவு \n\n',
  //   },
  //   logo: '/certi/coursera_logo.jpeg',
  // },

];

export default certificates;