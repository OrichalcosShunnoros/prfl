import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";

export const App = () => {
  return (
    <div className="min-h-screen bg-gray-300 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
};
