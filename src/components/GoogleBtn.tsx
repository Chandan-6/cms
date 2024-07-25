"use client";

import { signIn } from "next-auth/react";

interface googleBtnProps {
  btnTxt: string;
}

export default function GoogleBtn(props: googleBtnProps) {
  return (
    <div
      onClick={() => signIn("google")}
      className="flex justify-center items-center rounded-3xl space-x-2 bg-white px-7 py-2 w-[50%] text-center cursor-pointer transition-all duration-500 hover:scale-105"
    >
      <img src={"/google.png"} alt="pGoogle logo" className="w-4 h-4 mr-3" />
      <p className="text-black font-['Google Sans']">{props.btnTxt}</p>
    </div>
  );
}
