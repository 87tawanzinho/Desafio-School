"use client";
import { useEffect, useState } from "react";
import GraphicsSVG from "./GraphicsSvg";

export default function Navbar() {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackground = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY >= 4) {
        setChangeColor(true);
      } else {
        setChangeColor(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);
  return (
    <header
      className={` ${
        changeColor ? "text-black bg-gray-100" : "text-white bg-black"
      } w-full fixed p-6 z-50 items-center  flex text-sm  font-bold transition-all`}
    >
      <div
        className={`flex gap-2 items-center ${
          changeColor ? "text-violet-900" : "text-yellow-300"
        }`}
      >
        <p className="">Sistema Intelecto </p>
        <GraphicsSVG />
      </div>
      <div className="absolute end-4 flex gap-4">
        <a
          href="https://github.com/87tawanzinho"
          target="_blank"
          className="hover:text-violet-700"
        >
          Github
        </a>

        <a
          href="https://wa.link/1hcale"
          target="_blank"
          className="hover:text-violet-700"
        >
          Whatsapp
        </a>
      </div>
    </header>
  );
}
