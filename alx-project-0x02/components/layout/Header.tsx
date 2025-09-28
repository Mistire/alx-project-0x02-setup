"use client";

import Link from "next/link";
import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <nav className="flex gap-6">
        <Link href="/home" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-300">
          About
        </Link>
        <Link href="/posts" className="hover:text-gray-300">
          Posts
        </Link>
        <Link href="/users" className="hover:text-gray-300">
          Users
        </Link>
      </nav>
    </header>
  );
};

export default Header;
