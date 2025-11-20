import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, CheckCircle } from 'lucide-react';

export default function Onboarding({ onComplete }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', dob: '', sex: '',
    medicalHistory: {
      alcoholism: false, painkillers: false, pastMigraine: false, epilepsy: false,
      trauma: false, sleepDisorder: false, depression: false, cardiovascular: false
    },
    triggers: ''
  });

  const updateField = (field, value) => setFormData({ ...formData, [field]: value });
  
  const toggleMedical = (key) => {
    setFormData({
      ...formData,
      medicalHistory: { ...formData.medicalHistory, [key]: !formData.medicalHistory[key] }
    });
  };

  const next = () => setStep(s => s + 1);
  const back = () => setStep(s => s - 1);

  // Animation Variants
  const slideVariants = {
    enter: (direction) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({ x: direction < 0 ? 100 : -100, opacity: 0 }),
  };

  return (
    <div className="h-full w-full flex flex-col p-6 md:p-10">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-sm font-bold tracking-widest text-slate-400 uppercase">Setup Phase 1</h2>
        <div className="text-xs font-medium px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
          Step {step} of 6
        </div>
      </div>

      <div className="flex-1 relative overflow-hidden">
        <AnimatePresence mode="wait">
          
          {/* Q1: Welcome Animation */}
          {step === 1 && (
            <motion.div key="step1" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="flex flex-col items-center justify-center h-full text-center space-y-6">
              <div className="w-24 h-24 bg-gradient-to-tr from-blue-500 to-teal-400 rounded-full flex items-center justify-center shadow-lg mb-4">
                <span className="text-4xl">🧠</span>
              </div>
              <h1 className="text-4xl font-bold text-slate-800">Neurawave</h1>
              <p className="text-slate-500 max-w-xs">Your personal companion for migraine prediction and wellbeing.</p>
              <button onClick={next} className="mt-8 px-8 py-3 bg-slate-900 text-white rounded-full font-semibold shadow-lg hover:bg-slate-800 transition-all">
                Get Started
              </button>
            </motion.div>
          )}

          {/* Q2: Static Data */}
          {step === 2 && (
            <motion.div key="step2" variants={slideVariants} initial="enter" animate="center" exit="exit" className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-800">Tell us about you</h2>
              <div className="space-y-4">
                <input placeholder="First Name" className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" onChange={(e) => updateField('firstName', e.target.value)} value={formData.firstName} />
                <input placeholder="Last Name" className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" onChange={(e) => updateField('lastName', e.target.value)} value={formData.lastName} />
                <div>
                    <label className="text-xs text-slate-400 ml-1">Date of Birth</label>
                    <input type="date" className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 outline-none" onChange={(e) => updateField('dob', e.target.value)} value={formData.dob} />
                </div>
                <select className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 outline-none" onChange={(e) => updateField('sex', e.target.value)} value={formData.sex}>
                  <option value="">Select Sex</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </motion.div>
          )}

          {/* Q3: Medical History */}
          {step === 3 && (
            <motion.div key="step3" variants={slideVariants} initial="enter" animate="center" exit="exit" className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-800">Medical History</h2>
              <p className="text-slate-500 text-sm">Select all that apply to you.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.keys(formData.medicalHistory).map((key) => (
                  <button key={key} onClick={() => toggleMedical(key)}
                    className={`p-4 rounded-xl border text-left transition-all flex items-center justify-between ${formData.medicalHistory[key] ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-slate-200 hover:border-slate-300'}`}>
                    <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    {formData.medicalHistory[key] && <CheckCircle size={18} />}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Q4: Triggers */}
          {step === 4 && (
            <motion.div key="step4" variants={slideVariants} initial="enter" animate="center" exit="exit" className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-800">Known Triggers</h2>
              <textarea 
                maxLength={200}
                placeholder="E.g., Bright lights, Chocolate, Lack of sleep..."
                className="w-full h-40 p-4 bg-slate-50 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none resize-none transition-all"
                onChange={(e) => updateField('triggers', e.target.value)} 
                value={formData.triggers}
              />
              <div className="text-right text-xs text-slate-400">{formData.triggers.length}/200</div>
            </motion.div>
          )}

          {/* Q5: Confirmation */}
          {step === 5 && (
            <motion.div key="step5" variants={slideVariants} initial="enter" animate="center" exit="exit" className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-800">Review Data</h2>
              <div className="bg-slate-50 p-6 rounded-2xl space-y-3 text-sm border border-slate-200">
                <div className="flex justify-between"><span className="text-slate-500">Name:</span> <span className="font-medium">{formData.firstName} {formData.lastName}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">DOB:</span> <span className="font-medium">{formData.dob}</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Sex:</span> <span className="font-medium">{formData.sex}</span></div>
                <div className="border-t border-slate-200 pt-2 mt-2">
                  <span className="text-slate-500 block mb-1">History:</span>
                  <div className="flex flex-wrap gap-1">
                    {Object.entries(formData.medicalHistory).filter(([_,v]) => v).map(([k]) => (
                        <span key={k} className="px-2 py-1 bg-white border border-slate-200 rounded text-xs capitalize">{k}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-center text-sm text-slate-500">Is this information correct?</div>
            </motion.div>
          )}

          {/* Q6: Success */}
          {step === 6 && (
             <motion.div key="step6" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex flex-col items-center justify-center h-full text-center space-y-6">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle size={40} />
                </div>
                <h2 className="text-2xl font-bold text-slate-800">Submission Received</h2>
                <p className="text-slate-500">Thank you for your submission. Your basic results have come in.</p>
                <button onClick={() => onComplete(formData)} className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all">
                    Enter App
                </button>
             </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation Buttons (Hidden on First and Last step) */}
      {step > 1 && step < 6 && (
        <div className="flex justify-between mt-6 pt-6 border-t border-slate-100">
          <button onClick={back} className="flex items-center text-slate-500 hover:text-slate-800 font-medium px-4 py-2">
            <ChevronLeft size={18} className="mr-1" /> Back
          </button>
          <button onClick={next} className="flex items-center bg-slate-900 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:bg-slate-800 transition-all">
            {step === 5 ? 'Confirm' : 'Next'} <ChevronRight size={18} className="ml-1" />
          </button>
        </div>
      )}
    </div>
  );
}