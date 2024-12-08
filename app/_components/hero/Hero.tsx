import Image from "next/image";

function Hero() {
  return (
    <section className="pt-7 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-10">
          {/* Text and Buttons Container */}
          <div className="md:w-1/2">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#10d4ee] text-transparent bg-clip-text mt-4">
              Empowering Quality, Driving Innovation
            </h1>
            <p className="text-base md:text-xl text-[#010D3E] mt-5">
              Mindgrid Technologies is a global leader in software quality
              assurance, dedicated to delivering exceptional testing solutions
              that ensure reliability, security, and performance of softwares.
            </p>
            <div className="flex gap-3 items-center mt-5">
              <button className="btn btn-primary">Get started</button>
              <button className="btn btn-text flex items-center gap-1">
                <span>Learn more</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Image Container */}
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/collaboration.png"
              alt="Collaboration Image"
              width={700}
              height={700}
              className="rounded shadow-lg w-full max-w-[400px] md:max-w-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
