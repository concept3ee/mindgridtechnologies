"use client";

import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

import { pricing } from "../../constants/data";

function Pricing() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="section-wrapper">
          <h2 className="section-title">Subscription Packages</h2>
          <p className="section-description mt-4">
            We offers tailored subscription packages designed to meet diverse QA
            needs. Choose the right package to accelerate your product&apos;s
            success.
          </p>
        </div>

        <div className="flex flex-col gap-4 items-center mt-8 lg:flex-row lg:items-end lg:justify-center">
          {pricing.map((price, priceIndex) => (
            <div
              key={priceIndex}
              className={twMerge(
                "card",
                price.inverse === true && "border-black bg-black text-white"
              )}
            >
              <div className="flex justify-between">
                <h3
                  className={twMerge(
                    "text-lg font-bold text-black/50",
                    price.inverse === true && "text-white/60"
                  )}
                >
                  {price.title}
                </h3>
                {price.popular === true && (
                  <div className="inline-flex text-s px-3 py-1.5 rounded-xl border border-white/20">
                    <motion.span
                      animate={{
                        backgroundPositionX: "100%",
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                      }}
                      className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                    >
                      Popular
                    </motion.span>
                  </div>
                )}
              </div>
              <div className="flex items-baseline gap-1 mt-7">
                <span className="text-3xl font-bold tracking-tighter leading-none">
                  ${price.monthlyPrice}
                </span>
                <span className="font-bold text-black/50 tracking-tighter">
                  /month
                </span>
              </div>
              <button
                className={twMerge(
                  "btn btn-primary w-full mt-5",
                  price.inverse === true && "bg-white text-black"
                )}
              >
                {price.buttonText}
              </button>
              <ul className="flex flex-col gap-4 mt-3">
                {price.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="text-sm flex items-center gap-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
