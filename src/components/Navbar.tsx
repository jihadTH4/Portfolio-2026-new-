import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Sun, Moon, Languages, Menu, X } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { useLanguage } from "../hooks/useLanguage";

export function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const navItems = [
    { key: 'work', label: t.nav.work },
    { key: 'skills', label: t.nav.skills },
    { key: 'contact', label: t.nav.contact }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 grid grid-cols-2 md:grid-cols-3 items-center px-6 md:px-12 py-4 transition-all duration-300 ${scrolled ? 'bg-background/90 backdrop-blur-3xl border-b border-white/10 py-3 shadow-xl shadow-black/20' : 'bg-transparent py-5'}`}>
        <a href="#hero" className="font-display text-2xl font-black tracking-tighter text-on-surface hover:opacity-85 transition-opacity justify-self-start z-50">
          {lang === 'ar' ? 'جهاد' : 'JIHAD'}
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 justify-self-center">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={`#${item.key}`}
              className="text-on-surface-variant hover:text-on-surface transition-colors font-sans text-sm font-medium tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Global Controls & CTA / Hamburger */}
        <div className="flex items-center gap-3 justify-self-end z-50">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleLang}
            className="p-2 glass rounded-full text-on-surface transition-colors flex items-center gap-1.5 px-3 cursor-pointer"
            aria-label="Toggle Language"
          >
            <Languages className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase">{lang === 'en' ? 'AR' : 'EN'}</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 glass rounded-full text-on-surface transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </motion.button>

          {/* Let's Talk CTA (Desktop Only) */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block bg-primary-container text-on-primary-container px-6 py-2 rounded-full font-sans text-sm font-bold shadow-lg shadow-primary-container/20 text-center"
          >
            {t.nav.cta}
          </motion.a>

          {/* Hamburger Icon for Mobile */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
            className="md:hidden p-2.5 glass rounded-full text-on-surface transition-colors cursor-pointer flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Menu Content Drawer (Slides out from start of viewport side) */}
            <motion.div
              initial={{ x: lang === 'ar' ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: lang === 'ar' ? "-100%" : "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className={`fixed top-0 ${lang === 'ar' ? 'left-0' : 'right-0'} w-[75%] max-w-[300px] h-screen bg-background/95 backdrop-blur-2xl border-${lang === 'ar' ? 'r' : 'l'} border-white/10 z-45 p-8 pt-28 flex flex-col justify-between md:hidden shadow-2xl`}
            >
              <div className="flex flex-col gap-6 mt-4">
                {navItems.map((item, index) => (
                  <motion.a
                    initial={{ opacity: 0, x: lang === 'ar' ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={item.key}
                    href={`#${item.key}`}
                    onClick={() => setIsOpen(false)}
                    className="text-on-surface-variant hover:text-on-surface transition-colors font-display text-2xl font-bold tracking-wide block"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-6"
              >
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-primary-container text-on-primary-container py-3.5 rounded-full font-sans text-sm font-extrabold shadow-lg shadow-primary-container/20 text-center block"
                >
                  {t.nav.cta}
                </a>

                <div className="text-center font-mono text-[10px] text-on-surface-variant/40 tracking-widest uppercase">
                  {lang === 'ar' ? '© ٢٠٢٦ جهاد ثابت' : '© 2026 JIHAD THABIT'}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
