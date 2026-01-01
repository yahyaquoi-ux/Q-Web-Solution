import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';

const ContactPage: React.FC = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check for passed state from Pricing page
  useEffect(() => {
    if (location.state && location.state.plan) {
      const plan = location.state.plan;
      let serviceType = 'General Inquiry';

      // Map pricing plans to service dropdown options
      if (plan === 'E-commerce') serviceType = 'E-commerce Store';
      else if (plan === 'Business') serviceType = 'Business Website';
      else if (plan === 'Starter') serviceType = 'Business Website';

      setFormData(prev => ({
        ...prev,
        service: serviceType,
        message: `I am interested in the ${plan} package.`
      }));
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mwvpveyz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          service: 'General Inquiry',
          message: ''
        });
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error sending message. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-brand-dark min-h-screen pt-20 pb-20">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16">
               <div>
                   <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In <span className="text-brand-blue">Touch</span></h1>
                   <p className="text-xl text-gray-400 mb-12">
                       Have a project in mind? We'd love to hear from you. Fill out the form or use our contact details below.
                   </p>

                   <div className="space-y-8">
                       <div className="flex items-start space-x-4">
                           <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                               <Phone className="w-6 h-6 text-brand-blue" />
                           </div>
                           <div>
                               <h3 className="text-lg font-bold text-white">Phone</h3>
                               <p className="text-gray-400">+231-770-025-099</p>
                               <p className="text-gray-500 text-sm">Mon-Fri 9am-6pm</p>
                           </div>
                       </div>
                       <div className="flex items-start space-x-4">
                           <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                               <Mail className="w-6 h-6 text-brand-blue" />
                           </div>
                           <div>
                               <h3 className="text-lg font-bold text-white">Email</h3>
                               <p className="text-gray-400">yahyaquoi@gmail.com</p>
                               <p className="text-gray-500 text-sm">24/7 Support</p>
                           </div>
                       </div>
                       <div className="flex items-start space-x-4">
                           <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                               <MapPin className="w-6 h-6 text-brand-blue" />
                           </div>
                           <div>
                               <h3 className="text-lg font-bold text-white">Office</h3>
                               <p className="text-gray-400">Airfield, Sinkor</p>
                               <p className="text-gray-500 text-sm">Monrovia-Liberia</p>
                           </div>
                       </div>
                   </div>
               </div>

               <div className="bg-black p-8 rounded-2xl border border-gray-800 shadow-2xl">
                   {submitted ? (
                       <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-fade-in">
                           <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                               <Send className="w-10 h-10 text-green-500" />
                           </div>
                           <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                           <p className="text-gray-400">We will get back to you within 24 hours.</p>
                           <button 
                             onClick={() => setSubmitted(false)}
                             className="mt-6 text-brand-blue hover:text-white transition-colors"
                           >
                             Send another message
                           </button>
                       </div>
                   ) : (
                       <form onSubmit={handleSubmit} className="space-y-6">
                           <div className="grid md:grid-cols-2 gap-6">
                               <div>
                                   <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                   <input 
                                     required
                                     name="name"
                                     type="text" 
                                     className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                                     placeholder="John Doe"
                                     value={formData.name}
                                     onChange={(e) => setFormData({...formData, name: e.target.value})}
                                   />
                               </div>
                               <div>
                                   <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                   <input 
                                     required
                                     name="email"
                                     type="email" 
                                     className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                                     placeholder="john@example.com"
                                     value={formData.email}
                                     onChange={(e) => setFormData({...formData, email: e.target.value})}
                                   />
                               </div>
                           </div>
                           
                           <div>
                               <label className="block text-sm font-medium text-gray-400 mb-2">Service Interested In</label>
                               <select 
                                 name="service"
                                 className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                                 value={formData.service}
                                 onChange={(e) => setFormData({...formData, service: e.target.value})}
                               >
                                   <option>General Inquiry</option>
                                   <option>Business Website</option>
                                   <option>E-commerce Store</option>
                                   <option>Redesign</option>
                                   <option>SEO Services</option>
                               </select>
                           </div>

                           <div>
                               <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                               <textarea 
                                 required
                                 name="message"
                                 rows={4}
                                 className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                                 placeholder="Tell us about your project..."
                                 value={formData.message}
                                 onChange={(e) => setFormData({...formData, message: e.target.value})}
                               ></textarea>
                           </div>

                           <button 
                             type="submit"
                             disabled={isSubmitting}
                             className="w-full bg-gradient-to-r from-brand-blue to-blue-700 text-white font-bold py-4 rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-900/30 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                           >
                               {isSubmitting ? (
                                 <>
                                   <Loader2 className="w-5 h-5 animate-spin" />
                                   <span>Sending...</span>
                                 </>
                               ) : (
                                 <>
                                   <span>Send Message</span>
                                   <Send className="w-5 h-5" />
                                 </>
                               )}
                           </button>
                       </form>
                   )}
               </div>
           </div>
       </div>
    </div>
  );
};

export default ContactPage;