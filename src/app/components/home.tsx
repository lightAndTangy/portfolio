import React from "react";
import KeyboardModel from "./keyboard";

export default function Home() {
  return(
    <div className="flex flex-col content-center h-[800px] lg:flex-row content-center items-center">
      <div className="flex flex-col items-start flex-[2]">
        <h1 className="text-left font-anek font-bold text-[80px]">
          Hi, I&apos;m Alice!
        </h1>
        <p className="text-left font-aileron font-semibold text-xl">
          Computer Science Graduate
        </p>
      </div>
      <div className="flex flex-[3] h-full w-full">
        <KeyboardModel />
      </div>
    </div>
  );
}

