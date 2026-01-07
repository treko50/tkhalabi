import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white py-12">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div>
            <h3 className="text-2xl font-display font-bold gradient-text mb-4">
              Tarek Halabi
            </h3>
            <p className="text-dark-300">
              Full Stack Engineer passionate about creating innovative solutions
              and building exceptional web experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              <li>
                <Link to="/" className="text-dark-300 hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-dark-300 hover:text-primary-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-dark-300 hover:text-primary-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-dark-300 hover:text-primary-400 transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-dark-300 hover:text-primary-400 transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-dark-300 hover:text-primary-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/treko50"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-dark-800 hover:bg-primary-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/tarekhalabi/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-dark-800 hover:bg-primary-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="mailto:thalabi98@gmail.com"
                className="p-3 rounded-full bg-dark-800 hover:bg-primary-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-dark-800 text-center text-dark-400">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Tarek Halabi. Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
