import React from 'react';
import Projects from '../components/Projects';

const ProjectsPage: React.FC = () => {
  return (
    <div className="pt-10">
      <div className="bg-brand-dark py-12 text-center">
         <h1 className="text-4xl font-bold text-white mb-4">Our Portfolio</h1>
         <p className="text-gray-400 max-w-2xl mx-auto px-4">Check out some of our recent work helping businesses achieve their digital goals.</p>
      </div>
      <Projects />
    </div>
  );
};

export default ProjectsPage;