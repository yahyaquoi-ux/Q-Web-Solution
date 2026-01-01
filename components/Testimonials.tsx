import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'Modern Corp',
    content: "Q-Web Solution completely transformed our online presence. Our traffic increased by 200% within the first month of launching. Professional, fast, and incredibly skilled.",
    rating: 5
  },
  {
    id: '2',
    name: 'David Chen',
    role: 'Owner',
    company: 'The Grill House',
    content: "The best investment I've made for my restaurant. The online reservation system works perfectly, and customers love the menu design. Highly recommended!",
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Davis',
    role: 'Founder',
    company: 'Bella Salon',
    content: "They understood my brand aesthetic perfectly. communication was seamless, and the final website exceeded my expectations. A true partner in growth.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Client <span className="text-brand-blue">Testimonials</span></h2>
          <p className="text-gray-400">Don't just take our word for it. Here's what our partners say.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white/5 backdrop-blur-sm border border-white/5 p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <Quote className="w-10 h-10 text-brand-blue mb-6 opacity-50" />
              <p className="text-gray-300 mb-6 italic leading-relaxed">"{t.content}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-xs text-brand-accent">{t.role}, {t.company}</div>
                </div>
                <div className="flex">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;