import React, { useState, useEffect } from "react";
import {
  Heart,
  MonitorPause,
  ThumbsDown,
  SatelliteDish,
  Settings as SettingsIcon
} from "lucide-react";
import LinksProfile from "../components/Props/LinksProfile";

const themes = [
  "dark",
  "coffee",
  "cyberpunk",
  "retro",
  "aqua",
  "black",
];

const Profile = () => {
  const [activeLink, setActiveLink] = useState("profile");
  const [activeTheme, setActiveTheme] = useState("dark");
  const [showWarning, setShowWarning] = useState(true);

  const changeTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    setActiveTheme(theme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
    setActiveTheme(savedTheme);
  }, []);

  return (
    <div className="min-h-screen bg-[#101029] text-white px-12 py-10 w-full">
      <div className="max-w-7xl mx-auto ">

        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">🎨 Theme Settings</h2>

        <div className="flex flex-wrap gap-4 mb-8">
          {themes.map((theme) => (
            <button
              key={theme}
              data-theme={theme}
              onClick={() => changeTheme(theme)}
              className={`px-5 py-2 rounded-xl font-semibold capitalize bg-base-100 text-base-content border border-base-300 shadow-md hover:scale-105 transition-all duration-200 ${activeTheme === theme ? "ring-2 ring-primary ring-offset-2" : ""
                }`}
            >
              {theme}
            </button>
          ))}
        </div>

        {showWarning && (
          <div className="mt-4">
            <div className="alert alert-warning shadow-lg rounded-2xl flex justify-between items-start">
              <div className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6 mt-1" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z" />
                </svg>
                <div>
                  <h3 className="font-bold text-lg">Warning!</h3>
                  <p className="text-sm opacity-80">
                    Theme o‘zgartirilganda dizayn qisqa vaqtga yangilanadi.
                    Tanlangan theme avtomatik saqlanadi.
                  </p>
                </div>
              </div>
              <button onClick={() => setShowWarning(false)} className="btn btn-sm btn-ghost">✕</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Profile;
