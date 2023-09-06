import React from "react";
import SunIcon from "./SunIcon";

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between w-full mb-7">
      <h1 className="text-3xl">devfinder</h1>
      <div className="flex items-center gap-2">
        <h3>LIGHT</h3>
        <SunIcon />
      </div>
    </header>
  );
}
