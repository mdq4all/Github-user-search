"use client";

import { useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import { userInterface } from "@/interfaces/interfaces";
import Welcome from "./components/Welcome";

export default function Home() {
  const [user, setUser] = useState<userInterface | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getUser = async (username: string) => {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) {
      setUser(null);
      setError("User does not exists");
      return;
    }
    setUser(await res.json());
    setError(null);
  };

  return (
    <div className=" text-black dark:text-white max-w-xl">
      <Header />
      <Searchbar getUser={getUser} />
      {user && <Card user={user} />}
      {error && (
        <div className="grid place-content-center bg-red-600 p-6 rounded-xl shadow-box dark:shadow-none">
          <h3 className="text-white font-bold text-xl text-center">{error}</h3>
        </div>
      )}
      {!user && !error && <Welcome /> }
    </div>
  );
}
