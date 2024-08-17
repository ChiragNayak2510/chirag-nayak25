import React from "react";
import { Button } from "@nextui-org/react";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

export default function Contact() {
  return (
    <div className="bg-[#161716] border-2 border-transparent border-[#292928] w-full rounded-b-none sm:rounded-b-3xl rounded-3xl text-white flex flex-col items-center justify-center p-16 gap-10">
      <img src="Memoji.png" alt="Memoji for contact" className="rounded-full h-1/4 w-1/4 sm:h-1/4 sm:w-1/4 md:h-1/6 md:w-1/6 lg:h-1/12 lg:w-1/12" />
      <h1 className="text-2xl sm:text:3xl md:text-4xl lg:text-5xl">Tell me about yourself.</h1>
      <div className="flex gap-8">
        <Button radius="full" className="mt-4 bg-white text-black shadow-lg mb-8 p-4">
          <div className="flex gap-2 items-center justify-center text-sm">
            <MdEmail size={20} />
            Email Me
          </div>
        </Button>
        <Button radius="full" className="mt-4 bg-white text-black shadow-lg mb-8 p-4">
          <div className="flex gap-2 items-center justify-center text-sm">
            <FaWhatsapp size={20} />
            Whatsapp
          </div>
        </Button>
      </div>
      <hr className="w-full border-t border-gray-700 mt-4" />
      <div>
        <div className="flex gap-2 items-center justify-center"><FaRegCopyright size={14}/><span>2024 All Rights Reserved</span></div>
      </div>
    </div>
  );
}
