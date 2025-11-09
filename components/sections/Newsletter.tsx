'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe:', email);
  };

  return (
    <section className="py-[80px] px-[92px] bg-[#F5F5F5]">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center max-w-[800px] mx-auto">
          <h2 className="font-anek font-bold text-[40px] leading-[48px] text-[#0b2540] mb-[16px]">
            Stay Connected With Avni
          </h2>
          <p className="font-noto text-[16px] leading-[24px] text-[#000000] mb-[32px]">
            Get the latest updates, releases, and event news in your inbox.<br />
            Join to engage with the growing Avni community.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-[16px] justify-center items-center">
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[320px] h-[48px] px-[24px] rounded-[48px] border border-[#E0E0E0] bg-white font-noto text-[14px] text-[#000000] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#419372] focus:border-transparent"
              required
            />
            <button 
              type="submit"
              className="px-[32px] py-[14px] bg-[#419372] text-white rounded-[48px] font-anek font-semibold text-[16px] leading-[20px] hover:bg-[#357a5e] transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
