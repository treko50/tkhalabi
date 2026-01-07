import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Layout, Server, Cloud, GitBranch, TestTube, Package } from 'lucide-react';

interface Skill {
  name: string;
  proficiency: 'expert' | 'advanced' | 'intermediate';
  icon: any;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    color: 'from-primary-500 to-primary-600',
    skills: [
      { name: 'Angular', proficiency: 'expert', icon: Layout },
      { name: 'React', proficiency: 'advanced', icon: Layout },
      { name: 'TypeScript', proficiency: 'expert', icon: Code },
      { name: 'JavaScript', proficiency: 'expert', icon: Code },
      { name: 'HTML/CSS/JSP', proficiency: 'expert', icon: Layout },
    ],
  },
  {
    title: 'Backend Development',
    color: 'from-accent-500 to-accent-600',
    skills: [
      { name: 'Java', proficiency: 'expert', icon: Server },
      { name: 'Spring Boot', proficiency: 'advanced', icon: Server },
      { name: 'GraphQL', proficiency: 'expert', icon: Code },
      { name: 'Python', proficiency: 'expert', icon: Code },
      { name: 'C++', proficiency: 'advanced', icon: Code },
    ],
  },
  {
    title: 'Database & Data',
    color: 'from-primary-600 to-accent-500',
    skills: [
      { name: 'PostgreSQL', proficiency: 'expert', icon: Database },
      { name: 'MySQL', proficiency: 'advanced', icon: Database },
      { name: 'Database Design', proficiency: 'expert', icon: Database },
    ],
  },
  {
    title: 'DevOps & Cloud',
    color: 'from-accent-600 to-primary-500',
    skills: [
      { name: 'CI/CD', proficiency: 'advanced', icon: GitBranch },
      { name: 'AWS', proficiency: 'intermediate', icon: Cloud },
      { name: 'Kubernetes', proficiency: 'intermediate', icon: Package },
      { name: 'Unit Testing', proficiency: 'expert', icon: TestTube },
    ],
  },
];

const getProficiencyColor = (proficiency: string) => {
  switch (proficiency) {
    case 'expert':
      return 'bg-primary-500';
    case 'advanced':
      return 'bg-accent-500';
    case 'intermediate':
      return 'bg-dark-400';
    default:
      return 'bg-dark-300';
  }
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding">
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
              Technical <span className="gradient-text">Expertise</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
            <p className="mt-6 text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
              Comprehensive skill set across full-stack development, databases, and cloud infrastructure
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="glass p-6 rounded-2xl hover-glow"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        className="flex items-center justify-between p-3 rounded-lg bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-primary-500" />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${getProficiencyColor(skill.proficiency)}`} />
                          <span className="text-xs text-dark-500 dark:text-dark-400 capitalize">
                            {skill.proficiency}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Proficiency Legend */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex justify-center gap-6 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary-500" />
              <span className="text-dark-600 dark:text-dark-400">Expert</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-accent-500" />
              <span className="text-dark-600 dark:text-dark-400">Advanced</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-dark-400" />
              <span className="text-dark-600 dark:text-dark-400">Intermediate</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
