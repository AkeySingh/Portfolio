import { motion } from "framer-motion";

const Resume = () => {
  return (
    <section
      id="resume"
      className="py-20 bg-gray-800 text-center text-white dark:bg-gray-700"
    >
      <h2 className="text-4xl font-bold">Download My Resume</h2>
      <motion.a
        href="/resume.pdf" // Make sure to place your resume in the `public/` folder
        download="Abhishek_Resume.pdf"
        className="mt-6 inline-block bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Download Resume 📄
      </motion.a>
    </section>
  );
};

export default Resume;
