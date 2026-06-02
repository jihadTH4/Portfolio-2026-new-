import { motion } from "motion/react";
import { ArrowRight, Code, MessageCircle, ShieldCheck } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import PersonalImage  from "../assets/images/Jihad Thabit.jpg";

export function Hero() {
  const { lang, t } = useLanguage();

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-4 md:px-12 pt-32 pb-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: lang === "ar" ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 z-10 text-center lg:text-start">
          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 leading-[0.9] tracking-tight font-extrabold">
            <span className="block italic text-on-surface/90 uppercase">
              {t.hero.firstName}
            </span>
            <span className="gradient-text uppercase">{t.hero.lastName}</span>
          </h1>
          <p className="font-display text-lg sm:text-xl md:text-2xl text-on-surface-variant mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {t.hero.sub}
          </p>
          <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#work"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-primary-container text-on-primary-container rounded-full font-sans font-bold flex items-center gap-2 overflow-hidden shadow-xl shadow-primary-container/25 shimmer-mask">
              <span className="text-sm sm:text-base">{t.hero.cta}</span>
              <ArrowRight
                className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform ${lang === "ar" ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`}
              />
            </motion.a>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, staggerChildren: 0.1 }}
              className="flex items-center gap-3 sm:gap-4 px-2 sm:px-4">
              {[
                { icon: Code, href: "https://github.com/jihadTH4" },
                { icon: MessageCircle, href: "https://wa.me/970595665806" },
                {
                  icon: ShieldCheck,
                  href: "https://www.frontendmentor.io/profile/jihadTH4",
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.6 + i * 0.1,
                    type: "spring",
                    stiffness: 200,
                  }}
                  href={item.href}
                  className="p-2 sm:p-3 glass rounded-full hover:text-primary transition-colors">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-112.5 aspect-square rounded-2xl overflow-hidden glass p-4 group">
            <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-secondary/5 opacity-50 z-0"></div>
            <img
              alt="Jihad Thabit Portrait"
              className="w-full h-full object-cover object-top rounded-xl relative z-10 transition-transform duration-700 group-hover:scale-105"
              src={PersonalImage}
            />
          </div>
          <div
            className={`absolute -bottom-6 w-32 h-32 bg-secondary-container/20 rounded-full blur-3xl ${lang === "ar" ? "-left-6" : "-right-6"}`}></div>
        </motion.div>
      </div>
    </section>
  );
}
