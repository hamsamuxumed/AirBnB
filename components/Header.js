import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 shadow-md bg-white p-5 md:px-10">
      {/* left  */}
      <div className="h-10 cursor-pointer relative my-auto flex items-center ">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle  */}
      <div className=" flex items-center md:border-2 rounded-full justify-between md:shadow-sm py-2">
        <input
          className=" flex-grow outline-none pl-5 bg-transparent  placeholder-gray-400 text-sm text-gray-600"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className="hidden md:mx-2 md:inline-flex h-8 text-white bg-red-400 rounded-full cursor-pointer p-2" />
      </div>
      {/* right  */}
      <div className="flex space-x-4 items-center justify-end text-gray-500 ">
        <p className="hidden md:inline-flex cursor-pointer">Become a Host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 rounded-full p-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6  " />
        </div>
      </div>
    </header>
  );
};
