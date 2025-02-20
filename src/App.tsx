import { Code2, User } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { ProjectCard } from './components/ProjectCard';
import type { Project } from './types';

// Example projects - replace with your own
const projects: Project[] = [
  {
    id: '1',
    title: 'Example Project',
    description: 'A sample project to showcase the card layout.',
    imageUrl: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97',
    githubUrl: 'https://github.com',
    technologies: ['React', 'TypeScript', 'Tailwind'],
  },
  // Add more projects here
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      <header className="sticky top-0 bg-white dark:bg-gray-800 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Portfolio</h1>
          <ThemeToggle />
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section id="about" className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <User className="w-6 h-6 text-blue-500" />
            <h2 className="text-3xl font-bold">About Me</h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            [Your introduction goes here - Write a brief description about yourself,
            your skills, and what you're passionate about]
          </p>
        </section>

        <section id="projects">
          <div className="flex items-center gap-2 mb-6">
            <Code2 className="w-6 h-6 text-blue-500" />
            <h2 className="text-3xl font-bold">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;