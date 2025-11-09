/**
 * CTA Section - Built By Non-Profits, For Non-Profits
 * Exact Figma design implementation
 */

import Image from "next/image";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="relative bg-white py-[100px] overflow-hidden">
      <div className="w-[1440px] mx-auto px-[92px]">
        <div className="flex items-center gap-[100px]">
          {/* Left Side - Vector 6 contains the complete design */}
          <div className="relative flex-shrink-0" style={{ width: '540px', height: '440px' }}>
            {/* Vector 6 - Complete image with organic background blobs */}
            <div className="relative w-full h-full">
              <Image
                src="/vector-6.png"
                alt="Field team working together"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="flex-1">
            {/* Title */}
            <h2 className="font-anek font-bold text-[48px] leading-[48px] text-[#0b2540] mb-[24px]">
              Built By Non-Profits, For Non-Profits
            </h2>

            {/* Description */}
            <p className="font-noto text-[16px] leading-[24px] text-[#000000] mb-[8px]">
              Ready to Transform Your Field Operations?
            </p>
            <p className="font-noto text-[16px] leading-[24px] text-[#000000] mb-[32px]">
              Start your journey with Avni today.
            </p>
            <p className="font-anek font-bold text-[16px] leading-[24px] text-[#0b2540] mb-[32px]">
              No credit card required.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-[16px]">
              <Link
                href="/signup"
                className="px-[32px] py-[14px] bg-[#419372] text-white rounded-[48px] font-anek font-semibold text-[16px] leading-[20px] hover:bg-[#357a5e] transition-all"
              >
                Sign Up for Free Trial
              </Link>
              <Link
                href="/demo"
                className="px-[32px] py-[14px] border-2 border-[#419372] text-[#419372] rounded-[48px] font-anek font-semibold text-[16px] leading-[20px] hover:bg-[#419372] hover:text-white transition-all"
              >
                Book A Demo
              </Link>
              <Link
                href="/contact"
                className="px-[32px] py-[14px] border-2 border-[#419372] text-[#419372] rounded-[48px] font-anek font-semibold text-[16px] leading-[20px] hover:bg-[#419372] hover:text-white transition-all"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
