import React from "react";

export const Navbar = () => {
  return (
    <>
      <nav className="w-full border-b bg-white">
        <div className="container mx-auto px-4 md:px-10 h-14 flex justify-between items-center">
          <h1 className="text-base sm:text-lg md:text-xl font-semibold text-black">
            Employment War
          </h1>

          {/* CTA Button (optional) */}
          {/*
          <a href="/form">
            <button className="border border-black text-xs sm:text-sm font-semibold py-2 px-3 rounded hover:shadow transition">
              ✨ Book Session
            </button>
          </a>
          */}
        </div>
      </nav>
    </>
  );
};

