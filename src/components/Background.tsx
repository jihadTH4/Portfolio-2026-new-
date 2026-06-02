import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { useEffect, memo } from "react";
import { Cpu, Terminal, Layers, Layout, Grid3X3, Brush } from "lucide-react";
import { useLanguage } from "../hooks/useLanguage";
import { useIsMobile } from "../hooks/useIsMobile";

function BackgroundComponent() {
  const icons = [Cpu, Terminal, Layers, Layout, Grid3X3, Brush];
  const isMobile = useIsMobile();

  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, isMobile]);

  const moveX = useTransform(mouseXSpring, [-500, 500], [-30, 30]);
  const moveY = useTransform(mouseYSpring, [-500, 500], [-30, 30]);

  const moveXBlob1Ar = useTransform(moveX, x => -x);
  const moveXBlob2Ar = useTransform(moveX, x => x * 1.5);
  const moveXBlob2En = useTransform(moveX, x => x * -1.5);
  const moveXBlob3Ar = useTransform(moveX, x => x * -2);
  const moveXBlob3En = useTransform(moveX, x => x * 2);
  const moveYBlob3 = useTransform(moveY, y => y * 0.5);

  const { lang } = useLanguage();

  if (isMobile) {
    return (
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none bg-background transition-colors duration-500">
        <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.15] mix-blend-overlay"
             style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, var(--grid-color) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

        <div className="absolute inset-0 noise-overlay z-50"></div>

        <motion.div
          className={`absolute top-[10%] w-[300px] h-[300px] rounded-full bg-primary-container/20 blur-[80px] transition-all duration-500 ${lang === 'ar' ? '-right-[10%]' : '-left-[10%]'}`}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ opacity: 'var(--blob-opacity)' }}
        />

        <motion.div
          className={`absolute bottom-[10%] w-[350px] h-[350px] rounded-full bg-secondary-container/10 blur-[100px] transition-all duration-500 ${lang === 'ar' ? '-left-[15%]' : '-right-[15%]'}`}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ opacity: 'var(--blob-opacity)' }}
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none bg-background transition-colors duration-500">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.15] mix-blend-overlay"
           style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, var(--grid-color) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      {/* Noise Overlay */}
      <div className="absolute inset-0 noise-overlay z-50"></div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full opacity-10 dark:opacity-20 blur-[1px]"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: Math.random() * 0.5 + 0.5
          }}
          animate={{
            y: ["-10%", "110%"],
            opacity: [0, 0.2, 0],
            x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`]
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 20
          }}
        />
      ))}

      {/* Digital Sparks */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`spark-${i}`}
          className="absolute w-[2px] h-[100px] bg-linear-to-b from-transparent via-secondary-container to-transparent opacity-10 dark:opacity-30"
          initial={{
            x: Math.random() * 100 + "%",
            y: "-20%"
          }}
          animate={{
            y: ["-20%", "120%"],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: Math.random() * 2 + 3,
            repeat: Infinity,
            ease: "circIn",
            delay: Math.random() * 10
          }}
        />
      ))}

      {/* Floating Tech Icons */}
      {icons.map((Icon, i) => (
        <motion.div
          key={`icon-${i}`}
          className="absolute text-primary/5 select-none pointer-events-none transition-colors duration-500"
          style={{ opacity: 'var(--blob-opacity)' }}
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            rotate: Math.random() * 360
          }}
          animate={{
            y: ["0%", "10%", "-10%", "0%"],
            x: ["0%", "5%", "-5%", "0%"],
            rotate: [0, 90, 180, 270, 360]
          }}
          transition={{
            duration: 30 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2
          }}
        >
          <Icon size={120 + Math.random() * 100} />
        </motion.div>
      ))}

      {/* Animated Blobs */}
      <motion.div
        style={{ x: lang === 'ar' ? moveXBlob1Ar : moveX, y: y1, opacity: 'var(--blob-opacity)' }}
        className={`absolute top-[10%] w-[600px] h-[600px] rounded-full bg-primary-container/20 blur-[120px] transition-all duration-500 ${lang === 'ar' ? '-right-[10%]' : '-left-[10%]'}`}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        style={{ x: lang === 'ar' ? moveXBlob2Ar : moveXBlob2En, y: y2, opacity: 'var(--blob-opacity)' }}
        className={`absolute bottom-[10%] w-[800px] h-[800px] rounded-full bg-secondary-container/10 blur-[150px] transition-all duration-500 ${lang === 'ar' ? '-left-[15%]' : '-right-[15%]'}`}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        style={{ x: lang === 'ar' ? moveXBlob3Ar : moveXBlob3En, y: moveYBlob3, opacity: 'var(--blob-opacity)' }}
        className={`absolute top-1/2 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] transition-all duration-500 ${lang === 'ar' ? 'right-1/3' : 'left-1/3'}`}
        animate={{
          y: [0, 100, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Scanning Line */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[1px] bg-primary/20 shadow-[0_0_15px_rgba(179,197,255,0.5)] z-[60]"
        animate={{
          top: ["0%", "100%", "0%"]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}

export const Background = memo(BackgroundComponent);
