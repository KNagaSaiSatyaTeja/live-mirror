"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import "./style.css";
import logo from "../../public/logo.png"; // Adjust the path as necessary
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

function Creation() {
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
      <main className="content"></main>
    </div>
  );
}

export default Creation;
