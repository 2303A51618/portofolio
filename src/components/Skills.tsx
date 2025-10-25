import { motion } from 'framer-motion';
import { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const skillCategories = [
    {
      category: 'Frontend',
      color: 'from-cyan-400 to-blue-500',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Java Script', level: 85 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      category: 'Backend',
      color: 'from-green-400 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'Python', level: 80 },
        
      ],
    },
    {
      category: 'Database',
      color: 'from-purple-400 to-pink-500',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MYSQL', level: 80 },
        
      ],
    },
    {
      category: 'Tools & Others',
      color: 'from-orange-400 to-red-500',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'GitHub', level: 72 },
        { name: 'Postman', level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
            Skills & Expertise
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">Technologies I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              className="space-y-4"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`bg-gradient-to-br ${category.color} p-0.5 rounded-xl shadow-lg`}
              >
                <div className="bg-gray-800/95 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-6 text-center">
                    {category.category}
                  </h3>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05), duration: 0.4 }}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="group"
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                          <motion.span
                            animate={{
                              opacity: hoveredSkill === skill.name ? 1 : 0.7,
                              scale: hoveredSkill === skill.name ? 1.1 : 1,
                            }}
                            className="text-gray-400 text-sm font-semibold"
                          >
                            {skill.level}%
                          </motion.span>
                        </div>

                        <div className="relative h-2 bg-gray-700/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.2,
                              duration: 1,
                              ease: 'easeOut',
                            }}
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                          >
                            <motion.div
                              animate={{
                                opacity: [0.5, 1, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: 'easeInOut',
                              }}
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            ></motion.div>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <p className="text-gray-300 text-lg mb-4">
              Always learning, always growing
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['AI/ML', 'Web3', 'Cloud Computing', 'Microservices'].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
