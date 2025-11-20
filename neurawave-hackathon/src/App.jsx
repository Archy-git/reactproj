import React, { useState } from 'react';
import Onboarding from './components/Onboarding';
import Dashboard from './components/Dashboard';
import Recommendations from './components/Recommendations';
import DailyCheckIn from './components/DailyCheckIn';

export default function App() {
  // App State
  const [view, setView] = useState('onboarding'); // 'onboarding', 'dashboard', 'daily', 'recommendations'
  const [userData, setUserData] = useState(null);
  const [dailyData, setDailyData] = useState(null);

  // Completion Handlers
  const handleOnboardingComplete = (data) => {
    setUserData(data);
    setView('dashboard');
  };

  const handleDailyComplete = (data) => {
    setDailyData(data);
    setView('dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 overflow-hidden relative">
      {/* Background Decor for visual flair */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <main className="w-full max-w-md md:max-w-lg lg:max-w-4xl min-h-screen md:min-h-[800px] bg-white/80 md:rounded-3xl shadow-2xl backdrop-blur-sm border border-white/20 overflow-hidden relative">
        
        {view === 'onboarding' && <Onboarding onComplete={handleOnboardingComplete} />}
        
        {view === 'dashboard' && (
          <Dashboard 
            user={userData} 
            onDailyCheckIn={() => setView('daily')}
            onRecommendations={() => setView('recommendations')}
          />
        )}

        {view === 'daily' && <DailyCheckIn onComplete={handleDailyComplete} onCancel={() => setView('dashboard')} />}
        
        {view === 'recommendations' && <Recommendations onBack={() => setView('dashboard')} />}

      </main>
    </div>
  );
}