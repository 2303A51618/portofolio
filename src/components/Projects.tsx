import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Global Next-Gen Hospital Management System',
      description:
        'A comprehensive healthcare platform with patient management, appointment scheduling, and medical records. Built with real-time data synchronization and role-based access control.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      liveUrl: 'https://hosptital-management-system.netlify.app/',
      githubUrl: '#',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      title: 'Farm Friend – Smart Farming Platform',
      description:
        'AI-powered agricultural platform that helps farmers with crop monitoring, weather predictions, and yield optimization. Features real-time analytics and IoT integration.',
      image: 'https://images.pexels.com/photos/2132250/pexels-photo-2132250.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Express', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-green-400 to-emerald-500',
    },
    
    {
      title: 'Task Management & Collaboration Tool',
      description:
        'Real-time collaboration platform for teams with task tracking, file sharing, and communication features. Built with modern tech stack for optimal performance.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Express', 'Socket.io', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      color: 'from-orange-400 to-red-500',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
            Featured Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 text-lg">Bringing ideas to life through code</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative bg-gradient-to-br ${project.color} p-0.5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300`}
              >
                <div className="bg-gray-800/95 backdrop-blur-sm rounded-2xl overflow-hidden">
                  <div className="relative overflow-hidden h-48">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 flex items-center justify-center gap-4"
                    >
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-900/90 backdrop-blur-sm rounded-full border border-cyan-500/50 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
                      >
                        <ExternalLink className="text-cyan-400" size={20} />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-gray-900/90 backdrop-blur-sm rounded-full border border-purple-500/50 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
                      >
                        <Github className="text-purple-400" size={20} />
                      </motion.a>
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">
                        {project.title}
                      </h3>
                      <motion.div
                        animate={{
                          rotate: [0, 10, 0],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <Sparkles className="text-yellow-400" size={20} />
                      </motion.div>
                    </div>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + tagIndex * 0.05, type: 'spring' }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className={`px-3 py-1 bg-gradient-to-r ${project.color} bg-opacity-20 border border-opacity-30 rounded-full text-xs font-medium text-white`}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-2xl blur-xl -z-10 opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
              ></motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-purple-500/30 text-white font-semibold rounded-full hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
