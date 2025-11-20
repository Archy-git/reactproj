import React from 'react';
import { ChevronLeft, RefreshCw, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Recommendations({ onBack }) {
  return (
    <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} className="h-full flex flex-col bg-slate-50">
      {/* Header */}
      <div className="p-6 flex items-center space-x-4 bg-white shadow-sm z-10">
        <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <ChevronLeft size={24} className="text-slate-600" />
        </button>
        <h1 className="text-lg font-bold text-slate-800">AI Insights</h1>
      </div>

      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        
        {/* AI Card Placeholder */}
        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-2xl text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20">
                <Sparkles size={64} />
            </div>
            <h2 className="font-bold text-lg mb-2 flex items-center"><Sparkles size={18} className="mr-2" /> Personalized Plan</h2>
            <p className="text-indigo-100 text-sm leading-relaxed">
                Based on your recent check-ins, your migraine risk is moderate. We recommend reducing screen brightness and hydrating immediately.
            </p>
            <p className="mt-4 text-xs text-indigo-200 font-mono bg-black/20 inline-block px-2 py-1 rounded">
                AI_CONFIDENCE: 88%
            </p>
        </div>

        {/* Dummy Actions */}
        <div className="space-y-3">
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Suggested Actions</h3>
            
            <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">💧</div>
                <div>
                    <div className="font-bold text-slate-700">Drink 500ml Water</div>
                    <div className="text-xs text-slate-400">Hydration stabilizes pressure</div>
                </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center space-x-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">😴</div>
                <div>
                    <div className="font-bold text-slate-700">20 min Power Nap</div>
                    <div className="text-xs text-slate-400">Reset your visual cortex</div>
                </div>
            </div>
        </div>

      </div>

      <div className="p-6 border-t border-slate-100 bg-white">
        <button className="w-full py-3 border border-slate-200 text-slate-600 rounded-xl font-medium hover:bg-slate-50 transition-all flex items-center justify-center">
            <RefreshCw size={18} className="mr-2" /> Refresh Recommendations
        </button>
      </div>
    </motion.div>
  );
}