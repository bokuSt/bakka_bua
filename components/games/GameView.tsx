"use client"

import React, { useState, useEffect } from 'react';
import { Game } from '../../lib/types';
import { GAMES } from '../../lib/constants';

const GamerView: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [gameTip, setGameTip] = useState<string | null>(null);
  const [loadingTip, setLoadingTip] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredGames = [...GAMES].reverse();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredGames.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [featuredGames.length]);

  const fetchTip = async (title: string) => {
    setLoadingTip(true);
    const tip = await Service.getGamingTip(title);
    setGameTip(tip);
    setLoadingTip(false);
  };

  const leaderboard = [
    { name: 'PixelKing', score: 12500, avatar: 'P' },
    { name: 'NeonSamurai', score: 11200, avatar: 'N' },
    { name: 'VoidWalker', score: 9800, avatar: 'V' },
    { name: 'CloudGhost', score: 8500, avatar: 'C' },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-gaming pb-20">
      {/* Dynamic Slideshow Hero */}
      <div className="relative h-[500px] w-full overflow-hidden border-b border-purple-500/30">
        {featuredGames.map((game, idx) => (
          <div 
            key={game.id}
            className={`absolute inset-0 transition-all duration-700 flex items-center justify-center ${
              idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-110 pointer-events-none'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10"></div>
            <img 
              src={game.image} 
              className="absolute inset-0 w-full h-full object-cover opacity-50 blur-[2px]"
              alt={game.title}
            />
            <div className="relative z-20 text-center px-4">
              <span className="inline-block px-3 py-1 rounded bg-fuchsia-600 text-[10px] font-bold uppercase tracking-widest mb-4 animate-pulse">
                New on Nexus
              </span>
              <h2 className="text-7xl md:text-9xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-purple-400 mb-6 uppercase">
                {game.title}
              </h2>
              <div className="flex justify-center space-x-6 text-sm tracking-widest uppercase text-purple-300 mb-8 font-sans">
                <span>{game.genre}</span>
                <span className="text-purple-600">|</span>
                <span>{game.players} Active</span>
                <span className="text-purple-600">|</span>
                <span>{game.difficulty} Mode</span>
              </div>
              <button className="px-10 py-4 bg-white text-slate-950 rounded-full font-black hover:bg-purple-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                LAUNCH SIMULATION
              </button>
            </div>
          </div>
        ))}
        
        {/* Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
          {featuredGames.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrentSlide(i)}
              className={`h-1 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-purple-500 w-12' : 'bg-white/20 w-4'}`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-4 gap-8 mt-12 relative z-30">
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GAMES.map(game => (
              <div 
                key={game.id}
                className="group relative rounded-3xl bg-slate-900 border border-slate-800 p-6 hover:border-purple-500/50 transition-all cursor-pointer overflow-hidden shadow-2xl"
                onClick={() => { setSelectedGame(game); fetchTip(game.title); }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="px-2 py-1 rounded-md bg-purple-500/20 text-purple-400 text-[10px] font-bold uppercase mb-2 inline-block">
                      {game.genre}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight">{game.title}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-slate-500 uppercase">Difficulty</p>
                    <p className={`text-xs font-bold ${game.difficulty === 'Hard' ? 'text-rose-500' : 'text-emerald-500'}`}>{game.difficulty}</p>
                  </div>
                </div>

                <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                  <img src={game.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                      PLAY NOW
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-slate-400 text-xs font-sans">
                  <span>{game.players} players active</span>
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-6 h-6 rounded-full border border-slate-800 bg-slate-700 flex items-center justify-center text-[10px] font-bold">U</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-slate-900 rounded-3xl border border-slate-800 p-6 shadow-2xl">
            <h4 className="text-sm font-bold uppercase tracking-widest text-purple-400 mb-6 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              Leaderboard
            </h4>
            <div className="space-y-4 font-sans">
              {leaderboard.map((user, idx) => (
                <div key={user.name} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-xs text-slate-600 w-4">{idx + 1}</span>
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center font-bold text-xs">{user.avatar}</div>
                    <span className="text-sm font-medium">{user.name}</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400">{user.score.toLocaleString()}</span>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-2 text-xs text-slate-500 border border-slate-800 rounded-xl hover:text-purple-400 transition-colors">
              VIEW ALL
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <span className="animate-pulse bg-white/20 px-2 py-1 rounded text-[8px] font-bold">LIVE AI</span>
            </div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-2">Pro Gaming Tip</h4>
            <p className="text-[10px] text-white/60 mb-4 font-sans uppercase">Powered by Gemini-3 Flash</p>
            {loadingTip ? (
              <div className="h-20 flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
              </div>
            ) : gameTip ? (
              <p className="text-sm text-white font-sans italic leading-relaxed">"{gameTip}"</p>
            ) : (
              <p className="text-sm text-white/40 font-sans italic leading-relaxed">Select a game to see strategy insights.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamerView;
