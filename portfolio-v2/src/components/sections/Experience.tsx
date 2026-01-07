import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string[];
  logo: string;
  type: 'work' | 'education';
}

const experiences: ExperienceItem[] = [
  {
    company: 'ID Dataweb',
    role: 'Senior Full Stack Engineer',
    period: 'Nov 2025 - Present',
    description: [
      'Build scalable and secure identity verification solutions combating fraud across multiple platforms',
      'Design and implement RESTful APIs using Java Spring Framework with emphasis on security and performance',
      'Develop dynamic, responsive user interfaces with React.js ensuring optimal user experience',
      'Deploy and manage microservices on Amazon EKS for robust containerized applications',
      'Collaborate with cross-functional teams to deliver high-quality software solutions',
    ],
    logo: 'assets/img/experience/iddataweb.jpg',
    type: 'work',
  },
  {
    company: 'ID Dataweb',
    role: 'System Engineer',
    period: 'Nov 2023 - Nov 2025',
    description: [
      'Specialized in building scalable identity verification solutions for enterprise clients',
      'Designed and developed backend services using Java Spring Framework',
      'Created modern frontend applications with React.js following industry best practices',
      'Managed containerized microservices on Amazon EKS with focus on reliability and uptime',
      'Participated in code reviews and mentored junior developers on team standards',
    ],
    logo: 'assets/img/experience/iddataweb.jpg',
    type: 'work',
  },
  {
    company: 'Harmonia Holdings Group',
    role: 'Full Stack Engineer',
    period: 'Sept 2022 - Nov 2023',
    description: [
      'Led UI component design and development, enhancing overall user experience',
      'Optimized Angular and GraphQL to streamline database and microservice management',
      'Automated SQL updates through GraphQL mutations, reducing manual data entry significantly',
      'Resulted in substantial system efficiency improvement',
    ],
    logo: 'assets/img/experience/harmonia.png',
    type: 'work',
  },
  {
    company: 'Harmonia Holdings Group',
    role: 'Software Developer',
    period: 'Sept 2021 - Sept 2022',
    description: [
      'Utilized Spring framework in Java for USCIS platform UI and microservices',
      'Managed databases and backend processes with pgAdmin and JDBC',
      'Automated tasks using Amazon SDK and introduced developer onboarding training',
      'Led UI design discussions and client demos for alignment',
    ],
    logo: 'assets/img/experience/harmonia.png',
    type: 'work',
  },
  {
    company: 'University of Maryland',
    role: "Bachelor's in Computer Science",
    period: 'Graduated 2021',
    description: [
      'Comprehensive computer science education with focus on software engineering',
      'Mastered data structures, algorithms, and system design',
      'Completed multiple full-stack development projects',
    ],
    logo: 'assets/img/experience/umd-logo.jpg',
    type: 'education',
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding bg-dark-50 dark:bg-dark-800/50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        >
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              My <span className="gradient-text">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 to-accent-500 hidden md:block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 md:mb-16 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:ml-auto'
                }`}
              >
                {/* Content Card - Improved styling */}
                <div className="glass p-6 rounded-2xl hover-glow transition-all hover:scale-[1.02]">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-14 h-14 rounded-xl object-cover ring-2 ring-primary-500/20 hover:ring-primary-500 transition-all"
                    />
                    <div className="flex-grow">
                      <h3 className="text-xl font-display font-bold mb-1">{exp.role}</h3>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold">{exp.company}</p>
                      <p className="text-sm text-dark-500 dark:text-dark-400 mt-1">{exp.period}</p>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-dark-600 dark:text-dark-300">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed">
                        <span className="text-primary-500 mt-1.5 flex-shrink-0">
                          <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                            <circle cx="3" cy="3" r="3" />
                          </svg>
                        </span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
