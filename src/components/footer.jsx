import React from "react";

export const Footer = () => {
  return (
    <>
      <footer className="bg-slate-100 text-gray-400 py-12 px-4">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center text-center gap-6">

          <form className="w-full max-w-md">
            <p className="pb-4 text-lg md:text-xl font-bold text-black">
              Start your contact page
            </p>

            <input
              type="email"
              name="email"
              id="email"
              className="
                w-full 
                bg-slate-300 
                rounded-2xl 
                px-6 py-4 
                focus:outline-none 
                focus:ring-2 
                focus:ring-blue-500 
                text-gray-700
              "
              placeholder="topmate.io/yourname"
            />
          </form>

        </div>
      </footer>
    </>
  );
};

