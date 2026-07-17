'use client';

import React from 'react';
import { AppContainer } from '../../components/layout/AppContainer';

interface Shop {
  id: string;
  name: string;
  distance: string;
  status: 'Open' | 'Busy' | 'Closed';
  rating: number;
}

const MOCK_SHOPS: Shop[] = [
  { id: '1', name: 'Fold&Go Express - Payatas Hub', distance: '0.8 km away', status: 'Open', rating: 4.9 },
  { id: '2', name: 'Fold&Go Premium - Commonwealth', distance: '2.4 km away', status: 'Busy', rating: 4.7 },
  { id: '3', name: 'Fold&Go Automated - Batasan', distance: '4.1 km away', status: 'Closed', rating: 4.8 },
];

export const ShopSelectionScreen: React.FC<{ onSelectShop: (id: string) => void }> = ({ onSelectShop }) => {
  return (
    <AppContainer className="p-6">
      <header className="pt-4 pb-6">
        <p className="text-xs font-mono text-blue-400 uppercase tracking-wider">Select Location</p>
        <h1 className="text-2xl font-bold text-white tracking-tight mt-1">Nearby Fold&Go Hubs</h1>
      </header>

      {/* Search Bar alternative layout layer element */}
      <div className="mb-6">
        <input 
          type="text" 
          placeholder="Search locations or zip codes..." 
          className="w-full bg-slate-850 border border-slate-700/60 rounded-xl px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
        />
      </div>

      {/* Grid view wrapper matching responsive media queries definitions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto no-scrollbar pb-6">
        {MOCK_SHOPS.map((shop) => (
          <div 
            key={shop.id}
            onClick={() => shop.status !== 'Closed' && onSelectShop(shop.id)}
            className={`p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
              shop.status === 'Closed' 
                ? 'bg-slate-900/40 border-slate-800/40 opacity-50 cursor-not-allowed' 
                : 'bg-slate-850 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60 active:scale-[0.98]'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs px-2.5 py-1 rounded-md font-semibold tracking-wide ${
                  shop.status === 'Open' ? 'bg-emerald-500/10 text-emerald-400' :
                  shop.status === 'Busy' ? 'bg-amber-500/10 text-amber-400' : 'bg-slate-800 text-slate-400'
                }`}>
                  {shop.status}
                </span>
                <span className="text-xs text-amber-400 font-medium flex items-center gap-1">
                  ⭐ {shop.rating}
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-100">{shop.name}</h3>
              <p className="text-sm text-slate-400 mt-1">{shop.distance}</p>
            </div>
            
            {shop.status !== 'Closed' && (
              <div className="mt-4 pt-3 border-t border-slate-800/50 flex justify-end">
                <span className="text-xs font-semibold text-blue-400 group-hover:text-blue-300 flex items-center gap-1">
                  Select Hub ➔
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </AppContainer>
  );
};