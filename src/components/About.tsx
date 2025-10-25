import React from "react";
import { motion, Transition } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";

const About = () => {
  const myDescription =
    "I'm always curious and eager to learn new things. I enjoy turning ideas into solutions and working with others to create something meaningful. I believe growth comes from both challenges and experience. Let's connect and share ideas—I'd love to hear from you!";

  const myQualities = [
    "Passionate Full-Stack Developer",
    "Problem-solver with a love for innovation",
    "Building scalable & efficient applications",
    "Focused on leveraging Cloud technologies for modern, reliable solutions",
    "Always learning and adapting",
  ];

  const springTransition: Transition = {
    type: "spring",
    stiffness: 300,
    damping: 24,
  };

  const variants = {
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    hidden: { opacity: 0, y: 20 },
  };

  const itemVariants = {
    visible: { opacity: 1, x: 0, transition: springTransition },
    hidden: { opacity: 0, x: -50 },
  };

  // Floating particle dots
  const floatingDots = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 4,
  }));

  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-[#000000] relative overflow-hidden"
    >
      {/* 🌈 Gradient Wave Animation */}
      <style>{`
        @keyframes waveFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animated-bg {
          background: linear-gradient(270deg, #0ea5e9, #7e22ce, #9333ea, #06b6d4);
          background-size: 600% 600%;
          animation: waveFlow 20s ease infinite;
          filter: blur(100px);
          opacity: 0.2;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        /* Floating dots */
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
          50% { transform: translateY(-15px) scale(1.3); opacity: 1; }
        }
        .dot {
          position: absolute;
          background: radial-gradient(circle, #06b6d4, transparent);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { filter: drop-shadow(0 0 5px #06b6d4) drop-shadow(0 0 10px #7e22ce); opacity: 0.6; }
          50% { filter: drop-shadow(0 0 15px #06b6d4) drop-shadow(0 0 30px #7e22ce); opacity: 1; }
        }
        .neon-glow { animation: pulse-glow 3s infinite alternate ease-in-out; }

        @keyframes border-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .cyber-border-animate { animation: border-rotate 40s linear infinite; }
      `}</style>

      {/* ✨ Background Layers */}
      <div className="animated-bg"></div>

      {floatingDots.map((dot) => (
        <div
          key={dot.id}
          className="dot"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            animationDuration: `${dot.duration}s`,
          }}
        ></div>
      ))}

      {/* 🌌 Foreground content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-0 flex items-center justify-center">
            <Zap className="text-cyan-400 mr-3 animate-pulse" size={30} />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 tracking-wider">
              ABOUT ME
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-2 rounded-full shadow-lg shadow-cyan-500/30"></div>
        </motion.div>

        <div className="relative flex flex-col md:flex-row items-start justify-between">
          {/* Profile Image with glowing border */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute flex justify-center w-full md:w-auto"
            style={{ top: "4%", left: "1%" }}
          >
            <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] flex items-center justify-center neon-glow">
              <motion.div
                className="absolute inset-0 cyber-border-animate"
                style={{
                  border: "3px solid",
                  borderColor: "#06b6d4 transparent #a855f7 transparent",
                  borderRadius: "50%",
                }}
              ></motion.div>

              <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-gray-900 border-4 border-cyan-500/50 p-2 shadow-2xl shadow-cyan-500/40">
                <img
                  src="/vasu.jpg"
                  alt="Vasu Chippa"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={variants}
            className="space-y-8 md:ml-[450px] lg:ml-[550px] w-full md:w-auto"
          >
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-xl leading-relaxed bg-gray-900/70 p-8 rounded-xl border border-purple-500/50 shadow-xl shadow-purple-500/20 transition-all hover:border-cyan-500/70 hover:shadow-cyan-500/20 duration-300"
            >
              {myDescription}
            </motion.p>

            <motion.ul variants={variants} className="space-y-4 pt-4">
              {myQualities.map((quality, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start text-white text-lg font-medium tracking-wide border-b border-gray-700/50 pb-2"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                      delay: index * 0.1,
                    }}
                    className="mr-3 flex-shrink-0 mt-1 p-0.5 rounded-full bg-cyan-600 shadow-lg shadow-cyan-600/50"
                  >
                    <CheckCircle2 className="text-gray-900" size={18} />
                  </motion.span>
                  <span>{quality}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
