import { services } from "../../constants/data";

function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="">
          <div className="section-wrapper">
            <h2 className="section-title">Our Services</h2>
            <p className="section-description mt-4">
              We collaborate with developers to build secure, scalable software,
              leveraging automation to ensure market-ready products. Our mission
              is to drive innovation and reliability in QA while fostering trust
              through transparent reporting and exceptional support.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-5 shadow-md rounded">
                <h3 className="text-2xl font-semibold bg-gradient-to-b from-black to-[#10d4ee] text-transparent bg-clip-text">
                  {service.title}
                </h3>
                <p className="mt-2 text-base text-[#010D3E]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
