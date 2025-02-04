import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      className="py-20 bg-gray-100 text-center dark:bg-gray-800 dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold">About Me</h2>
      <motion.p
        className="mt-4 text-gray-700 max-w-3xl mx-auto dark:text-gray-300"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        I am a Skilled React JS Developer with 3+ years of experience in
        building dynamic, responsive, and high-performance web applications.
        Proficient in React, Redux, JavaScript (ES6+), TypeScript, and modern
        front-end technologies. Strong understanding of component-based
        architecture, state management, and API integrations. Passionate about
        optimizing UI/UX and enhancing performance
      </motion.p>
    </motion.section>
  );
};

export default About;
