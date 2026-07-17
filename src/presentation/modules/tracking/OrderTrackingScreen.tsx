'use client';

import React from 'react';
import { AppContainer } from '../../components/layout/AppContainer';

const TRACKING_STEPS = [
  { level: 1, title: 'Order Confirmed', desc: 'Hub has accepted and authorized the processing queue.', active: true, done: true },
  { level: 2, title: 'In the Washer', desc: 'Premium deep-cleaning cycling underway.', active: true, done: false },
  { level: 3, title: 'Expert Folding', desc: 'Meticulous folding step and crisp bundle seal packaging.', active: false, done: false },
  { level: 4, title: 'Out for Delivery', desc: 'Courier dispatch actively routing towards your coordinates.', active: false, done: false }
];

export const OrderTrackingScreen: React.FC<{ orderId: string; onBackToHome: () => void }> = ({ orderId, onBackToHome }) => {
  return (
    <AppContainer className="p-6 justify-between">
      <div>
        <header className="pt-4 pb-6 flex items-center justify-between border-b border-slate-800">
          <div>
            <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Active Tracking</p>
            <h1 className="text-xl font-bold text-white mt-0.5">Order #{orderId}</h1>
          </div>
          <button 
            onClick={onBackToHome}
            className="text-xs bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg text-slate-300 font-medium transition"
          >
            Close
          </button>
        </header>

        {/* Live Status Map/ETA Card Placeholder */}
        <div className="my-6 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 border border-blue-500/20 rounded-2xl p-5 flex items-center justify-between">
          <div>
            <p className="text-xs text-slate-400 uppercase tracking-wider font-medium">Estimated Handover</p>
            <h2 className="text-2xl font-black text-white mt-1">24 Mins</h2>
          </div>
          <div className="text-3xl animate-pulse">⚡</div>
        </div>

        {/* Status Vertical Tracker Line Component */}
        <div className="space-y-6 relative before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
          {TRACKING_STEPS.map((step) => (
            <div key={step.level} className="flex gap-4 relative items-start">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs z-10 border transition-all ${
                step.done 
                  ? 'bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-500/20' 
                  : step.active 
                    ? 'bg-slate-900 border-blue-500 text-blue-400 animate-pulse' 
                    : 'bg-slate-950 border-slate-800 text-slate-600'
              }`}>
                {step.done ? '✓' : step.level}
              </div>
              <div className="flex-1 pt-0.5">
                <h4 className={`text-base font-bold ${step.active ? 'text-slate-100' : 'text-slate-500'}`}>
                  {step.title}
                </h4>
                <p className={`text-xs mt-0.5 leading-relaxed ${step.active ? 'text-slate-400' : 'text-slate-600'}`}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pb-6">
        <div className="p-4 bg-slate-850 rounded-xl border border-slate-800 text-center text-xs text-slate-400">
          Need help? Contact Hub hotline via <span className="text-blue-400 underline font-medium cursor-pointer">Support Desk</span>
        </div>
      </div>
    </AppContainer>
  );
};