import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const Certifications = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const certifications = [
    
    {
  title: 'AWS Certified Solutions Architect',
  issuer: 'Amazon Web Services (AWS)',
  date: '2025',
  description:
    'Validated expertise in designing secure, scalable, and cost-effective cloud solutions on AWS. Covers cloud architecture, networking, storage, compute services, security best practices, and high-availability system design.',
  skills: ['AWS', 'Cloud Computing', 'Architecture Design', 'Security'],
  color: 'from-yellow-400 to-orange-500',
  link: 'https://drive.google.com/file/d/1scIgwzCb4qhD81pCmrB15KoB1mqIVZn0/view',
},
   {
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    date: '15 June 2026',
    description:
      'Introduces the fundamentals of networking including network architectures, IP addressing, Ethernet concepts, and basic network configuration and troubleshooting.',
    skills: ['Networking Basics', 'IP Addressing', 'Ethernet', 'Network Troubleshooting'],
    color: 'from-blue-400 to-cyan-500',
    link: 'https://drive.google.com/file/d/138QHFfdVs-gQz--6oT8ugtFqCnoYturi/view?usp=sharing',
  },

  {
    title: 'CCNA: Switching, Routing and Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    date: '11 June 2026',
    description:
      'Focuses on configuring switches and routers, implementing VLANs, inter-VLAN routing, wireless networks, and improving network performance and security.',
    skills: ['Switching', 'Routing', 'VLANs', 'Wireless Networking'],
    color: 'from-orange-400 to-red-500',
    link: 'https://drive.google.com/file/d/19eU91GUtC7aRzmm2eneFG-XunnvAgALj/view?usp=sharing',
  },

  {
    title: 'CCNA: Enterprise Networking, Security and Automation',
    issuer: 'Cisco Networking Academy',
    date: '15 June 2026',
    description:
      'Covers advanced enterprise networking concepts including network security, automation, scalability, and modern enterprise network design.',
    skills: ['Enterprise Networking', 'Network Security', 'Automation', 'Scalability'],
    color: 'from-purple-400 to-pink-500',
    link: 'https://drive.google.com/file/d/1IrLDUZ2wxhXuIPsCXX5IyNPnQ0b1otiJ/view?usp=sharing',
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
