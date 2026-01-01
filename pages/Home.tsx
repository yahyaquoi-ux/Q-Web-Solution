import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import CostEstimator from '../components/CostEstimator';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import { Shield, Smartphone, Zap } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      
      {/* Trust Badges Section */}
      <section className="py-12 bg-black border-y border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
             <div className="flex flex-col items-center">
                <Shield className="w-8 h-8 text-green-500 mb-2" />
                <h4 className="font-bold text-white">SSL Secured</h4>
                <p className="text-sm text-gray-500">Every site comes with enterprise-grade security</p>
             </div>
             <div className="flex flex-col items-center">
                <Zap className="w-8 h-8 text-yellow-500 mb-2" />
                <h4 className="font-bold text-white">Lightning Fast</h4>
                <p className="text-sm text-gray-500">Optimized for speed and Core Web Vitals</p>
             </div>
             <div className="flex flex-col items-center">
                <Smartphone className="w-8 h-8 text-blue-500 mb-2" />
                <h4 className="font-bold text-white">Mobile First</h4>
                <p className="text-sm text-gray-500">Perfect experience on all devices</p>
             </div>
          </div>
        </div>
      </section>

      <Projects />
      <Process />
      <CostEstimator />
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-black text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8">Let's discuss your project and create something amazing together.</p>
          <a href="#/contact" className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl">
            Book Free Consultation
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;