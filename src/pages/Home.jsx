import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { SocialLinks } from "../components/SocialLinks";
import codeProfile from "../assets/code-timeline.png";
import { socialLinks } from "../data";

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center justify-center"
    >
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          src={codeProfile}
          alt="Profile"
          className="w-48 h-48 rounded-full mx-auto mb-8 object-cover"
        />

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl font-bold mb-4"
        >
          Hi, I'm Christian S. Zambrano
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 dark:text-gray-300 mb-8"
        >
          I'm analyst and software developer with more than a year of
          experience. I like challenges and innovation.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center"
        >
          <SocialLinks links={socialLinks} />
        </motion.div>
      </div>
    </motion.div>
  );
};
