import React from 'react';
import { Users, Target, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen pt-20 pb-20">
       <div className="max-w-4xl mx-auto px-4 sm:px-6">
           <div className="text-center mb-16">
               <h1 className="text-4xl md:text-5xl font-bold mb-6">About <span className="text-brand-blue">Q-Web Solution</span></h1>
               <p className="text-xl text-gray-400 leading-relaxed">
                   We are a team of passionate developers, designers, and digital strategists committed to helping businesses thrive in the digital age.
               </p>
           </div>

           <div className="grid md:grid-cols-3 gap-8 mb-20">
               <div className="text-center p-6 bg-white/5 rounded-2xl">
                   <div className="w-12 h-12 bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                       <Users className="text-blue-400 w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-2">Expert Team</h3>
                   <p className="text-gray-400 text-sm">Skilled professionals with years of experience in Lovable, Google AI Studio, Aura, Hostinger, and modern UI frameworks.</p>
               </div>
               <div className="text-center p-6 bg-white/5 rounded-2xl">
                    <div className="w-12 h-12 bg-purple-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                       <Target className="text-purple-400 w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-2">Goal Oriented</h3>
                   <p className="text-gray-400 text-sm">We don't just build websites; we build tools that solve business problems and drive revenue.</p>
               </div>
               <div className="text-center p-6 bg-white/5 rounded-2xl">
                    <div className="w-12 h-12 bg-green-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                       <Award className="text-green-400 w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-2">Quality First</h3>
                   <p className="text-gray-400 text-sm">Strict quality assurance testing ensures your site is bug-free, fast, and secure.</p>
               </div>
           </div>

           <div className="bg-black border border-gray-800 rounded-3xl p-8 md:p-12 text-center">
               <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
               <p className="text-gray-400 text-lg mb-8">
                   "To empower businesses of all sizes with affordable, high-quality, and scalable web solutions that bridge the gap between technology and growth."
               </p>
               <img 
                 src="https://picsum.photos/seed/office/800/400" 
                 alt="Our Office" 
                 className="w-full rounded-xl opacity-80"
               />
           </div>
       </div>
    </div>
  );
};

export default AboutPage;