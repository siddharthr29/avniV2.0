"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { sectors, impactStories, type Sector } from "@/data/impact-stories";

export default function ImpactStories() {
  const [activeSector, setActiveSector] = useState<Sector>("Education");
  const story = impactStories[activeSector];

  return (
    <section className="relative bg-[#F5F5F5] py-[80px]">
      <div className="w-[1440px] mx-auto">
        {/* Header */}
        <div className="text-center mb-[60px]">
          <p className="font-anek font-medium text-[14px] leading-[20px] text-[#fba47e] uppercase mb-[16px]">
            AVNI SCALING ACROSS SECTORS
          </p>
          <h2 className="font-anek font-bold text-[64px] leading-[64px] text-[#0b2540] mb-[16px]">
            Impact Stories
          </h2>
          <p className="font-noto text-[20px] leading-[27px] text-[#000000]">
            Empowering Every Mission, Adapting To Every Context
          </p>
        </div>

        {/* Sector Tabs */}
        <div className="flex justify-center gap-[16px] mb-[60px] flex-wrap px-[92px]">
          {sectors.map((sector) => (
            <button
              key={sector}
              onClick={() => setActiveSector(sector)}
              className={`px-[24px] py-[12px] rounded-[24px] font-anek font-medium text-[14px] leading-[20px] transition-all duration-300 ${
                activeSector === sector
                  ? "bg-[#419372] text-white shadow-lg scale-105"
                  : "bg-white text-[#0b2540] hover:bg-[#419372]/10 hover:scale-102"
              }`}
            >
              {sector}
            </button>
          ))}
        </div>

        {/* Story Content with Animation */}
        <div 
          className="flex gap-[60px] items-center justify-center px-[92px] transition-all duration-500 ease-in-out"
          key={activeSector}
        >
          {/* Image */}
          <div className="relative w-[420px] h-[280px] rounded-[24px] overflow-hidden shadow-xl flex-shrink-0 animate-fadeIn">
            <Image
              src={story.image}
              alt={story.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-shrink-0 animate-slideIn" style={{ width: '538px' }}>
            <h3 className="font-anek font-bold text-[32px] leading-[38px] text-[#0b2540] mb-[20px]">
              {story.title}
            </h3>
            <p className="font-noto text-[16px] leading-[26px] text-[#000000] mb-[32px]">
              {story.description}
            </p>
            <Link
              href="/impact"
              className="inline-flex items-center justify-center px-[24px] py-[12px] border-2 border-[#419372] text-[#419372] rounded-[20px] font-anek font-medium text-[14px] hover:bg-[#419372] hover:text-white transition-all"
            >
              Read More →
            </Link>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        
        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}
