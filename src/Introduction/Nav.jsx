import React from "react";
import {Navbar,NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function Nav() {
  return (
  <Navbar className="w-full flex justify-between p-4">
  <NavbarContent className="hidden sm:flex gap-4">
    <NavbarItem>
      <p>chiragnayak251002@gmail.com</p>
    </NavbarItem>
    <NavbarItem>
      <Link href="#" aria-current="page">
        Resume
      </Link>
    </NavbarItem>
    <NavbarItem>
      <p>Projects</p>
    </NavbarItem>
    <NavbarItem>
      <p>Experience</p>
    </NavbarItem>
  </NavbarContent>
  <NavbarContent >
    <NavbarItem>
      <Button as={Link} color="primary" href="#" variant="flat" className="mr-2">
        LinkedIn / 
      </Button>
      <Button as={Link} color="primary" href="#" variant="flat" className="mr-2">
        Twitter /
      </Button>
      <Button as={Link} color="primary" href="#" variant="flat" className="mr-2">
        Instagram 
      </Button>
    </NavbarItem>
  </NavbarContent>
</Navbar>
  );
}