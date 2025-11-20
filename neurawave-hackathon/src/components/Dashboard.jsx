import React from 'react';
import { Settings, Zap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Dashboard({ user, onDailyCheckIn, onRecommendations }) {
  return (
    <div className="h-full flex flex-col bg-slate-50">
      {/* Header */}
      <div className="p-6 flex justify-between items-center bg-white shadow-sm z-10">
        <div>
            <div className="text-xs text-slate-400 font-bold uppercase tracking-wide">Welcome back</div>
            <h1 className="text-xl font-bold text-slate-800">{user?.firstName || "User"} {user?.lastName || ""}</h1>
        </div>
        <button className="p-2 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors">
            <Settings size={20} className="text-slate-600" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        
        {/* Migraine Probability Circle - The "Hero" */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
            {/* Decorative blur */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-50"></div>
            
            <div className="flex flex-col items-center relative z-10">
                <h3 className="text-blue-200 text-sm font-medium mb-4 uppercase tracking-widest">Daily Probability</h3>
                
                {/* Animated Circle */}
                <div className="relative w-48 h-48 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                        <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-700" />
                        <motion.circle 
                            cx="96" cy="96" r="88" 
                            stroke="currentColor" strokeWidth="12" fill="transparent" 
                            className="text-teal-400"
                            strokeDasharray="552"
                            strokeDashoffset="552"
                            initial={{ strokeDashoffset: 552 }}
                            animate={{ strokeDashoffset: 552 - (552 * 0.5) }} // 50% filled
                            transition={{ duration: 2, ease: "easeOut" }}
                            strokeLinecap="round"
                        />
                    </svg>
                    <div className="text-center">
                        <span className="text-5xl font-bold">50%</span>
                        <p className="text-xs text-slate-400 mt-1">Moderate Risk</p>
                    </div>
                </div>

                <button onClick={onDailyCheckIn} className="mt-8 flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium transition-all border border-white/10">
                    <Zap size={16} className="text-yellow-400" />
                    <span>Log Daily Vitals</span>
                </button>
            </div>
        </div>

        {/* History Section */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center space-x-2 mb-4 text-slate-800">
                <Calendar size={20} className="text-blue-500" />
                <h3 className="font-bold">History</h3>
            </div>
            {/* Static Calendar Grid Placeholder */}
            <div className="grid grid-cols-7 gap-2 text-center text-xs font-medium text-slate-400 mb-2">
                <div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div><div>S</div>
            </div>
            <div className="grid grid-cols-7 gap-2">
                {[...Array(7)].map((_, i) => (
                    <div key={i} className="aspect-square rounded-lg bg-slate-50 flex items-center justify-center text-sm text-slate-600 hover:bg-blue-50 transition-colors border border-slate-100 relative">
                        {14 + i}
                        {/* Fake data dots */}
                        <div className={`absolute bottom-1 w-1.5 h-1.5 rounded-full ${i % 2 === 0 ? 'bg-teal-400' : 'bg-orange-400'}`}></div>
                    </div>
                ))}
            </div>
        </div>

        {/* Recommendation CTA */}
        <button onClick={onRecommendations} className="w-full py-4 bg-white border-2 border-blue-100 rounded-2xl text-blue-600 font-bold shadow-sm hover:shadow-md hover:border-blue-200 transition-all flex items-center justify-center space-x-2">
            <span>View AI Recommendations</span>
            <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

import { ChevronRight } from 'lucide-react';