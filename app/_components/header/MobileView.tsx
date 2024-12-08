"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function MobileView() {
  const [open, setOpen] = useState(false);

  const handleCloseMenu = () => setOpen(false);

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => setOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setOpen]);

  const toggleMenu = () => setOpen((prev) => !prev);

  return (
    <div>
      <span className="cursor-pointer z-10" onClick={toggleMenu}>
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        )}
      </span>
      <div className="relative">
        <div
          className={`fixed top-16 right-0 h-screen bg-[#F9F9F9] w-full transform ${
            open ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 z-[5] shadow-lg`}
        >
          <nav className="flex flex-col items-start p-6 space-y-4 mt-10">
            {["#about-mission-vision", "#services", "#pricing", "#contact"].map(
              (href, index) => (
                <Link
                  key={index}
                  href={href}
                  className="text-lg font-medium hover:underline"
                  onClick={handleCloseMenu}
                >
                  {href.replace("#", "").replace("-", " ")}
                </Link>
              )
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default MobileView;
