import React from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import ContactForm from './components/ContactForm.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  })

  return (
    <div className="min-h-screen bg-cream-50 dark:bg-midnight-950 text-navy-900 dark:text-slate-200">
      {/* Scroll progress bar */}
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 z-[60]"
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
