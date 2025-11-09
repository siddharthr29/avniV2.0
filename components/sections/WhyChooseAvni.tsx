/**
 * Why Choose Avni Section
 * Exact Figma design implementation
 */

import Image from "next/image";

const benefits = [
  {
    id: "affordable",
    title: "Affordable",
    description: "Pricing suited for non-profits. It is 70% more affordable than alternatives.",
    icon: "/icons/affordable.png",
  },
  {
    id: "sustained-partnerships",
    title: "Sustained Partnerships",
    description: "Partners continue year-on-year. We walk alongside you in your journey.",
    icon: "/icons/sustainable.png",
  },
  {
    id: "setup-in-minutes",
    title: "Setup In Minutes",
    description: "No coding required. Intuitive interface designed with field workers.",
    icon: "/icons/setup-in-minutes.png",
  },
  {
    id: "local-support",
    title: "Local Support",
    description: "Same timezone, same context. Easily accessible team that understands ground realities",
    icon: "/icons/local-support.png",
  },
];

export default function WhyChooseAvni() {
  return (
    <section className="relative bg-[#F5F5F5] py-[80px]">
      <div className="w-[1440px] mx-auto px-[92px]">
        {/* Header */}
        <div className="text-center mb-[60px]">
          <p className="font-anek font-medium text-[14px] leading-[20px] text-[#fba47e] uppercase mb-[16px]">
            SUSTAINABLE TECHNOLOGY FOR NGOS
          </p>
          <h2 className="font-anek font-bold text-[48px] leading-[48px] text-[#0b2540] mb-[24px]">
            Why Choose Avni?
          </h2>
          <p className="font-noto text-[16px] leading-[24px] text-[#000000] max-w-[760px] mx-auto">
            Still managing field data on paper? Avni helps you go digital — easily, affordably, and with the support you need at every step. Here's how we make your transition smooth and effective:
          </p>
        </div>

        {/* Benefits Grid - 4 columns */}
        <div className="grid grid-cols-4 gap-[24px]">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="bg-white rounded-[16px] p-[32px] text-center hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-[24px]">
                <div className="relative w-[80px] h-[80px]">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="font-anek font-bold text-[20px] leading-[24px] text-[#0b2540] mb-[16px]">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="font-noto text-[14px] leading-[22px] text-[#000000]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
