import React, { useState, useEffect } from "react";
import { Navbar, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaClipboard } from "react-icons/fa";
import { IoCheckmarkDone } from "react-icons/io5";

export default function Nav() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("chiragnayak251002@gmail.com")
      .then(() => {
        setCopied(true);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return (
    <>
      <Navbar className="w-full flex justify-between p-4">
        <NavbarContent className="hidden sm:flex gap-4">
          <NavbarItem>
            <div className="flex gap-2 justify-center items-center">
              <p className="text-sm text-gray-300">chiragnayak251002@gmail.com</p>
              {copied ? (
                <IoCheckmarkDone size={14} className="text-green-500" />
              ) : (
                <FaClipboard size={14} className="cursor-pointer" onClick={handleCopy} />
              )}
            </div>
          </NavbarItem>
          <NavbarItem>
            <a
              href="https://drive.google.com/file/d/1YZDU9qN1xRhhaxsblLJ_niJA-f6Aw76q/view?usp=sharing"
              className="bg-white text-black rounded-3xl p-2 cursor-pointer text-sm"
            >
              Resume
            </a>
          </NavbarItem>
          {/* <NavbarItem>
            <p
              onClick={scrollToProjects}
              className="bg-white text-black rounded-3xl p-2 cursor-pointer text-sm"
            >
              Projects
            </p>
          </NavbarItem> */}
        </NavbarContent>
        <NavbarContent>
          <NavbarItem className="flex gap-4">
            <Button as={Link} color="primary" href="https://www.linkedin.com/in/chirag-nayak-b4b88b247/" variant="flat" className="mr-2">
              <FaLinkedin size={28} />
            </Button>
            <Button as={Link} color="primary" href="https://x.com/ChiragNaya2626" variant="flat" className="mr-2">
              <FaTwitterSquare size={28} />
            </Button>
            <Button as={Link} color="primary" href="https://www.instagram.com/chirag_nayak2510/" variant="flat" className="mr-2">
              <FaInstagramSquare size={28} />
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}
