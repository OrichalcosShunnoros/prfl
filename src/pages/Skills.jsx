import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { SkillBar } from '../components/SkillBar';
import { skills } from '../data';

export function Skills() {
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
        Technical Skills
      </motion.h2>

      <div className="space-y-8">
        {skills.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: categoryIndex * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-bold mb-6">{category.category}</h3>
            <div className="space-y-4">
              {category.items.map((skill) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={Icons[skill.icon]}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}