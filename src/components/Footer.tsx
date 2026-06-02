import { useLanguage } from "../hooks/useLanguage";

export function Footer() {
  const { lang, t } = useLanguage();
  
  return (
    <footer className="w-full py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 bg-surface-container-lowest/50 border-t border-white/5 relative overflow-hidden">
      <div className={`font-display text-9xl font-black text-on-surface opacity-[0.03] absolute bottom-0 pointer-events-none select-none ${lang === 'ar' ? '-right-10' : '-left-10'}`}>
        {lang === 'ar' ? 'جهاد' : 'JIHAD'}
      </div>
      
      <p className="font-mono text-xs text-on-surface-variant font-bold relative z-10">
        {t.footer.rights}
      </p>

      <div className="flex gap-8 relative z-10">
        {[
          { name: t.footer.socials.instagram, href: '#' },
          { name: t.footer.socials.whatsapp, href: 'https://wa.me/970595665806' },
          { name: t.footer.socials.github, href: 'https://github.com/jihadTH4' }
        ].map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-on-surface-variant hover:text-primary transition-all duration-300 hover:-translate-y-1 font-mono text-xs font-bold"
          >
            {item.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
