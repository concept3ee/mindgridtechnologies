import Link from "next/link";
import Image from "next/image";

import MobileView from "./MobileView";

function Header() {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-20">
          {/* MOBILE MENU */}
          <div className="h-full flex items-center justify-between lg:hidden">
            <Link href="/">
              <Image
                src="/images/mindgrid-logo.png"
                alt="MindGrid Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
            </Link>
            <MobileView />
          </div>
          {/* LARGER SCREENS */}
          <div className="hidden lg:flex items-center justify-between h-full">
            {/* LEFT */}
            <div className="flex items-center gap-10">
              <Link href="/">
                <Image
                  src="/images/mindgrid-logo.png"
                  alt="MindGrid Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </Link>
            </div>
            {/* RIGHT */}
            <div>
              <nav className="hidden lg:flex gap-4">
                <Link href="#about-mission-vision" className="hover:underline">
                  {" "}
                  About
                </Link>
                <Link href="#services" className="hover:underline">
                  Services
                </Link>
                <Link href="#pricing" className="hover:underline">
                  Pricing
                </Link>
                <Link
                  href="#contact"
                  className="hover:underline btn btn-primary"
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
