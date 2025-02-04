import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Neeraj Gupta",
    position: "CTO, Affinet Media",
    feedback: "Abhishek is an amazing React developer!",
  },
  {
    name: "Ravi Shankar",
    position: "CEO, Tech Digital solution",
    feedback: "Great attention to detail and problem-solving mindset.",
  },
  {
    name: "Yashashvi Chauhan",
    position: "Founder & CEO ,  Blackcuff",
    feedback: "Great Job!",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 bg-white dark:bg-gray-800 text-center"
    >
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
        What Clients Say
      </h2>
      <div className="flex justify-center gap-6 mt-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-lg w-80"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.5, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-gray-800 dark:text-gray-200">
              "{testimonial.feedback}"
            </p>
            <h4 className="mt-3 font-bold">{testimonial.name}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {testimonial.position}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
