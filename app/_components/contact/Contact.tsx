import DataForm from "../form/DataForm";

function Contact() {
  return (
    <section
      id="#contact"
      className="bg-gradient-to-b from-white to-[#D2dCFF] py-24"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="section-wrapper">
          <h2 className="section-title mt-4">Partner with us today!</h2>
          <p className="section-description mt-4">
            We are delivering innovative testing solutions to ensure flawless
            digital experiences.
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <DataForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
