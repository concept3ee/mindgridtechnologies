"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { partners } from "../../constants/data";
import React from "react";

function Partners() {
  return (
    <section>
      <div className="py-9 md:py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="section-wrapper">
            <h2 className="section-title mt-4">Our Partners</h2>
            <p className="section-description mt-4">
              We collaborates with trusted global partners to deliver
              exceptional software quality assurance solutions, ensuring
              precision and reliability for every project.
            </p>
          </div>
          <div className="flex mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            <motion.div
              className="flex gap-14 flex-none pr-14"
              animate={{
                translateX: "-50%",
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
            >
              {...new Array(2).fill(0).map((_, index) => (
                <React.Fragment key={index}>
                  {partners.map((item, itemIndex) => {
                    return (
                      <Image
                        key={itemIndex}
                        src={item.image}
                        alt="Partners Logos"
                        width={200}
                        height={150}
                        className="partners-logo"
                      />
                    );
                  })}
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
