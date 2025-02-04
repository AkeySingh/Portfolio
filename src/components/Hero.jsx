import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-4">
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold leading-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-blue-400">Abhishek</span>
      </motion.h1>
      <motion.p
        className="text-lg mt-2 max-w-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A React.js Developer crafting modern web experiences.
      </motion.p>
      <motion.a
        href="#projects"
        className="mt-6 px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white text-lg shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        View My Work 🚀
      </motion.a>
    </section>
  );
};

export default Hero;
