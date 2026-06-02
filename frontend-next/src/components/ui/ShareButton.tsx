"use client";

import { IoShareOutline } from "react-icons/io5";
import { handleCopy } from "@/lib/utils";

const ShareButton = () => {
  return (
    <button
      type="button"
      onClick={() => handleCopy(window.location.href)}
      className="text-neutral-800 text-base lg:text-xl align-center gap-2 lg:gap-5 cursor-pointer"
    >
      <IoShareOutline />
      <p className="underline">Compartir</p>
    </button>
  );
};

export default ShareButton;
