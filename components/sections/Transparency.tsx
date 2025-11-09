/**
 * Transparency You Can Trust Section
 * Exact Figma design implementation
 */

import Image from "next/image";

const features = [
  {
    id: "smarter-implementation",
    title: "Smarter Implementation, Stronger Insights",
    description: "Avni Helps You Streamline Programs And Capture Accurate Data For Monitoring And Evaluation.",
    icon: "/icons/smarter-implementation.png",
  },
  {
    id: "data-trust",
    title: "Data You Can Trust",
    description: "Gain Dependable Insights From Information Collected Through Your Team's Everyday Fieldwork.",
    icon: "/icons/data-trust.png",
  },
  {
    id: "see-impact",
    title: "See Impact In Real Time",
    description: "Turn Field Data Into Interactive Dashboards And Automated Reports That Highlight Progress Instantly.",
    icon: "/icons/see-impact.png",
  },
  {
    id: "seamless-data",
    title: "Seamless Data Flow",
    description: "Easily Export Your Data Or Connect Avni With Other Tools For Deeper Analysis And Collaboration.",
    icon: "/icons/seamless-data.png",
  },
];

export default function Transparency() {
  return (
    <section className="relative bg-white py-[80px]">
      <div className="w-[1440px] mx-auto px-[92px]">
        {/* Header */}
        <div className="text-center mb-[60px]">
          <p className="font-anek font-medium text-[14px] leading-[20px] text-[#fba47e] uppercase mb-[16px]">
            FOR DONORS
          </p>
          <h2 className="font-anek font-bold text-[48px] leading-[48px] text-[#0b2540] mb-[24px]">
            Transparency You Can Trust
          </h2>
          <p className="font-noto text-[16px] leading-[24px] text-[#000000] max-w-[760px] mx-auto">
            Avni gives funders <span className="bg-[#FFF4E6]">real-time visibility and reliable data</span> — turning impact into measurable insight.
          </p>
        </div>

        {/* Features Grid - 2x2 */}
        <div className="grid grid-cols-2 gap-x-[80px] gap-y-[60px]">
          {features.map((feature) => (
            <div key={feature.id} className="flex gap-[24px] items-start">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="relative w-[48px] h-[48px]">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Title */}
                <h3 className="font-anek font-bold text-[20px] leading-[24px] text-[#0b2540] mb-[12px]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="font-noto text-[14px] leading-[22px] text-[#000000]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
