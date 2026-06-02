import { motion } from "motion/react";
import { Mail, Github, MessageCircle, Star } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";

export function Contact() {
  const { lang, t } = useLanguage();

  return (
    <section className="py-16 md:py-24 px-4 md:px-12 max-w-7xl mx-auto" id="contact">
      <div className="glass rounded-3xl md:rounded-[3rem] p-8 md:p-20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className={`absolute top-0 ${lang === 'ar' ? 'left-0' : 'right-0'} w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none`}></div>
        
        <div className="max-w-2xl text-center lg:text-start z-10 w-full">
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">{t.contact.title}</h2>
          <p className="text-on-surface-variant font-sans text-base md:text-lg mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
            {t.contact.sub}
          </p>
          <motion.a 
            whileHover={{ x: lang === 'ar' ? -10 : 10 }}
            href="mailto:thabtjhad37@gmail.com" 
            className="group flex flex-wrap items-center justify-center lg:justify-start gap-3 md:gap-4 font-display text-xl md:text-2xl lg:text-3xl text-primary hover:text-secondary-container transition-colors break-all md:break-normal"
          >
            <span>thabtjhad37@gmail.com</span>
            <Mail className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 shrink-0 transition-transform group-hover:scale-110" />
          </motion.a>
        </div>

        <div className="flex flex-col gap-8 w-full lg:w-auto items-center lg:items-end z-10">
          <div className="flex gap-4">
            {[
              { icon: Github, href: "https://github.com/jihadTH4" },
              { icon: MessageCircle, href: "https://wa.me/970595665806" },
              { icon: Star, href: "https://www.frontendmentor.io/profile/jihadTH4" }
            ].map((social, i) => (
              <motion.a
                key={social.href}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                className="p-4 md:p-5 glass rounded-full hover:bg-primary-container hover:text-on-primary-container transition-all shadow-xl"
              >
                <social.icon className="w-5 h-5 md:w-8 md:h-8" />
              </motion.a>
            ))}
          </div>
          <p 
            className="text-center lg:text-end font-mono text-[10px] md:text-xs text-on-surface-variant/60 font-bold uppercase tracking-wider leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t.contact.availability }}
          />
        </div>
      </div>
    </section>
  );
}
