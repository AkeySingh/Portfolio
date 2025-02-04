import { motion } from "framer-motion";

const projects = [
  {
    title: "Exprapaisa",
    description: `Exprapaisa.com is a cashback and rewards platform, similar to CashKaro, designed to help users save money while shopping online. It provides cashback, discounts, and exclusive deals on various e-commerce websites by acting as an affiliate partner.`,
  },
  {
    title: "Tracking Platform",
    description:
      "This is a specialized database management system (DBMS) designed for the affiliate marketing industry. It acts as a central hub where data from partners, advertisers, and affiliate networks can be accessed, managed, and analyzed efficiently.",
  },

  {
    title: "MarryPoint",
    description:
      "MarryPoint.com Aims to Simplify the Process of finding a life partner by providing a convenient, secure, and user-friendly platform for personalized matchmaking.",
  },
  {
    title: "RDS (Rocktronic Device System)",
    description:
      "Manage dam data Monitor water levels in real-time. -Control water release schedules. -Generate reports and analytics. -Set alerts for overflow or low water levels. -Tech used - ReactJS, NodeJS MongoDB",
  },
  {
    title: "BlackCuff",
    description:
      "BlackCuff is a modern clothing brand offering premium fashion with a sleek, sophisticated touch. Built on Shopify, our e-commerce store ensures a seamless shopping experience, blending style with convenience.",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-white text-center dark:bg-gray-900 dark:text-white"
    >
      <h2 className="text-4xl font-bold">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-200 p-6 rounded-lg shadow-lg dark:bg-gray-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
