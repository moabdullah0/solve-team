"use client";   
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { NavHome } from "@/constant/NavHome";
import ButtonStyle from "./ButtonStyle";

const NavbarDesktop = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-50 flex justify-between items-center shadow-md h-[76px] px-10">
      <Link href={"/"}>
        <Image src={'/assets/logo.png'} alt="logo" height={70} width={70} />
      </Link>
      <div className="hidden md:flex lg:flex flex-grow justify-center gap-5">
        {NavHome.map((nav) => (
          <Link
            className={`px-5 hover:text-blue-color hover:font-bold ${
              nav.id === 1 ? "text-blue-color font-bold" : "text-black "
            }`}
            key={nav.id}
            href={nav.link}
          >
            {nav.title}
          </Link>
        ))}
      </div>
      <div className="hidden md:flex lg:flex gap-2">
        <ButtonStyle
          title=" تسجيل الدخول "
          link="/auth/login"
          className="bg-purple-color px-3 py-2 border-2 hover:border-border duration-200 border-secondary-color rounded-full text-white text-xs font-bold"
        />
      </div>
    </div>
  );
};

export default NavbarDesktop;
