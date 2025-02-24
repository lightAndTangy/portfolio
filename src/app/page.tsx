import Image from "next/image";
import Homepage from "./components/home";
import Navbar from "./components/navbar";
export default function Home() {
  return (
    <div className="grid place-items-center min-h-screen p-8 pb-20 gap-4 sm:p-20 bg-bg text-center">
      <Homepage />
    </div>

  );
}
