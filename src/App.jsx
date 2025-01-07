import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import { useEffect, useState } from "react";
import { auth } from "./components/firebase";

export default function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div className="font-mono w-full flex flex-col bg-[#090d2b] h-screen justify-center items-center">
      <Navbar />
      <Hero />
    </div>
  );
}
