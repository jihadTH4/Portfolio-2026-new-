import { motion } from "motion/react";
import { ArrowUpRight, Eye, Code } from "lucide-react";
import { useLanguage, translations } from "../hooks/useLanguage";
import screenshot1 from "../assets/images/Screenshot 1.png";
import screenshot2 from "../assets/images/Screenshot 2.png";
import screenshot3 from "../assets/images/Screenshot 3.png";

const projects = (lang: 'en' | 'ar') => [
  {
    title: lang === 'ar' ? 'صفحة هبوط Blogr' : 'Blogr Landing Page',
    desc: lang === 'ar' ? 'صفحة هبوط سريعة الاستجابة لـ Blogr تم بناؤها باستخدام React و CSS بتصاميم مستقبلية.' : 'A responsive Blogr landing page built with React & CSS featuring futuristic layouts.',
    image: screenshot1,
    tags: ["REACT", "TAILWIND"],
    link: "https://blogr-landing-page-main-vercel-wzij.vercel.app/",
    github: "https://github.com/jihadTH4/blogr-landing-page-main/tree/master"
  },
  {
    title: lang === 'ar' ? 'صفحة هبوط Huddle' : 'Huddle Landing Page',
    desc: lang === 'ar' ? 'صفحة هبوط Huddle مع أقسام منحنية تم بناؤها باستخدام HTML و Sass/SCSS بجماليات نظيفة.' : 'Huddle landing page with curved sections built with HTML & Sass/SCSS with clean aesthetics.',
    image: screenshot2,
    tags: ["HTML", "SCSS"],
    link: "https://huddle-landing-page-jith.netlify.app/",
    github: "https://github.com/jihadTH4/Huddle-landing-page-with-curved-sections"
  },
  {
    title: lang === 'ar' ? 'الاشتراك في النشرة الإخبارية' : 'Newsletter Sign-up',
    desc: lang === 'ar' ? 'نموذج اشتراك تفاعلي في النشرة الإخبارية مع التحقق من صحة البيانات وحالة النجاح.' : 'Interactive Newsletter sign up form with validation and success state handling.',
    image: screenshot3,
    tags: ["JAVASCRIPT", "UI/UX"],
    link: "https://newsletter-sign-up-jth.netlify.app/",
    github: "https://github.com/jihadTH4/newsletter-sign-up-with-success-message-main"
  }
];

export function Projects() {
  const { lang, t } = useLanguage();
  const currentProjects = projects(lang);

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="work">
      <div className="flex justify-between items-end mb-16">
        <div>
          <span className="font-mono text-sm text-secondary-container tracking-[0.3em] uppercase mb-4">{t.portfolio.title}</span>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold">{t.portfolio.sub}</h2>
        </div>
        <a href="https://www.frontendmentor.io/profile/jihadTH4" className="hidden md:flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-sans font-medium">
          {t.portfolio.more} <ArrowUpRight className={`w-5 h-5 ${lang === 'ar' ? 'rotate-[-90deg]' : ''}`} />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProjects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: Math.min(index * 0.15, 0.5) }}
            className="group glass rounded-2xl overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-primary-container/10 transition-all duration-500 shimmer-mask"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={project.image}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a href={project.link} className="p-3 glass rounded-full hover:bg-primary-container text-white transition-colors">
                  <Eye className="w-5 h-5" />
                </a>
                <a href={project.github} className="p-3 glass rounded-full hover:bg-primary-container text-white transition-colors">
                  <Code className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="p-8">
              <h3 className="font-display text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-on-surface-variant font-sans mb-6 line-clamp-2">{project.desc}</p>
              <div className="flex gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 glass rounded-full font-mono text-[10px] text-secondary font-bold tracking-wider">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
