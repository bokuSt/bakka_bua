"use client";

import React, { useState, useEffect } from 'react';
import { Article } from '../../lib/types';
import { ARTICLES } from '../../lib/constants';
// import { Service } from '../../lib/sevices';

const LampView: React.FC = () => {
  const [readingArticle, setReadingArticle] = useState<Article | null>(null);
  const [summary, setSummary] = useState<string | null>(null);
  const [loadingSummary, setLoadingSummary] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredReads = ARTICLES;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredReads.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [featuredReads.length]);

  const handleSummarize = async (content: string) => {
    setLoadingSummary(true);
    const res = await Service.summarizeArticle(content);
    setSummary(res);
    setLoadingSummary(false);
  };

  return (
    <div className="bg-[#fcfaf7] min-h-screen pb-20 font-serif">
      {/* Featured Slideshow */}
      {!readingArticle && (
        <section className="relative w-full h-[550px] bg-slate-900 border-b border-amber-100 overflow-hidden">
          {featuredReads.map((article, idx) => (
            <div 
              key={article.id}
              className={`absolute inset-0 transition-all duration-1000 ${
                idx === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <img src={article.image} className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-12 duration-1000">
                  <span className="text-amber-400 font-sans text-xs uppercase tracking-[0.4em] mb-4 block">Editorial Feature</span>
                  <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    {article.title}
                  </h2>
                  <p className="text-slate-300 text-lg md:text-xl font-sans mb-8 max-w-xl mx-auto italic">
                    {article.excerpt}
                  </p>
                  <button 
                    onClick={() => setReadingArticle(article)}
                    className="bg-amber-600 text-white font-sans font-bold px-10 py-4 rounded-full hover:bg-amber-500 transition-all shadow-xl"
                  >
                    READ ARTICLE
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-6 items-center">
            {featuredReads.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentSlide(i)}
                className={`text-xs font-sans font-bold transition-all ${i === currentSlide ? 'text-amber-400 scale-125' : 'text-white/40 hover:text-white'}`}
              >
                0{i + 1}
              </button>
            ))}
          </div>
        </section>
      )}

      <header className="max-w-4xl mx-auto px-4 pt-16 pb-12 text-center border-b border-amber-100 mb-12">
        <h1 className="text-7xl font-bold text-amber-900 mb-4 tracking-tight">LAMP</h1>
        <p className="text-amber-800/60 font-sans tracking-widest text-xs uppercase">Literature • Arts • Multimedia • Portal</p>
      </header>

      <main className="max-w-4xl mx-auto px-4">
        {readingArticle ? (
          <article className="animate-in slide-in-from-bottom-8 duration-700">
            <button 
              onClick={() => { setReadingArticle(null); setSummary(null); }}
              className="mb-8 flex items-center text-amber-800/50 hover:text-amber-800 font-sans text-sm transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
              Back to Catalog
            </button>
            <img src={readingArticle.image} className="w-full h-80 object-cover rounded-3xl mb-12 shadow-sm" alt={readingArticle.title} />
            <div className="flex items-center space-x-4 mb-6 font-sans text-xs uppercase tracking-widest text-amber-600 font-bold">
              <span>{readingArticle.category}</span>
              <span className="w-1 h-1 bg-amber-200 rounded-full"></span>
              <span>{readingArticle.date}</span>
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-6 leading-[1.1]">{readingArticle.title}</h2>
            <p className="text-lg text-slate-500 mb-12 font-sans italic">By {readingArticle.author}</p>

            <div className="bg-white/50 border border-amber-100 rounded-3xl p-8 mb-12 relative">
               <div className="absolute top-4 right-4 bg-amber-50 px-2 py-1 rounded text-[10px] font-sans font-bold text-amber-600">AI ASSISTANT</div>
               <h3 className="text-sm font-sans font-bold uppercase tracking-widest mb-4 text-amber-800">Quick Summary</h3>
               {summary ? (
                 <p className="text-amber-900 leading-relaxed italic">"{summary}"</p>
               ) : (
                 <button 
                  onClick={() => handleSummarize(readingArticle.content)}
                  disabled={loadingSummary}
                  className="font-sans text-sm bg-amber-100 hover:bg-amber-200 text-amber-800 px-4 py-2 rounded-xl transition-all flex items-center space-x-2"
                 >
                   {loadingSummary ? (
                     <div className="w-4 h-4 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
                   ) : (
                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                   )}
                   <span>Generate AI Summary</span>
                 </button>
               )}
            </div>

            <div className="prose prose-amber lg:prose-xl text-slate-800 leading-relaxed font-serif whitespace-pre-wrap">
              {readingArticle.content}
              <p className="mt-8">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
            </div>
          </article>
        ) : (
          <div className="grid grid-cols-1 gap-12">
            {ARTICLES.map(article => (
              <div 
                key={article.id}
                className="group flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 cursor-pointer transition-transform hover:translate-y-[-4px]"
                onClick={() => setReadingArticle(article)}
              >
                <div className="w-full md:w-1/3 aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border-8 border-white">
                  <img src={article.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={article.title} />
                </div>
                <div className="w-full md:w-2/3">
                  <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-amber-600 font-bold mb-3">{article.category}</div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-amber-800 transition-colors leading-tight">{article.title}</h3>
                  <p className="font-sans text-sm text-slate-500 mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center space-x-4 font-sans text-[10px] text-slate-400 font-medium">
                    <span>{article.author}</span>
                    <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                    <span>5 MIN READ</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default LampView;
