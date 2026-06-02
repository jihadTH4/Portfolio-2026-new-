/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { lazy, Suspense } from "react";
import { Background } from "./components/Background";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";

const Skills = lazy(() => import("./components/Skills").then(m => ({ default: m.Skills })));
const Projects = lazy(() => import("./components/Projects").then(m => ({ default: m.Projects })));
const CS50CTA = lazy(() => import("./components/CS50CTA").then(m => ({ default: m.CS50CTA })));
const Contact = lazy(() => import("./components/Contact").then(m => ({ default: m.Contact })));
const Footer = lazy(() => import("./components/Footer").then(m => ({ default: m.Footer })));

export default function App() {
  return (
    <div className="relative min-h-screen bg-background text-on-surface selection:bg-primary-container selection:text-white">
      <Background />
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <Suspense fallback={null}>
          <Skills />
        </Suspense>
        <Suspense fallback={null}>
          <Projects />
        </Suspense>
        <Suspense fallback={null}>
          <CS50CTA />
        </Suspense>
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </motion.main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
