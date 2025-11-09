"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function AnnouncementBanner() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Target: November 21, 2025, 23:59 IST (UTC+5:30)
      const targetDate = new Date('2025-11-21T23:59:00+05:30');
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <div 
      className="fixed top-[72px] left-0 right-0 h-[36px] z-40 shadow-md"
      style={{
        background: 'linear-gradient(90deg, rgba(251, 164, 126, 0.85) 0%, rgba(255, 119, 81, 0.85) 33.17%, rgba(243, 202, 64, 0.85) 100%)'
      }}
    >
      <div className="max-w-7xl w-full mx-auto h-full flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 2xl:px-12 gap-2 sm:gap-4">
        {/* Text */}
        <p className="font-anek font-bold text-[10px] sm:text-[12px] lg:text-[14px] leading-tight text-[#000000] uppercase tracking-wide text-center sm:text-left">
          ⚡ <span className="hidden sm:inline">Sign up for avni launchpad event - december 2025, free! 🔥</span>
          <span className="sm:hidden">Avni Launchpad Dec 2025</span> Last Chance!
        </p>
        {/* Right section */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-[10px] flex-shrink-0">
          {/* Timer box */}
          <div className="px-2 sm:px-3 lg:px-[12px] py-1 rounded-[6px] flex items-center justify-center bg-white shadow-sm">
            <span className="font-mono text-[10px] sm:text-[11px] lg:text-[13px] leading-tight text-[#000000] font-bold whitespace-nowrap">
              {formatNumber(timeLeft.days)} : {formatNumber(timeLeft.hours)} : {formatNumber(timeLeft.minutes)} : {formatNumber(timeLeft.seconds)}
            </span>
          </div>
          {/* Days text */}
          <span className="hidden md:inline font-noto text-[10px] lg:text-[11px] leading-tight text-[#000000] font-medium whitespace-nowrap">Days remaining ⏰</span>
          {/* Apply button */}
          <Link
            href="/apply"
            className="bg-[#419372] text-white rounded-[6px] font-anek font-extrabold text-[10px] sm:text-[11px] leading-tight hover:bg-[#357a5e] hover:scale-105 transition-all shadow-md uppercase tracking-wide px-3 sm:px-4 py-1.5 sm:py-2 whitespace-nowrap"
          >
            Apply Now!
          </Link>
        </div>
      </div>
    </div>
  );
}
