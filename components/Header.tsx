// components/Header.tsx
"use client";

import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";
import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/logo.png"; // adjust the path if needed

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header
      className="header flex items-center justify-between"
      style={{
        borderBottom: "1px solid var(--border-color)",
        paddingBottom: "0.3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="brand rounded">
        <Image
          src={logo}
          alt="Live Mirror Logo"
          className="rounded-full"
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
  );
}
