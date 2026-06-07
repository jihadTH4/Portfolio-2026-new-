import { useState, useEffect, createContext, useContext, ReactNode, createElement } from 'react';

export type Language = 'ar' | 'en';

export const translations = {
  en: {
    nav: {
      work: 'Work',
      skills: 'Skills',
      about: 'About',
      contact: 'Contact',
      cta: "Let's Talk"
    },
    hero: {
      firstName: 'JIHAD',
      lastName: 'THABIT',
      sub: 'Personal & Creative. Making any design real and responsive with 2026 digital craftsmanship.',
      cta: 'View My Work'
    },
    expertise: {
      title: 'Expertise',
      sub: 'Technical Stack',
      skills: {
        html: 'HTML5',
        css: 'CSS3',
        js: 'JAVASCRIPT',
        react: 'REACT',
        tailwind: 'TAILWIND',
        sass: 'SASS/SCSS'
      }
    },
    portfolio: {
      title: 'Portfolio',
      sub: 'Selected Projects',
      more: 'More Projects'
    },
    contact: {
      title: "Let's work together",
      sub: "Have a project in mind or just want to chat? Reach out and let's create something extraordinary together.",
      availability: 'AVAILABLE FOR FREELANCE &<br/>FULL-TIME OPPORTUNITIES'
    },
    footer: {
      rights: '© 2026 JIHAD THABIT. ENGINEERED WITH PRECISION.',
      socials: {
        instagram: 'Instagram',
        whatsapp: 'WhatsApp',
        github: 'GitHub'
      }
    }
  },
  ar: {
    nav: {
      work: 'أعمالي',
      skills: 'مهاراتي',
      about: 'عني',
      contact: 'تواصل معي',
      cta: 'لنحدث فرقاً'
    },
    hero: {
      firstName: 'جهاد',
      lastName: 'ثابت',
      sub: 'شخصي ومبدع. أجعل أي تصميم حقيقة واستجابة مع براعة رقمية لعام 2026.',
      cta: 'مشاهدة أعمالي'
    },
    expertise: {
      title: 'الخبرة',
      sub: 'مجموعتي التقنية',
      skills: {
        html: 'HTML5',
        css: 'CSS3',
        js: 'جافا سكريبت',
        react: 'رياكت',
        tailwind: 'تيلويند',
        sass: 'ساس'
      }
    },
    portfolio: {
      title: 'الأعمال',
      sub: 'مشاريع مختارة',
      more: 'مشاريع إضافية'
    },
    contact: {
      title: 'لنعمل معاً',
      sub: 'هل لديك مشروع في بالك أو تريد الدردشة فقط؟ تواصل معي ولنصنع شيئاً استثنائياً معاً.',
      availability: 'متاح للعمل الحر و<br/>فرص العمل الكاملة'
    },
    footer: {
      rights: '© 2026 جهاد ثابت. صُمم بدقة.',
      socials: {
        instagram: 'إنستغرام',
        whatsapp: 'واتساب',
        github: 'غيت هاب'
      }
    }
  }
};

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: typeof translations['en'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('lang');
      if (savedLang === 'en' || savedLang === 'ar') {
        return savedLang;
      }
    }
    return 'ar';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('lang', lang);
    root.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    localStorage.setItem('lang', lang);
  }, [lang]);

  const toggleLang = () => {
    setLang(prev => (prev === 'en' ? 'ar' : 'en'));
  };

  const value = {
    lang,
    toggleLang,
    t: translations[lang]
  };

  return createElement(LanguageContext.Provider, { value }, children);
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

