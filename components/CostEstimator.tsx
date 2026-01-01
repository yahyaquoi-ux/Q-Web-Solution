import React, { useState, useEffect } from 'react';
import { Calculator, Check, Info } from 'lucide-react';

const CostEstimator: React.FC = () => {
  const [type, setType] = useState('landing');
  const [pages, setPages] = useState(5);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [total, setTotal] = useState(0);

  const basePrices: Record<string, number> = {
    landing: 70,
    business: 200,
    ecommerce: 400,
  };

  const featuresList = [
    { id: 'seo', name: 'SEO Optimization', price: 50 },
    { id: 'cms', name: 'Content Management (CMS)', price: 60 },
    { id: 'logo', name: 'Logo Design', price: 30 },
    { id: 'copy', name: 'Professional Copywriting', price: 40 },
    { id: 'chat', name: 'Live Chat Integration', price: 20 },
    { id: 'analytics', name: 'Advanced Analytics', price: 30 },
  ];

  useEffect(() => {
    let price = basePrices[type];
    
    // Page cost (first 5 included in base except landing which includes 2)
    const includedPages = type === 'landing' ? 2 : 5;
    const extraPages = Math.max(0, pages - includedPages);
    price += extraPages * 15; // Reduced per-page cost to match new pricing model

    // Features cost
    selectedFeatures.forEach(fid => {
        const feature = featuresList.find(f => f.id === fid);
        if (feature) price += feature.price;
    });

    setTotal(price);
  }, [type, pages, selectedFeatures]);

  const toggleFeature = (id: string) => {
    setSelectedFeatures(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-24 bg-gradient-to-b from-brand-dark to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Website Cost <span className="text-brand-blue">Estimator</span></h2>
          <p className="text-gray-400">Get an instant estimate for your project. No hidden fees.</p>
        </div>

        <div className="bg-brand-card border border-white/5 rounded-2xl p-6 md:p-10 shadow-2xl">
            {/* Website Type */}
            <div className="mb-8">
                <label className="block text-sm font-medium text-gray-400 mb-3">Type of Website</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { id: 'landing', label: 'Landing Page', desc: 'Single page promotional site' },
                        { id: 'business', label: 'Business Website', desc: 'Multi-page corporate site' },
                        { id: 'ecommerce', label: 'E-commerce', desc: 'Online store with payments' }
                    ].map((t) => (
                        <button
                            key={t.id}
                            onClick={() => setType(t.id)}
                            className={`p-4 rounded-xl border text-left transition-all ${
                                type === t.id 
                                ? 'bg-brand-blue/10 border-brand-blue ring-1 ring-brand-blue' 
                                : 'bg-black/40 border-white/10 hover:border-white/30'
                            }`}
                        >
                            <div className={`font-bold mb-1 ${type === t.id ? 'text-brand-accent' : 'text-white'}`}>{t.label}</div>
                            <div className="text-xs text-gray-500">{t.desc}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Pages Slider */}
            <div className="mb-8">
                <div className="flex justify-between mb-2">
                    <label className="text-sm font-medium text-gray-400">Number of Pages</label>
                    <span className="text-brand-accent font-bold">{pages} Pages</span>
                </div>
                <input 
                    type="range" 
                    min="1" 
                    max="50" 
                    value={pages} 
                    onChange={(e) => setPages(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-brand-blue"
                />
                <div className="flex justify-between text-xs text-gray-600 mt-2">
                    <span>1</span>
                    <span>50</span>
                </div>
            </div>

            {/* Extra Features */}
            <div className="mb-10">
                <label className="block text-sm font-medium text-gray-400 mb-3">Extra Features</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {featuresList.map((feature) => (
                        <button
                            key={feature.id}
                            onClick={() => toggleFeature(feature.id)}
                            className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                                selectedFeatures.includes(feature.id)
                                ? 'bg-brand-blue/10 border-brand-blue text-white'
                                : 'bg-black/20 border-white/5 text-gray-400 hover:bg-white/5'
                            }`}
                        >
                            <span className="text-sm">{feature.name}</span>
                            {selectedFeatures.includes(feature.id) && <Check className="w-4 h-4 text-brand-blue" />}
                        </button>
                    ))}
                </div>
            </div>

            {/* Total */}
            <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between">
                <div className="mb-4 sm:mb-0">
                    <div className="text-sm text-gray-500 mb-1">Estimated Total</div>
                    <div className="text-4xl font-bold text-white">${total.toLocaleString()}</div>
                </div>
                <button className="w-full sm:w-auto bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-lg font-bold transition-colors flex items-center justify-center space-x-2">
                    <Calculator className="w-5 h-5" />
                    <span>Get Exact Quote</span>
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CostEstimator;