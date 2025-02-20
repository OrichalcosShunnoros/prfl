import consoleChat from "../assets/consoleChat.png";
import pyGen from "../assets/pyGen.png";
import typingWeb from "../assets/typingWeb.png";
import miniCode from "../assets/miniCodeEditor.png";
import codeRun from "../assets/codeRun.png";
import jsx2native from "../assets/JSX2Native.png";

// Social Media Links
export const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/OrichalcosShunnoros",
    icon: "Github",
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/CsZa/",
    icon: "Linkedin",
  },
  // {
  //   id: 3,
  //   name: 'Twitter',
  //   url: 'https://twitter.com/yourusername',
  //   icon: 'Twitter'
  // }
];

// Skills Data
export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", level: 95, icon: "Code2" },
      { name: "CSS", level: 90, icon: "Code2" },
      { name: "Tailwind CSS", level: 50, icon: "Code2" },
      { name: "JavaScript", level: 80, icon: "Code2" },
      { name: "TypeScript", level: 60, icon: "Code2" },
      { name: "React", level: 90, icon: "Code2" },
      { name: "Vite", level: 70, icon: "Code2" },
      { name: "React Native", level: 40, icon: "Code2" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 80, icon: "Server" },
      { name: "Express", level: 75, icon: "Workflow" },
      { name: "Flask", level: 40, icon: "FileCode" },
      { name: "Python", level: 50, icon: "FileCode" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", level: 70, icon: "Database" },
      { name: "MongoDB", level: 60, icon: "Database" },
      { name: "PostgreSQL", level: 65, icon: "Database" },
      { name: "SQLite", level: 55, icon: "Database" },
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "NPM", level: 75, icon: "Package" },
      { name: "Nodemon", level: 70, icon: "RefreshCw" },
      { name: "Postman", level: 80, icon: "Send" },
      { name: "Git", level: 85, icon: "GitBranch" },
      { name: "GitHub", level: 90, icon: "Github" },
    ],
  },
  {
    category: "Authenticator & Security",
    items: [{ name: "JWT", level: 60, icon: "Key" }],
  },
  {
    category: "Design",
    items: [
      { name: "Photoshop", level: 70, icon: "Image" },
      { name: "Canva", level: 80, icon: "Image" },
      { name: "Inkscape", level: 65, icon: "PenTool" },
    ],
  },
  {
    category: "Productivity",
    items: [
      { name: "Notion", level: 85, icon: "Book" },
      { name: "Trello", level: 75, icon: "Columns" },
    ],
  },
  {
    category: "Hardware",
    items: [
      { name: "Arduino", level: 50, icon: "Cpu" },
      { name: "Raspberry Pi", level: 45, icon: "Server" },
    ],
  },
  {
    category: "Hosting/Deployment",
    items: [
      { name: "GitHub Pages", level: 75, icon: "Globe" },
      { name: "Vercel", level: 70, icon: "Cloud" },
      { name: "Netlify", level: 70, icon: "Cloud" },
    ],
  },
];

// Projects Data
export const projects = [
  {
    id: 1,
    title: "TypingGameWeb",
    description:
      "This game aims to help improve typing by using a game (there will be more in the future) for this purpose.",
    image: typingWeb,
    technologies: ["Html", "Css", "JavaScript"],
    githubUrl: "https://github.com/OrichalcosShunnoros/TypingGameWeb",
    role: "Developer",
  },
  {
    id: 2,
    title: "consoleChat",
    description:
      "This is a chat application based on sockets designed to enable real-time communication between multiple clients connected to a central server.",
    image: consoleChat,
    technologies: ["Python", "Sockets"],
    githubUrl: "https://github.com/OrichalcosShunnoros/consoleChat",
    role: "Developer",
  },
  {
    id: 3,
    title: "PyGen",
    description:
      "This application is a compendium of utilities, it is composed of an application that generates QR codes, an application that downloads videos, and another that downloads audio or, failing that, converts an MP4 to MP3.",
    image: pyGen,
    technologies: ["Python", "Tkinter"],
    githubUrl: "https://github.com/OrichalcosShunnoros/pyGen",
    role: "Developer",
  },
  {
    id: 4,
    title: "miniCodeEditor",
    description:
      "This game aims to help improve typing by using a game (there will be more in the future) for this purpose.",
    image: miniCode,
    technologies: ["Python", "Tkinter", "Jedi"],
    githubUrl: "https://github.com/OrichalcosShunnoros/miniCodeEditor",
    role: "Developer",
  },
  {
    id: 5,
    title: "codeRun",
    description:
      "CodeRun is a desktop-grade Electron-powered web application that allows you to run JavaScript and Python code directly in the browser using Python and the built-in JavaScript engine.",
    image: codeRun,
    technologies: ["Html", "Css", "JavaScript", "Electron"],
    githubUrl: "https://github.com/OrichalcosShunnoros/codeRun",
    role: "Developer",
  },
  {
    id: 6,
    title: "JSX2Native (In development)",
    description: `JSX2Native is a code converter that transforms components written in JSX for React.js into code compatible with React Native. 
    Its goal is to facilitate the migration of web projects to mobile applications without the need to rewrite the basic structure of components.`,
    image: jsx2native,
    technologies: ["Html", "Css", "JavaScript", "React.js"],
    githubUrl: "https://github.com/OrichalcosShunnoros/JSX2Native",
    role: "Developer",
  },
];

// About Data
export const about = {
  summary: `Software Analyst and Developer interested in creating effective and efficient solutions. 
  I have experience in JavaScript, React.js, Python, and backend technologies such as Node.js and Express. 
  I specialize in building applications that solve real problems. 
  My knowledge of SQL and NoSQL databases, such as PostgreSQL and MongoDB, allows me to manage data optimally. 
  I'm always looking to learn more and collaborate on projects contributing innovation.`,
  philosophy: `I believe in writing clean, maintainable code and staying up-to-date with the latest technologies. 
    My approach focuses on creating scalable solutions that solve real-world problems.`,
  experience: [
    {
      title: "Developer",
      company: "Self-employed",
      period: "2024 - Present",
      description: "Development of web, small desktop and mobile applications.",
    },
  ],
};
