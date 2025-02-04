// import { motion } from "framer-motion";

// const Contact = () => {
//   return (
//     <motion.section
//       id="contact"
//       className="py-20 bg-gray-800 text-white text-center dark:bg-gray-700"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <h2 className="text-4xl font-bold">Contact Me</h2>
//       <p className="mt-4">Feel free to reach out via email.</p>
//       <motion.a
//         href="mailto:akey9009@gmail.com"
//         className="mt-4 inline-block bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700"
//         whileHover={{ scale: 1.1 }}
//         whileTap={{ scale: 0.9 }}
//       >
//         Email Me
//       </motion.a>
//     </motion.section>
//   );
// };

// export default Contact;

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react"; // Install lucide-react: npm install lucide-react

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   setSubmitted(true);
  //   setTimeout(() => setSubmitted(false), 3000);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xvgzrjyr", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } else {
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-100 dark:bg-gray-900">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Contact Me
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Have a project in mind or just want to say hi? Feel free to reach out!
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <motion.div
          className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Get in Touch
          </h3>
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="text-blue-500" />
              <p className="text-gray-800 dark:text-gray-300">
                +91 99580 88591
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-blue-500" />
              <p className="text-gray-800 dark:text-gray-300">
                akey9009@gmail.com
              </p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-blue-500" />
              <p className="text-gray-800 dark:text-gray-300">
                New Delhi, India
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex gap-4">
            <a
              href="https://www.linkedin.com/in/abhishek-kumar-5810a7347"
              className="text-blue-500 hover:text-blue-600 text-xl"
            >
              🌐 LinkedIn
            </a>
            <a
              href="https://github.com/AkeySingh"
              className="text-blue-500 hover:text-blue-600 text-xl"
            >
              📘Github
            </a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Send a Message
          </h3>

          <div className="mt-4 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
              required
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
              required
              onChange={handleChange}
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
              required
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg flex items-center justify-center gap-2 transition-all"
          >
            <Send size={20} /> Send Message
          </button>

          {submitted && (
            <p className="text-green-500 mt-3 text-center">
              Message sent successfully! ✅
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
