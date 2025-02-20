import { motion } from 'framer-motion';

export function SkillBar({ name, level, icon: Icon }) {
  return (
    <div className="mb-4">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="w-5 h-5 text-blue-500" />
        <span className="font-medium">{name}</span>
      </div>
      <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700">
        <motion.div
          className="h-full bg-blue-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}