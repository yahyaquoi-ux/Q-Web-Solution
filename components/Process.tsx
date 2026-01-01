import React from 'react';
import { MessageSquare, PenTool, Code, CheckCircle, Rocket } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Consultation',
    description: 'We discuss your business goals, target audience, and requirements.'
  },
  {
    icon: PenTool,
    title: 'Planning & Design',
    description: 'We create a visual sitemap and modern UI designs for your approval.'
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Our coding experts build your site using the latest secure technologies.'
  },
  {
    icon: CheckCircle,
    title: 'Review & Test',
    description: 'You review the site. We test performance, mobile responsiveness, and SEO.'
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'We deploy your site to the live server and provide training on updates.'
  }
];

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">How It <span className="text-brand-blue">Works</span></h2>
          <p className="text-gray-400">Our streamlined 5-step process ensures a smooth journey from concept to launch.</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-800 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gray-900 border-2 border-brand-blue flex items-center justify-center mb-6 shadow-lg shadow-blue-900/20">
                  <step.icon className="w-8 h-8 text-brand-accent" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;