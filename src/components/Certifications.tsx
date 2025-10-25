import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const Certifications = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const certifications = [
    {
      title: 'MongoDB Atlas Associate Developer',
      issuer: 'MongoDB University',
      date: 'March 2024',
      description:
        'Comprehensive certification covering MongoDB fundamentals, data modeling, CRUD operations, aggregation framework, and performance optimization.',
      skills: ['MongoDB', 'NoSQL', 'Database Design', 'Performance Tuning'],
      color: 'from-green-400 to-emerald-500',
      link: '#',
    },
    {
      title: 'Cisco Certified Network Associate (CCNA)',
      issuer: 'Cisco',
      date: 'January 2024',
      description:
        'The CCNA (Cisco Certified Network Associate) is the foundational cert proving skills in configuring, operating, and troubleshooting core networking, making it essential for student entry into IT support and junior engineering roles. 🧑‍💻🌐',
      skills: ['Networking', 'Routing & Switching', 'Network Security', 'Troubleshooting'],
      color: 'from-orange-400 to-red-500',
      link: '#',
    },
    {
      title: 'React Advanced Patterns',
      issuer: 'Frontend Masters',
      date: 'December 2023',
      description:
        'Advanced React concepts including custom hooks, performance optimization, state management patterns, and modern React architecture.',
      skills: ['React', 'Hooks', 'Performance', 'Architecture'],
      color: 'from-cyan-400 to-blue-500',
      link: '#',
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
            Certifications
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">Continuous learning and growth</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="perspective-1000"
              onMouseEnter={() => setFlippedCard(index)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <motion.div
                animate={{ rotateY: flippedCard === index ? 180 : 0 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                className="relative preserve-3d"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div
                  className={`backface-hidden bg-gradient-to-br ${cert.color} p-0.5 rounded-2xl shadow-xl`}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className="bg-gray-800/95 backdrop-blur-sm rounded-2xl p-6 h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 bg-gradient-to-br ${cert.color} rounded-xl`}>
                        <Award className="text-white" size={32} />
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 15 }}
                        className="text-yellow-400"
                      >
                        <Award size={24} />
                      </motion.div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>

                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                      <Calendar size={16} />
                      <span>{cert.date}</span>
                    </div>

                    <p className="text-purple-300 font-medium mb-4">{cert.issuer}</p>

                    <div className="flex flex-wrap gap-2">
                      {cert.skills.slice(0, 2).map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-full text-xs text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                      <span className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded-full text-xs text-gray-400">
                        +{cert.skills.length - 2} more
                      </span>
                    </div>

                    <div className="mt-6 text-center">
                      <p className="text-gray-400 text-sm">Hover to see details</p>
                    </div>
                  </div>
                </div>

                <div
                  className={`absolute inset-0 backface-hidden bg-gradient-to-br ${cert.color} p-0.5 rounded-2xl shadow-xl`}
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <div className="bg-gray-800/95 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">About this certification</h3>

                      <p className="text-gray-300 text-sm leading-relaxed mb-6">
                        {cert.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-purple-300 mb-3">Skills Covered:</h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill) => (
                            <motion.span
                              key={skill}
                              whileHover={{ scale: 1.1 }}
                              className={`px-3 py-1 bg-gradient-to-r ${cert.color} bg-opacity-20 border border-opacity-30 rounded-full text-xs font-medium text-white`}
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r ${cert.color} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300`}
                    >
                      <ExternalLink size={18} />
                      View Certificate
                    </motion.a>
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
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="mb-4"
            >
              <Award className="text-yellow-400 mx-auto" size={48} />
            </motion.div>
            <p className="text-gray-300 text-lg">
              Committed to continuous learning and professional development
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
