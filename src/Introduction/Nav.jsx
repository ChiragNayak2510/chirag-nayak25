import React from "react";
import {Navbar,NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
export default function Nav() {
  return (
  <Navbar className="w-full flex justify-between p-4">
  <NavbarContent className="hidden sm:flex gap-4">
    <NavbarItem>
      <p className="text-sm text-gray-300">chiragnayak251002@gmail.com</p>
    </NavbarItem>
    <NavbarItem>
      <p className="bg-white text-black rounded-3xl p-2 cursor-pointer text-sm">Resume</p>
    </NavbarItem>
    <NavbarItem>
    <p className="bg-white text-black rounded-3xl p-2 cursor-pointer text-sm">Projects</p>
    </NavbarItem>
  </NavbarContent>
  <NavbarContent >
    <NavbarItem className="flex gap-4">
      <Button as={Link} color="primary" href="#" variant="flat" className="mr-2">
      <FaLinkedin size={28}/> 
      </Button>
      <Button as={Link} color="primary" href="#" variant="flat" className="mr-2">
      <FaTwitterSquare size={28}/> 
      </Button>
      <Button as={Link} color="primary" href="#" variant="flat" className="mr-2">
        <FaInstagramSquare size={28}/> 
      </Button>
    </NavbarItem>
  </NavbarContent>
</Navbar>
  );
}