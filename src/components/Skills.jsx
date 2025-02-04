import { motion } from "framer-motion";

const skills = [
  "React.js",
  "Redux",
  "JavaScript [ ES6 ]",
  "Tailwind CSS",
  "Material UI",
  "HTML-5",
  "CSS",
  "BootStrap",
  "React Router",
];

const softSkills = ["Node.Js", "Next.js", "MongoDB", "Wordpress", "Shopify"];

const Skills = () => {
  return (
    <>
      {" "}
      <section
        id="skills"
        className="py-20 bg-gray-100 dark:bg-gray-900 text-center px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-lg text-lg font-semibold text-gray-900 dark:text-white w-full sm:w-auto"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>
      <section
        id="softSkills"
        className="pb-20 bg-gray-100 dark:bg-gray-900 text-center px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Soft Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {softSkills.map((softSkills, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 px-6 py-3 rounded-lg shadow-lg text-lg font-semibold text-gray-900 dark:text-white w-full sm:w-auto"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              {softSkills}
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
