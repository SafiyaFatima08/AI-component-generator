import React, { useState, useEffect } from 'react';
import { FiX, FiSliders, FiCpu, FiFeather, FiLayers, FiRefreshCw, FiCheck } from 'react-icons/fi';

const SettingsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // 1. Generation Engine System State Configuration
  const [selectedModel, setSelectedModel] = useState(localStorage.getItem('genui_model') || 'gemini-3-flash-preview');
  const [creativity, setCreativity] = useState(Number(localStorage.getItem('genui_temperature')) || 0.7);
  
  // 2. Global Boilerplate Output Style States
  const [includeDarkClasses, setIncludeDarkClasses] = useState(localStorage.getItem('genui_opt_dark') !== 'false');
  const [includeComments, setIncludeComments] = useState(localStorage.getItem('genui_opt_comments') === 'true');
  
  const [isSaved, setIsSaved] = useState(false);

  // Sync settings alterations to client memory automatically
  const handleSaveSettings = () => {
    localStorage.setItem('genui_model', selectedModel);
    localStorage.setItem('genui_temperature', creativity.toString());
    localStorage.setItem('genui_opt_dark', includeDarkClasses.toString());
    localStorage.setItem('genui_opt_comments', includeComments.toString());
    
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 1200);
  };

  const handleFactoryReset = () => {
    if (window.confirm("Are you sure you want to clear all localized configuration memory? This clears your settings, custom API keys, and history vaults.")) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100] flex items-center justify-center p-4">
      <div className="bg-[#111015] border border-[#2e2c35] w-full max-w-md rounded-2xl p-6 shadow-2xl relative animate-in zoom-in-95 duration-150">
        
        {/* Modal Window Navigation Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#1f1e24] mb-5">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <FiSliders className="text-purple-400" />
            <span>Generation Engine Workspace Config</span>
          </h3>
          <button 
            onClick={onClose}
            className="text-zinc-400 hover:text-white p-1 hover:bg-[#1b1a21] rounded-lg transition-all"
          >
            <FiX size={16} />
          </button>
        </div>

        {/* Core Configuration Options Group */}
        <div className="space-y-5">
          
          {/* SECTION A: LLM Model Core Architecture Route selection */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
              <FiCpu className="text-purple-400" size={13} />
              <span>Target Large Language Model Architecture</span>
            </label>
            <select 
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="w-full bg-[#1b1a21] border border-[#2e2c35] text-zinc-200 text-xs rounded-xl p-2.5 outline-none focus:border-purple-500 transition-colors cursor-pointer"
            >
              <option value="gemini-3-flash-preview">Gemini 3 Flash Preview (Optimized Speed)</option>
              <option value="gemini-1.5-pro">Gemini 1.5 Pro (Complex Layout Analysis)</option>
              <option value="gemini-1.5-flash">Gemini 1.5 Flash (Minimal Latency Mode)</option>
            </select>
          </div>

          {/* SECTION B: Hyperparameter Tuning Simulator Slider (Temperature) */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label className="font-semibold text-zinc-300 flex items-center gap-1.5">
                <FiFeather className="text-purple-400" size={13} />
                <span>AI Novelty Factor (Temperature Coefficient)</span>
              </label>
              <span className="font-mono bg-[#1b1a21] px-1.5 py-0.5 rounded text-purple-400 font-bold">{creativity}</span>
            </div>
            <input 
              type="range" 
              min="0.1" 
              max="1.0" 
              step="0.1"
              value={creativity}
              onChange={(e) => setCreativity(Number(e.target.value))}
              className="w-full accent-purple-500 h-1 bg-[#25232a] rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[9px] text-zinc-500 font-medium">
              <span>Deterministic / Accurate</span>
              <span>Highly Creative / Modern</span>
            </div>
          </div>

          {/* SECTION C: Code Synthesis Pre-Processor Toggles */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5 mb-2">
              <FiLayers className="text-purple-400" size={13} />
              <span>Output Pre-Processor Directives</span>
            </label>
            
            <div className="space-y-2">
              {/* Toggle Rule #1 */}
              <label className="flex items-center justify-between p-2.5 bg-[#1b1a21] border border-[#2e2c35] rounded-xl cursor-pointer hover:border-zinc-700 transition-all">
                <div className="pr-2">
                  <p className="text-xs font-medium text-zinc-200">Inject Theme Variants</p>
                  <p className="text-[9px] text-zinc-500 mt-0.5">Force generation of built-in dark: responsive styling utility tokens.</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={includeDarkClasses}
                  onChange={(e) => setIncludeDarkClasses(e.target.checked)}
                  className="w-4 h-4 rounded accent-purple-500 cursor-pointer"
                />
              </label>

              {/* Toggle Rule #2 */}
              <label className="flex items-center justify-between p-2.5 bg-[#1b1a21] border border-[#2e2c35] rounded-xl cursor-pointer hover:border-zinc-700 transition-all">
                <div className="pr-2">
                  <p className="text-xs font-medium text-zinc-200">Inline Documentation Strings</p>
                  <p className="text-[9px] text-zinc-500 mt-0.5">Embed clean component-level breakdown comments explaining the asset framework logic.</p>
                </div>
                <input 
                  type="checkbox" 
                  checked={includeComments}
                  onChange={(e) => setIncludeComments(e.target.checked)}
                  className="w-4 h-4 rounded accent-purple-500 cursor-pointer"
                />
              </label>
            </div>
          </div>

        </div>

        {/* Bottom Window Primary Actions Footer Bar */}
        <div className="flex gap-2 mt-6 pt-4 border-t border-[#1f1e24]">
          <button 
            onClick={handleSaveSettings}
            className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-medium text-xs py-2 rounded-xl transition-all flex items-center justify-center gap-1.5"
          >
            {isSaved ? <FiCheck size={14} /> : null}
            <span>{isSaved ? "Configurations Synchronized!" : "Commit Adjustments"}</span>
          </button>
          
          <button 
            onClick={handleFactoryReset}
            className="bg-zinc-900 hover:bg-rose-950/40 text-zinc-400 hover:text-rose-400 border border-transparent hover:border-rose-900/30 font-medium text-xs px-3 py-2 rounded-xl transition-all flex items-center gap-1"
            title="Wipe Storage Clusters"
          >
            <FiRefreshCw size={12} />
            <span>Reset Memory</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default SettingsModal;