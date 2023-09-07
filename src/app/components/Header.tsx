"use client";

import { useEffect, useState } from "react";
import SunIcon from "./SunIcon";
import Image from "next/image";

const initialThemeState = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("theme")) return localStorage.getItem("theme") as "light" | "dark"
     return "light"
  } else return "light"
};

export default function Header() {
  const [theme, setTheme] = useState<"light" | "dark">(initialThemeState);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", theme);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const handleClick = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <header className="flex flex-wrap items-center justify-between w-full mb-7">
      <h1 className="text-3xl">devfinder</h1>
      <div className="flex items-center gap-2">
        <h3 className="uppercase">{theme}</h3>
        <button onClick={handleClick}>
          {theme === "dark" ? (
            <SunIcon />
          ) : (
            <Image
              src="moon-icon.svg"
              width={30}
              height={30}
              alt="theme icon"
            />
          )}
        </button>
      </div>
    </header>
  );
}
