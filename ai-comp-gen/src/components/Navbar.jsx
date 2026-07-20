import React, { useState, useEffect } from 'react'; // Added useEffect here
import SettingsModal from './SettingsModal';
import ProfileDropdown from './ProfileDropdown';

const Navbar = ({ isDarkMode = true, setIsDarkMode = () => {} }) => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // --- ADDED THIS HOOK TO PROPERLY TOGGLE THE DARK CLASS ON THE DOCUMENT ---
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);
  // ----------------------------------------------------------------------

  return (
    <header className="w-full bg-white border-b border-zinc-200 dark:bg-[#09090b] dark:border-[#1f1e24] px-8 py-4 flex items-center justify-between relative transition-colors duration-300">
      {/* Brand Logo */}
      <div className="flex items-center gap-2">
        <span className="text-2xl font-black tracking-tighter text-zinc-900 dark:text-white transition-colors duration-300">
          Gen<span className="text-purple-600 dark:text-purple-500">UI</span>
        </span>
      </div>

      {/* Control Icons Tray */}
      <div className="flex items-center gap-3 relative">
        
        {/* Theme Engine Button */}
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="w-10 h-10 bg-zinc-50 border border-zinc-200 hover:border-zinc-300 dark:bg-[#111015] dark:border-[#2e2c35] dark:hover:border-[#4c4957] rounded-xl flex items-center justify-center text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-all duration-200 cursor-pointer"
          title="Toggle Canvas Theme"
        >
          {isDarkMode ? (
            // Modern Sun SVG (shows in dark mode)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.95 4.95l1.591 1.591m10.91 10.91l1.591 1.591M3 12h2.25m13.5 0H21M4.95 19.05l1.591-1.591m10.91-10.91l1.591-1.591M12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" />
            </svg>
          ) : (
            // Modern Moon SVG (shows in light mode)
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          )}
        </button>

        {/* Profile Dropdown Button */}
        <div className="relative">
          <button 
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="w-10 h-10 bg-zinc-50 border border-zinc-200 hover:border-zinc-300 dark:bg-[#111015] dark:border-[#2e2c35] dark:hover:border-[#4c4957] rounded-xl flex items-center justify-center text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-all duration-200 cursor-pointer"
            title="User Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </button>
          
          <ProfileDropdown isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
        </div>

        {/* Settings Gear Button */}
        <button 
          onClick={() => setIsSettingsOpen(true)}
          className="w-10 h-10 bg-zinc-50 border border-zinc-200 hover:border-zinc-300 dark:bg-[#111015] dark:border-[#2e2c35] dark:hover:border-[#4c4957] rounded-xl flex items-center justify-center text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white transition-all duration-200 cursor-pointer"
          title="System Settings"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 hover:rotate-45 transition-transform duration-300">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.43l-1.003.828c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.43l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>

      {/* Global Overlays */}
      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </header>
  );
};

export default Navbar;