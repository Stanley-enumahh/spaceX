import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";

export default function App() {
  return (
    <div className="font-mono w-full flex flex-col bg-[#dbd4eb] h-screen justify-center items-center">
      <Navbar />
      <Hero />
    </div>
  );
}
