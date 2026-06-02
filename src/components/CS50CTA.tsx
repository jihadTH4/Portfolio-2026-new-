import { motion } from "motion/react";
import { Award, ExternalLink } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export function CS50CTA() {
  const { lang } = useLanguage();

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="certificates">
      <div className="flex flex-col items-center mb-16 text-center">
        <span className="font-mono text-sm text-secondary-container tracking-[0.3em] uppercase mb-4">{lang === 'ar' ? 'المؤهلات' : 'Certifications'}</span>
        <h2 className="font-display text-4xl md:text-6xl font-extrabold mb-6">{lang === 'ar' ? 'شهاداتي' : 'Education & Certificates'}</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass rounded-2xl md:rounded-3xl p-8 md:p-12 flex items-center justify-between gap-6 md:gap-8 relative overflow-hidden group hover:shadow-2xl hover:shadow-primary-container/20 transition-all duration-500"
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

        <div className="flex items-center gap-4 md:gap-6 z-10">
          <div className="p-3 md:p-4 glass rounded-full bg-primary-container/20">
            <Award className="w-6 h-6 md:w-8 md:h-8 text-primary-container" />
          </div>
          <div>
            <h3 className="font-display text-lg md:text-2xl font-bold mb-1">
              {lang === 'ar' ? 'شهادة CS50' : 'CS50 Certificate'}
            </h3>
            <p className="text-sm md:text-base text-on-surface-variant font-sans">
              {lang === 'ar'
                ? 'أكملت CS50x: مقدمة في علوم الحاسوب من جامعة هارفارد'
                : 'Completed CS50x: Introduction to Computer Science from Harvard'}
            </p>
          </div>
        </div>

        <motion.a
          href="https://cs50.harvard.edu/certificates/918f81d0-62dc-474e-8a3f-f8199098fb3f"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, x: lang === 'ar' ? -5 : 5 }}
          whileTap={{ scale: 0.95 }}
          className="shrink-0 p-3 md:p-4 glass rounded-full hover:bg-primary-container hover:text-on-primary-container transition-all duration-300 z-10"
          aria-label="View CS50 Certificate"
        >
          <ExternalLink className="w-5 h-5 md:w-6 md:h-6" />
        </motion.a>
      </motion.div>
    </section>
  );
}
