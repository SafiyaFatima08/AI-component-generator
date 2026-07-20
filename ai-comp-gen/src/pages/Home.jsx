import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Select from 'react-select';
import { BsStars } from "react-icons/bs";
import { HiOutlineCode } from "react-icons/hi";
import { IoCopy } from "react-icons/io5";
import { PiExportBold } from "react-icons/pi";
import { ImNewTab } from "react-icons/im";
import { FiRefreshCw } from "react-icons/fi";
import Editor from '@monaco-editor/react';
import { GoogleGenAI } from "@google/genai";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from 'react-toastify';
import { MdClose } from "react-icons/md";

const Home = () => {
  const options = [
    { value: 'html-css', label: 'HTML + CSS' },
    { value: 'html-tailwind', label: 'HTML + Tailwind CSS' },
    { value: 'html-bootstrap', label: 'HTML + Bootstrap' },
    { value: 'html-css-js', label: 'HTML + CSS + JS' },
    { value: 'html-tailwind-bootstrap', label: 'HTML + Tailwind CSS + Bootstrap' },
  ];

  const [outputScreen, setOutputScreen] = useState(false);
  const [tab, setTab] = useState(1);
  const [prompt, setPrompt] = useState("");
  const [frameWork, setFrameWork] = useState(options[0]);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [isNewTabOpen, setIsNewTabOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  // 1. Lifted Master Dark Mode state (defaulting to true)
  const [isDarkMode, setIsDarkMode] = useState(true);

  // 2. Sync theme state with the html document's class list
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  function extractCode(response) {
    const match = response.match(/```(?:html|css|javascript|js)?\n([\s\S]*?)```/i);
    return match ? match[1].trim() : response.trim();
  }

  // The client gets the API key from the environment variable `GEMINI_API_KEY`.
  
  const ai = new GoogleGenAI({ apiKey: "AIzaSyCdXB_-QOGeIcSTVOqwoduTa4UNJ5m2XLM" });
  async function getResponse() {
    setLoading(true);
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are an experienced programmer with expertise in web development and UI/UX design. You create modern, animated, and fully responsive components.you are highly skilled in HTML,CSS,Tailwind css, Bootstrap,JavaScript,React,Next.js,vue.js,Angular, and more. You have a keen eye for design and are proficient in creating visually appealing and user-friendly interfaces.
Now, generate a UI component for: ${prompt}
Framework to use: ${frameWork.value}
Requirements:
- The code must be clean, well-structured, and easy to understand.
- Optimize for SEO where applicable.
- Focus on creating a modern, animated, and responsive UI design.
- Include high-quality hover effects, shadows, animations, colors, and typography.
- Return ONLY the code, formatted properly in "Markdown fenced code blocks".
- Do NOT include explanations, text, comments, or anything else besides the code.
`,

    });

    console.log(response.text);
    setCode(extractCode(response.text));
    setOutputScreen(true);
    setLoading(false);
  };

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      toast.success('Code copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
      toast.error('Failed to copy');
    }
  };

  const downloadFile = () => {
    const fileName = "GenUI-Code.html";
    const blob = new Blob([code], { type: "text/plan" });
    let url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
    toast.success('File downloaded');
  }

  // Custom styles to make react-select exactly match the dark UI in your screenshot

  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: '#1b1a21',
      borderColor: '#2e2c35',
      borderRadius: '0.5rem',
      color: '#fff',
      padding: '2px',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#4c4957',
      }
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: '#1b1a21',
      borderRadius: '0.5rem',
      border: '1px solid #2e2c35',
    }),

    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#2e2c35' : '#1b1a21',
      color: '#fff',
      '&:active': {
        backgroundColor: '#3e3b47',
      }
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#fff',
    }),
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-[#09090b] dark:text-[#f4f4f5] font-sans transition-colors duration-300">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main className="max-w-[1600px] mx-auto px-6 py-8 flex gap-6 h-[calc(100vh-80px)] items-stretch">

        {/* Left Control Panel */}

        <div className="w-1/2 bg-[#111015] border border-[#1f1e24] rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              AI Component Generator
            </h1>
            <p className="text-sm text-zinc-400 mt-2">
              Describe your component and let AI code it for you.
            </p>
            <div className="mt-6">
              <label className="text-sm font-semibold text-zinc-300 block mb-2">Framework</label>
              <Select
                options={options}
                styles={customSelectStyles}
                value={frameWork}
                onChange={(option) => setFrameWork(option)} />
            </div>
            <div className="mt-6">
              <label className="text-sm font-semibold text-zinc-300 block mb-2">Describe your component</label>
              <textarea
                onChange={(e) => setPrompt(e.target.value)}
                value={prompt}
                className="w-full min-h-[220px] rounded-xl bg-[#1b1a21] border border-[#2e2c35] p-4 text-sm text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                placeholder="Describe your component in detail (e.g., 'A modern navbar with glassmorphism effect and mobile responsive hamburger menu')."
              />
            </div>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-[#1f1e24] mt-4">
            <p className="text-xs text-zinc-500">Click on generate button to get your code</p>
            <button
              disabled={loading}
              onClick={getResponse}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-medium text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-purple-500/10 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none"
            >
              {loading ? (

                <ClipLoader color="white" size={16} />

              ) : (

                <BsStars className="text-base" />
              )}

              <span>{loading ? "Generating..." : "Generate"}</span>
            </button>
          </div>
        </div>

        {/* Right Preview/Output Panel */}

        <div className="w-1/2 bg-[#111015] border border-[#1f1e24] rounded-2xl overflow-hidden flex flex-col justify-between relative">
          {outputScreen === false ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-600 flex items-center justify-center shadow-xl shadow-purple-500/20 mb-4">
                <HiOutlineCode className="text-2xl text-white" />
              </div>
              <p className="text-sm text-zinc-400 font-medium">Your component & code will appear here.</p>
            </div>
          ) : (

            <>

              {/* Top View Selector Tabs */}

              <div className="bg-[#16151a] border-b border-[#1f1e24] p-3 flex gap-3">
                <button
                  onClick={() => setTab(1)}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${tab === 1 ? "bg-[#25232a] text-white shadow" : "text-zinc-400 hover:text-zinc-200"}`}
                >         Code

                </button>
                <button
                  onClick={() => setTab(2)}
                  className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${tab === 2 ? "bg-[#25232a] text-white shadow" : "text-zinc-400 hover:text-zinc-200"}`}
                > Preview
                </button>
              </div>

              {/* Toolbar Actions */}

              <div className="bg-[#111015] border-b border-[#1f1e24] px-4 py-3 flex items-center justify-between">
                <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  {tab === 1 ? "Code Editor" : "Live Preview"}
                </span>
                <div className="flex items-center gap-2">
                  {tab === 1 ? (
                    <>
                      <button className="w-8 h-8 rounded-lg border border-[#2e2c35] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#1b1a21] transition-all" onClick={copyCode} title="Copy Code"><IoCopy size={14} /></button>
                      <button className="w-8 h-8 rounded-lg border border-[#2e2c35] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#1b1a21] transition-all" onClick={downloadFile} title="Export File"><PiExportBold size={14} /></button>
                    </>
                  ) : (
                    <>
                      <button className="w-8 h-8 rounded-lg border border-[#2e2c35] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#1b1a21] transition-all" onClick={() => setIsNewTabOpen(true)} title="Open Fullscreen"><ImNewTab size={14} /></button>
                      <button
                        className="w-8 h-8 rounded-lg border border-[#2e2c35] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-[#1b1a21] transition-all"
                        onClick={() => setRefreshKey(prev => prev + 1)}
                        title="Refresh Preview"
                      >
                        <FiRefreshCw size={14} />
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Workspace Content Display */}

              <div className="flex-1 bg-[#1e1e1e] relative overflow-hidden">
                {tab === 1 ? (
                  <Editor value={code} height="100%" theme="vs-dark" language="html" options={{ minimumAllowedControlsHeight: 100, fontSize: 13, readOnly: true }} />
                ) : (
                  <iframe key={refreshKey} srcDoc={code} className="w-full h-full bg-white border-none" title="Output Preview" />
                )}
              </div>
            </>
          )}
        </div>
      </main>

      {/* Fullscreen Modal View */}

      {isNewTabOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col">
          <div className="bg-zinc-100 border-b border-zinc-200 px-6 py-3 flex items-center justify-between">
            <span className="font-bold text-zinc-800 text-sm">Full Preview Mode</span>
            <button className="w-8 h-8 rounded-lg border border-zinc-300 flex items-center justify-center text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200 transition-all" onClick={() => setIsNewTabOpen(false)}>
              <MdClose size={18} />
            </button>
          </div>
          <iframe srcDoc={code} className="w-full flex-1 border-none bg-white" title="Expanded Preview" />
        </div>
      )}
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar theme="dark" />
    </div>
  )
}

export default Home;


