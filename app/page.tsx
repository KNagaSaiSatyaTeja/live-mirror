"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";
import "./style.css";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={theme === "dark" ? "main-container dark" : "main-container"}
    >
      <header className="header">
        <div className="brand">
          <Image
            src="/logo.png"
            alt="Live Mirror Logo"
            width={40}
            height={40}
          />
          <span className="brand-text">Live Mirror</span>
        </div>
        <button
          className="theme-toggle"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle theme"
        >
          {mounted &&
            (theme === "dark" ? <FiMoon size={24} /> : <FiSun size={24} />)}
        </button>
      </header>

      <main className="content">
        <h1 className="title animate-fade-in">
          Real-Time Collaborative Code Editor
        </h1>
        <p className="subtitle animate-fade-in delay-100">
          Code together from anywhere in the world.
          <br />
          Real-time synchronization, built-in compiler, and seamless sharing.
        </p>
        <div className="features-container">
          <div className="feature-box">
            <h3> Multiplayer Mode</h3>
            <p>Invite teammates and code simultaneously.</p>
          </div>
          <div className="feature-box">
            <h3> Smart Editor</h3>
            <p>Syntax highlighting, linting, and AI suggestions.</p>
          </div>
          <div className="feature-box">
            <h3> Instant Preview</h3>
            <p>Run and preview your code live without setup.</p>
          </div>
        </div>

        <button className="get-started-btn animate-glow">Get Started</button>
      </main>

      <footer className="footer">
        &copy; {new Date().getFullYear()} Live Mirror. Built for remote teams
        and live learning.
      </footer>
    </div>
  );
}
