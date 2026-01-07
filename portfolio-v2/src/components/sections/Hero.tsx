import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import Scene3D from '../3d/Scene3D';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <Scene3D />

      {/* Content */}
      <motion.div
        className="container-custom relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="inline-block mb-6 px-6 py-2 rounded-full glass"
        >
          <span className="text-sm font-medium gradient-text">
            Full Stack Engineer
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
        >
          Hi! I'm{' '}
          <span className="gradient-text">
            Tarek Halabi
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-dark-600 dark:text-dark-300 mb-8 max-w-3xl mx-auto"
        >
          I craft beautiful, performant web experiences with modern technologies.
          Passionate about clean code, innovative solutions, and continuous learning.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Link to="/contact" className="btn-primary">
            Get In Touch
          </Link>
          <a href="/resume/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-2">
            <Download className="w-5 h-5" />
            Download Resume
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6"
        >
          <motion.a
            href="https://github.com/treko50"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:neon-glow transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/tarekhalabi/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:neon-glow transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            href="mailto:thalabi98@gmail.com"
            className="p-3 rounded-full glass hover:neon-glow transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
        >
          <ArrowDown className="w-6 h-6 text-dark-400 dark:text-dark-500" />
        </motion.div>
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-dark-900/50 dark:to-dark-900 -z-5" />
    </section>
  );
}
