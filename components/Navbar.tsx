"use client";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <nav className=" flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image
          src="/reshot-icon-camping-tent-LHPJ9STM27.svg"
          alt="logo"
          width={50}
          height={50}
        />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />
      <ul
        className={`lg:hidden ${
          isMenuOpen ? "flex" : "hidden"
        } flex-col gap-4 absolute top-20 right-0 bg-white p-4 w-full py-20 transition-all hover:font-bold  items-center justify-center `}
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="inline-block regular-16 text-gray-50 cursor-pointer hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
