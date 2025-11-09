import Image from "next/image";

export default function PartnerLogos() {
  return (
    <section className="py-[80px] px-[92px] bg-white">
      <div className="max-w-[1440px] mx-auto">
        <p className="text-center font-anek font-semibold text-[14px] leading-[20px] text-[#FF6B35] uppercase mb-[60px]">
          TRUSTED BY 60+ NGOS
        </p>
        <div className="flex items-center justify-center gap-[80px]">
          <div className="relative w-[150px] h-[80px] grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
            <Image src="/logos/calcutta-kids.png" alt="Calcutta Kids" fill className="object-contain" />
          </div>
          <div className="relative w-[150px] h-[80px] grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
            <Image src="/logos/govt-emblem.png" alt="Government of India" fill className="object-contain" />
          </div>
          <div className="relative w-[150px] h-[80px] grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
            <Image src="/logos/arghyam.png" alt="Arghyam" fill className="object-contain" />
          </div>
          <div className="relative w-[150px] h-[80px] grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
            <Image src="/logos/goonj.png" alt="Goonj" fill className="object-contain" />
          </div>
          <div className="relative w-[150px] h-[80px] grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100">
            <Image src="/logos/hasiru dala.png" alt="Hasiru Dala" fill className="object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
