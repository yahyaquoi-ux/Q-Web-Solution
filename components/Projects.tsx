import React, { useState } from 'react';
import { X, ExternalLink, Eye } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Corp',
    category: 'Business',
    imageUrl: 'https://picsum.photos/seed/bus1/800/600',
    description: 'A corporate website for a financial consulting firm.'
  },
  {
    id: '2',
    title: 'Bella Salon',
    category: 'Salon',
    imageUrl: 'https://picsum.photos/seed/salon1/800/600',
    description: 'Elegant booking platform for a luxury hair salon.'
  },
  {
    id: '3',
    title: 'The Grill House',
    category: 'Restaurant',
    imageUrl: 'https://picsum.photos/seed/food1/800/600',
    description: 'Restaurant website with digital menu and table reservation.'
  },
  {
    id: '4',
    title: 'Alex Designer',
    category: 'Portfolio',
    imageUrl: 'https://picsum.photos/seed/port1/800/600',
    description: 'Personal portfolio for a graphic designer.'
  },
  {
    id: '5',
    title: 'TechStart',
    category: 'Business',
    imageUrl: 'https://picsum.photos/seed/techstart/800/600',
    description: 'Landing page for a SaaS startup.'
  },
  {
    id: '6',
    title: 'Urban Wear',
    category: 'Business', // Using Business as proxy for e-commerce in this simple categorization
    imageUrl: 'https://picsum.photos/seed/shop1/800/600',
    description: 'Minimalist e-commerce store for street wear.'
  }
];

const categories = ['All', 'Business', 'Salon', 'Restaurant', 'Portfolio'];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Recent <span className="text-brand-blue">Projects</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-brand-blue text-white shadow-lg shadow-blue-900/30' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col p-6 text-center backdrop-blur-sm">
                <h3 className="text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.description}</p>
                <button className="bg-brand-blue text-white px-4 py-2 rounded-full flex items-center space-x-2 text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100 hover:bg-blue-600">
                  <Eye className="w-4 h-4" />
                  <span>Preview</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Preview Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-brand-card w-full max-w-5xl h-[85vh] rounded-2xl flex flex-col border border-white/10 shadow-2xl overflow-hidden animate-fade-in">
            {/* Modal Header */}
            <div className="p-4 border-b border-white/10 flex justify-between items-center bg-gray-900">
              <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-gray-400 text-sm font-mono truncate">
                  https://q-web-demo.com/projects/{selectedProject.category.toLowerCase()}/{selectedProject.id}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                 <button className="text-gray-400 hover:text-white flex items-center text-sm space-x-1">
                    <ExternalLink className="w-4 h-4" />
                    <span className="hidden sm:inline">Open in new tab</span>
                 </button>
                 <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 hover:text-white p-1 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            {/* Modal Content - Simulated Website */}
            <div className="flex-1 overflow-y-auto bg-white relative">
                {/* Simulated Content Image - In a real app this might be an iframe or detailed case study */}
                <div className="min-h-full">
                    <div className="relative">
                        <img 
                            src={selectedProject.imageUrl} 
                            alt="Hero" 
                            className="w-full h-[600px] object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <h1 className="text-6xl font-bold text-white shadow-lg">{selectedProject.title}</h1>
                        </div>
                    </div>
                    <div className="max-w-4xl mx-auto py-20 px-8 text-gray-800 space-y-8">
                         <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                         <div className="h-4 bg-gray-200 rounded w-full"></div>
                         <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                         <div className="grid grid-cols-3 gap-8 pt-12">
                            <div className="h-40 bg-gray-100 rounded-lg"></div>
                            <div className="h-40 bg-gray-100 rounded-lg"></div>
                            <div className="h-40 bg-gray-100 rounded-lg"></div>
                         </div>
                    </div>
                     <div className="bg-gray-100 py-20 text-center">
                         <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to build something like this?</h2>
                         <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold">Contact Q-Web Solution</button>
                     </div>
                </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;