import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  Github,
  Linkedin,
  Twitter,
};

export function SocialLinks({ links }) {
  return (
    <div className="flex gap-4">
      {links.map((link, index) => {
        const Icon = iconMap[link.icon];
        return (
          <motion.a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Icon className="w-6 h-6" />
          </motion.a>
        );
      })}
    </div>
  );
}
