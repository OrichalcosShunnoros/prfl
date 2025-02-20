import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { about } from "../data";

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto px-4 py-16"
    >
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-3xl font-bold mb-8"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8"
      >
        <h3 className="text-xl font-bold mb-4">Professional Information</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{about.summary}</p>

        <h3 className="text-xl font-bold mb-4">Development Philosophy</h3>
        <p className="text-gray-600 dark:text-gray-300">{about.philosophy}</p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-xl font-bold mb-6">Experience</h3>
        <div className="space-y-6">
          {about.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="w-5 h-5 text-blue-500" />
                <h4 className="text-lg font-bold">{exp.title}</h4>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mb-2">
                {exp.company} | {exp.period}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
