import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Rocket, Users, Zap } from 'lucide-react';

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

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-dark-50 dark:bg-dark-800/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl blur-2xl opacity-30" />
                <div className="relative bg-gradient-to-br from-primary-500 to-accent-500 p-1 rounded-2xl">
                  <div className="bg-white dark:bg-dark-900 rounded-xl p-8">
                    <img
                      src="assets/img/professional-pic.png"
                      alt="Tarek Halabi"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-3xl font-display font-bold mb-6">
                Full Stack Engineer at Harmonia Holdings Group
              </h3>

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
                <p>
                  I'm passionate about mobile app development and am currently working on the Slackr
                  Application, an Android study group app built in Kotlin and React Native.
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ y: 20, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="glass p-6 rounded-xl hover:neon-glow transition-all"
                  >
                    <item.icon className="w-8 h-8 text-primary-500 mb-3" />
                    <h4 className="font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-dark-600 dark:text-dark-400">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
