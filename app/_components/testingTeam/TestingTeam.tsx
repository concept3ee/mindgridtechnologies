import Image from "next/image";

function TestingTeam() {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCEE] py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="section-wrapper">
          <h2 className="section-title mt-4">
            Empowering teams with cutting-edge testing...
          </h2>
          <p className="section-description mt-4">
            With a passionate team of experts, we help businesses build flawless
            digital products, accelerating their journey toward success in an
            ever-evolving tech landscape.
          </p>
        </div>
        <Image
          src="/images/testing-team.png"
          alt="Testing Team"
          width={600}
          height={600}
          className="mt-8 mx-auto"
        />
      </div>
    </section>
  );
}

export default TestingTeam;
