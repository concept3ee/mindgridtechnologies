import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="">
          <Link href="/" className="flex items-center justify-center gap-3">
            <span className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:h-full before:blur before:w-full before:bg-[linear-gradient(to_right,#f878ff,#fB92CF,#FFDD98,#C2F0B1,#2FD8FE)] before:absolute">
              <Image
                src="/images/mindgrid-logo.png"
                alt="MindGrid Logo"
                width={40}
                height={40}
                className="rounded-full relative"
              />
            </span>
            <span className="hidden lg:block text-xl font-bold">
              Mindgrid Technologies
            </span>
          </Link>

          <nav className="flex flex-col md:flex-row md:justify-center gap-5 mt-6">
            <Link href="#about" className="hover:underline">
              About
            </Link>
            <Link href="#services" className="hover:underline">
              Services
            </Link>
            <Link href="#mission" className="hover:underline">
              Mission & Vision
            </Link>
            <Link href="#contact" className="hover:underline">
              Contact
            </Link>
          </nav>
          <div className="flex items-center justify-center gap-5 mt-6">
            <Link href="/">
              <Image
                src="/images/facebook.png"
                alt="Facebook"
                width={22}
                height={21}
                className="w-8 h-8"
              />
            </Link>
            <Link href="/">
              <Image
                src="/images/youtube.png"
                alt="Youtube"
                width={20}
                height={14}
                className="w-8 h-8"
              />
            </Link>
            <Link href="/">
              <Image
                src="/images/linkedin.png"
                alt="Linkedin"
                width={20}
                height={21}
                className="w-8 h-8"
              />
            </Link>
            <Link href="/">
              <Image
                src="/images/twitter.png"
                alt="Twitter"
                width={21}
                height={21}
                className="w-8 h-8"
              />
            </Link>
          </div>
          <p className="mt-6">
            {" "}
            &copy; {new Date().getFullYear()} MindGrid Technologies Ltd. All
            rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
