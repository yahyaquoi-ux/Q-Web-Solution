import React from 'react';
import Services from '../components/Services';
import Process from '../components/Process';

const ServicesPage: React.FC = () => {
  return (
    <div className="pt-10">
      <div className="bg-brand-dark py-12 text-center">
         <h1 className="text-4xl font-bold text-white mb-4">Our Expertise</h1>
         <p className="text-gray-400 max-w-2xl mx-auto px-4">From simple landing pages to complex web applications, we have the skills to bring your ideas to life.</p>
      </div>
      <Services />
      <Process />
    </div>
  );
};

export default ServicesPage;