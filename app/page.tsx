"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./style.css";
import logo from "../public/logo.png"; // Adjust the path as necessary
export default function Home() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={theme === "dark" ? "main-container dark" : "main-container"}
    >
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

        <button
          className="get-started-btn animate-glow"
          onClick={() => router.push("/creation")}
        >
          Get Started
        </button>
      </main>
    </div>
  );
}
