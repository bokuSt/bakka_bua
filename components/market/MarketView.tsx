
import React, { useState, useEffect } from 'react';
import { Product } from '../../lib/types';
import { PRODUCTS } from '../../lib/constants';
// import { Service } from '../../lib/sevices';

interface MarketViewProps {
  onAddToCart: (p: Product) => void;
}

const MarketView: React.FC<MarketViewProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [aiAnalysis, setAiAnalysis] = useState<Record<string, string>>({});
  const [loadingAi, setLoadingAi] = useState<string | null>(null);
  const [addedProduct, setAddedProduct] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const trendingProducts = PRODUCTS.slice(0, 3);
  const categories = ['All', ...new Set(PRODUCTS.map(p => p.category))];
  const filteredProducts = selectedCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === selectedCategory);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % trendingProducts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [trendingProducts.length]);

  const handleAiDeepDive = async (product: Product) => {
    if (aiAnalysis[product.id]) return;
    setLoadingAi(product.id);
    const result = await Service.getProductAnalysis(product.name, product.description);
    setAiAnalysis(prev => ({ ...prev, [product.id]: result }));
    setLoadingAi(null);
  };

  const handleAdd = (product: Product) => {
    onAddToCart(product);
    setAddedProduct(product.id);
    setTimeout(() => setAddedProduct(null), 2000);
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Slideshow Section */}
      <section className="relative h-[400px] w-full bg-slate-100 overflow-hidden">
        {trendingProducts.map((product, idx) => (
          <div 
            key={product.id}
            className={`absolute inset-0 transition-opacity duration-1000 flex items-center ${idx === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
            <img src={product.image} alt={product.name} className="absolute right-0 w-2/3 h-full object-cover" />
            <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full">
              <div className="max-w-md">
                <span className="text-indigo-600 font-bold text-xs uppercase tracking-widest mb-2 block">Trending Choice</span>
                <h2 className="text-5xl font-black text-slate-900 mb-4">{product.name}</h2>
                <p className="text-slate-600 mb-8">{product.description}</p>
                <button 
                  onClick={() => handleAdd(product)}
                  className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-600 transition-colors shadow-lg"
                >
                  Shop Now — ${product.price}
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {trendingProducts.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === currentSlide ? 'bg-indigo-600 w-8' : 'bg-slate-300'}`}
            />
          ))}
        </div>
      </section>

      <header className="py-12 px-4 text-center bg-white border-b border-slate-200">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4 italic">theMarket</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">Discover a curated collection of high-end essentials and cutting-edge electronics designed for the modern professional.</p>
        
        <div className="mt-8 flex justify-center space-x-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat 
                ? 'bg-indigo-600 text-white shadow-lg' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 lg:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-slate-600 shadow-sm">
                  {product.category}
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="font-bold text-lg text-slate-800 mb-1">{product.name}</h3>
                <p className="text-slate-500 text-sm mb-4 h-10 line-clamp-2">{product.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl font-black text-indigo-600">${product.price}</span>
                  <button 
                    onClick={() => handleAiDeepDive(product)}
                    className="text-xs text-indigo-400 hover:text-indigo-600 flex items-center"
                  >
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>
                    AI Insights
                  </button>
                </div>

                {loadingAi === product.id && (
                  <div className="mb-4 p-3 bg-indigo-50 rounded-lg animate-pulse text-[10px] text-indigo-400 italic">
                    Gemini is analyzing market data...
                  </div>
                )}

                {aiAnalysis[product.id] && (
                  <div className="mb-4 p-3 bg-indigo-50 rounded-lg text-xs text-indigo-700 leading-relaxed italic border-l-2 border-indigo-500">
                    "{aiAnalysis[product.id]}"
                  </div>
                )}
                
                <button 
                  onClick={() => handleAdd(product)}
                  className={`w-full font-bold py-3 rounded-xl transition-all flex items-center justify-center space-x-2 ${
                    addedProduct === product.id 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                  }`}
                >
                  {addedProduct === product.id ? (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                      <span>Added!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                      <span>Add to Cart</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MarketView;
