import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { Github, Linkedin, Mail, Download, Code2, Rocket, Users, Zap } from 'lucide-react';
import Scene3D from '../components/3d/Scene3D';

const highlights = [
  {
    icon: Code2,
    title: '6+ Years Experience',
    description: 'Building scalable web applications with modern technologies',
  },
  {
    icon: Rocket,
    title: 'Innovation Focused',
    description: 'Always exploring cutting-edge solutions and best practices',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Collaborative mindset with excellent communication skills',
  },
  {
    icon: Zap,
    title: 'Fast Learner',
    description: 'Quick to adapt to new technologies and frameworks',
  },
];

export default function HomePage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="relative min-h-screen">
      {/* 3D Background */}
      <Scene3D />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-dark-900/50 dark:to-dark-900" />

      {/* Content */}
      <div className="relative z-10 container-custom py-20 md:py-32">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Profile Image */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl blur-2xl opacity-30" />
                <div className="relative bg-gradient-to-br from-primary-500 to-accent-500 p-1 rounded-2xl">
                  <div className="bg-white dark:bg-dark-900 rounded-xl p-8">
                    <img
                      src="/assets/img/professional-pic.png"
                      alt="Tarek Halabi"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: About Content & CTAs */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="order-1 lg:order-2"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-block mb-4 px-6 py-2 rounded-full glass"
              >
                <span className="text-sm font-medium gradient-text">
                  Full Stack Engineer
                </span>
              </motion.div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Tarek <span className="gradient-text">Halabi</span>
              </h1>

              <div className="space-y-4 text-dark-600 dark:text-dark-300 mb-8">
                <p>
                  With over 6 years of computer science experience, I'm proficient in Java, Python,
                  JavaScript, C++, Kotlin, Spring Boot, React JS, and Angular. I excel in database
                  design with SQL, R, NoSQL, and PostgreSQL.
                </p>
                <p>
                  Currently a Full Stack Engineer at Harmonia Holdings Group LLC in McLean, VA, I
                  contribute to UI design, code refactoring, and database management using Angular,
                  GraphQL, and SQL.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Link to="/contact" className="btn-primary">
                  Get In Touch
                </Link>
                <a
                  href="/resume/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 mb-8">
                <motion.a
                  href="https://github.com/treko50"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full glass hover-glow transition-all"
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
                  className="p-3 rounded-full glass hover-glow transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="mailto:thalabi98@gmail.com"
                  className="p-3 rounded-full glass hover-glow transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="glass p-6 rounded-xl hover-glow transition-all text-center"
              >
                <item.icon className="w-8 h-8 text-primary-500 mb-3 mx-auto" />
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-dark-600 dark:text-dark-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
