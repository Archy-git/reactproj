import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function DailyCheckIn({ onComplete, onCancel }) {
  const [vitals, setVitals] = useState({ stress: 5, mood: 5, steps: 5 });

  return (
    <motion.div initial={{ y: '100%' }} animate={{ y: 0 }} exit={{ y: '100%' }} className="fixed inset-0 bg-white z-50 flex flex-col">
      <div className="p-6 flex justify-between items-center border-b border-slate-100">
        <h2 className="text-xl font-bold text-slate-800">Daily Check-in</h2>
        <button onClick={onCancel} className="p-2 bg-slate-100 rounded-full text-slate-500 hover:bg-slate-200">
            <X size={20} />
        </button>
      </div>

      <div className="flex-1 p-8 space-y-10 overflow-y-auto">
        
        {/* Stress Slider */}
        <div className="space-y-4">
            <div className="flex justify-between">
                <label className="font-bold text-slate-700">Stress Level</label>
                <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-bold rounded">{vitals.stress}/10</span>
            </div>
            <input type="range" min="1" max="10" value={vitals.stress} onChange={(e) => setVitals({...vitals, stress: parseInt(e.target.value)})}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-500" />
            <div className="flex justify-between text-xs text-slate-400"><span>Calm</span><span>Severe</span></div>
        </div>

        {/* Mood Slider */}
        <div className="space-y-4">
            <div className="flex justify-between">
                <label className="font-bold text-slate-700">Mood</label>
                <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-bold rounded">{vitals.mood}/10</span>
            </div>
            <input type="range" min="1" max="10" value={vitals.mood} onChange={(e) => setVitals({...vitals, mood: parseInt(e.target.value)})}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-500" />
            <div className="flex justify-between text-xs text-slate-400"><span>Sad</span><span>Happy</span></div>
        </div>

        {/* Steps Slider */}
        <div className="space-y-4">
            <div className="flex justify-between">
                <label className="font-bold text-slate-700">Activity</label>
                <span className="px-2 py-1 bg-green-100 text-green-600 text-xs font-bold rounded">{vitals.steps * 1000} Steps</span>
            </div>
            <input type="range" min="1" max="10" value={vitals.steps} onChange={(e) => setVitals({...vitals, steps: parseInt(e.target.value)})}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-green-500" />
            <div className="flex justify-between text-xs text-slate-400"><span>Sedentary</span><span>Active (10k+)</span></div>
        </div>

      </div>

      <div className="p-6 border-t border-slate-100">
        <button onClick={() => onComplete(vitals)} className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold shadow-lg hover:bg-slate-800 transition-all">
            Confirm Entry
        </button>
      </div>
    </motion.div>
  );
}