import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-brand-dark z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-sm animate-fade-in">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-gray-300">Accepting new projects for {new Date().getFullYear()}</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-tight animate-slide-up">
              Professional <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue via-brand-accent to-white">
                Website Development
              </span> <br />
              for Modern Businesses
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              We transform your vision into a digital reality. Fast, secure, and scalable websites designed to help your business grow.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link 
                to="/pricing"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-blue to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white rounded-lg font-bold shadow-lg shadow-blue-900/30 transition-all transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <span>Get a Website</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/projects"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-bold backdrop-blur-sm transition-all flex items-center justify-center space-x-2"
              >
                <Code className="w-5 h-5" />
                <span>View Our Work</span>
              </Link>
            </div>
          </div>

          <div className="hidden lg:block relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-xl bg-gradient-to-br from-gray-800 to-black p-4 border border-gray-800 shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500">
               {/* Mock Browser Window */}
               <div className="bg-black rounded-lg overflow-hidden border border-gray-800 aspect-[4/3]">
                 <div className="bg-gray-900 px-4 py-2 flex items-center space-x-2 border-b border-gray-800">
                   <div className="w-3 h-3 rounded-full bg-red-500"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500"></div>
                   <div className="ml-4 flex-1 bg-gray-800 rounded-md h-6"></div>
                 </div>
                 <div className="relative w-full h-full">
                    <img 
                      src="https://picsum.photos/seed/tech/800/600" 
                      alt="Modern Website Preview" 
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;