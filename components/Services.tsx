import React from 'react';
import { ShoppingBag, Globe, Smartphone, RefreshCw, Search, ShieldCheck } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Business Websites',
    description: 'Professional, trustworthy websites designed to showcase your brand and services.',
    icon: Globe,
  },
  {
    id: '2',
    title: 'E-commerce Solutions',
    description: 'Full-featured online stores with secure payment gateways and inventory management.',
    icon: ShoppingBag,
  },
  {
    id: '3',
    title: 'Website Redesign',
    description: 'Transform your outdated site into a modern, high-converting digital asset.',
    icon: RefreshCw,
  },
  {
    id: '4',
    title: 'Mobile-Friendly Design',
    description: 'Responsive layouts that look perfect on phones, tablets, and desktops.',
    icon: Smartphone,
  },
  {
    id: '5',
    title: 'SEO Optimization',
    description: 'Rank higher on Google and attract more organic traffic to your business.',
    icon: Search,
  },
  {
    id: '6',
    title: 'Maintenance & Support',
    description: '24/7 security monitoring, updates, and technical support for peace of mind.',
    icon: ShieldCheck,
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="text-brand-blue">Services</span>
          </h2>
          <p className="text-gray-400 text-lg">
            We provide end-to-end web solutions tailored to your specific business needs. 
            From design to deployment, we cover it all.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="group bg-brand-card border border-white/5 p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-blue/10"
            >
              <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue/20 transition-colors">
                <service.icon className="w-7 h-7 text-brand-blue group-hover:text-brand-accent transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;