function AboutMissionVision() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="section-wrapper">
            <h2 className="section-title">About Us</h2>
            <p className="text-base md:text-xl text-[#010D3E] mt-4">
              MindGrid Technologies specializes in enhancing software quality
              through cutting-edge QA solutions. We collaborate with developers
              to build secure, scalable software, leveraging AI and automation
              to ensure market-ready products. Our mission is to drive
              innovation and reliability in QA while fostering trust through
              transparent reporting and exceptional support.
            </p>
          </div>
          <div id="mission-vision" className="bg-white p-6 shadow-lg rounded">
            <h2 className="section-title">Our Mission & Vision</h2>
            <p className="text-base md:text-xl text-[#010D3E] mt-4">
              <span className="font-bold">Mission:</span> Empower businesses
              with innovative QA solutions to deliver robust, secure, and
              high-quality software.
            </p>
            <p className="text-base md:text-xl text-[#010D3E] mt-4">
              <span className="font-bold">Vision:</span> Become a global leader
              in QA by setting new standards in innovation and reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMissionVision;
