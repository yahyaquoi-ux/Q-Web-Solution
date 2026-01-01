import React from 'react';
import { useNavigate } from 'react-router-dom';
import CostEstimator from '../components/CostEstimator';
import { Check } from 'lucide-react';

const PricingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleChoosePlan = (planName: string) => {
    navigate('/contact', { state: { plan: planName } });
  };

  return (
    <div className="pt-10">
      <div className="bg-brand-dark py-16 text-center">
         <h1 className="text-4xl font-bold text-white mb-4">Transparent Pricing</h1>
         <p className="text-gray-400 max-w-2xl mx-auto px-4 mb-12">Choose a package that fits your needs or use our estimator for a custom quote.</p>
         
         {/* Static Pricing Cards */}
         <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 mb-20 text-left">
            {[
                { name: 'Starter', price: '$70 - $100', features: ['1-2 Pages Website', 'Mobile Responsive', 'Contact Form', '1 Month Support'] },
                { name: 'Business', price: '$200 - $350', features: ['Up to 10 Pages', 'SEO Optimization', 'CMS Integration', 'Social Media Links', '3 Months Support'], active: true },
                { name: 'E-commerce', price: '$400 - $550', features: ['Unlimited Products', 'Payment Gateway', 'Inventory System', 'User Accounts', '6 Months Support'] },
            ].map((plan) => (
                <div key={plan.name} className={`flex flex-col h-full rounded-2xl p-8 border ${plan.active ? 'bg-gradient-to-b from-gray-900 to-black border-brand-blue ring-1 ring-brand-blue relative' : 'bg-black border-gray-800'}`}>
                    {plan.active && <div className="absolute top-0 right-0 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">POPULAR</div>}
                    <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold text-white mb-6">{plan.price}</div>
                    <ul className="space-y-4 mb-8 flex-grow">
                        {plan.features.map(f => (
                            <li key={f} className="flex items-center text-gray-400 text-sm">
                                <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> 
                                <span>{f}</span>
                            </li>
                        ))}
                    </ul>
                    <button 
                        onClick={() => handleChoosePlan(plan.name)}
                        className={`w-full py-3 rounded-lg font-bold transition-all transform active:scale-95 ${
                            plan.active 
                            ? 'bg-brand-blue text-white hover:bg-blue-600 shadow-lg shadow-blue-900/20' 
                            : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                    >
                        Choose Plan
                    </button>
                </div>
            ))}
         </div>
      </div>
      <CostEstimator />
    </div>
  );
};

export default PricingPage;