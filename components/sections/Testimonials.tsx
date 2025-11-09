/**
 * Testimonials Section - What Our Users Say
 * Exact Figma design with carousel functionality
 */

"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { Carousel } from "@/components/ui";
import { testimonials } from "@/data";

export default function Testimonials() {
  return (
    <section className="relative bg-[#F5F5F5] py-[80px]">
      <div className="w-[1440px] mx-auto px-[92px]">
        {/* Header */}
        <div className="text-center mb-[60px]">
          <p className="font-anek font-medium text-[14px] leading-[20px] text-[#fba47e] uppercase mb-[16px]">
            TESTIMONIALS
          </p>
          <h2 className="font-anek font-bold text-[48px] leading-[48px] text-[#0b2540]">
            What Our Users Say?
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <Carousel itemsPerView={3} gap={24}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-[16px] p-[32px] h-full flex flex-col"
            >
              {/* Quote Icon */}
              <div className="mb-[24px]">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 28C12 24.686 14.686 22 18 22V18C12.477 18 8 22.477 8 28V36H20V28H12ZM32 28C32 24.686 34.686 22 38 22V18C32.477 18 28 22.477 28 28V36H40V28H32Z"
                    fill="#FBA47E"
                  />
                </svg>
              </div>

              {/* Quote Text */}
              <p className="font-noto text-[16px] leading-[24px] text-[#000000] italic mb-[24px] flex-grow">
                "{testimonial.quote}"
              </p>

              {/* Impact Stat */}
              {testimonial.stat && (
                <div className="mb-[24px]">
                  <p className="font-anek font-bold text-[16px] leading-[20px] text-[#419372]">
                    {testimonial.stat}
                  </p>
                </div>
              )}

              {/* Video Thumbnail or Spacer */}
              {testimonial.type === "video" && testimonial.videoThumbnail && (
                <div className="relative w-full h-[180px] rounded-[12px] overflow-hidden mb-[24px] group cursor-pointer">
                  <Image
                    src={testimonial.videoThumbnail}
                    alt={`${testimonial.name} video testimonial`}
                    fill
                    className="object-cover"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-all">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-8 h-8 text-[#419372] fill-[#419372] ml-1" />
                    </div>
                  </div>
                </div>
              )}

              {/* Author Info */}
              <div className="flex items-center gap-[12px] mt-auto">
                {/* Avatar - Smaller circular image */}
                {testimonial.image && (
                  <div className="relative w-[48px] h-[48px] rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Name and Organization */}
                <div>
                  <p className="font-anek font-bold text-[16px] leading-[20px] text-[#0b2540]">
                    {testimonial.name}
                  </p>
                  {testimonial.position && (
                    <p className="font-noto text-[13px] leading-[18px] text-[#000000] opacity-70">
                      {testimonial.position}
                    </p>
                  )}
                  <p className="font-anek text-[13px] leading-[18px] text-[#419372]">
                    {testimonial.organization}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
