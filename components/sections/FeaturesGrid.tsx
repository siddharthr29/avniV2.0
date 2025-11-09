import Image from "next/image";

const features = [
  {
    icon: "/icons/analytics.svg",
    title: "Powerful Analytics",
    description: "Track your program's impact with real-time dashboards and customizable reports"
  },
  {
    icon: "/icons/security.svg",
    title: "Secure & Compliant",
    description: "Enterprise-grade security with role-based access and data encryption"
  },
  {
    icon: "/icons/workflow.svg",
    title: "Flexible Workflows",
    description: "Configure forms and workflows to match your unique program needs"
  },
  {
    icon: "/icons/offline.svg",
    title: "Works Offline",
    description: "Field teams can collect data without internet and sync when connected"
  }
];

export default function FeaturesGrid() {
  return (
    <section className="py-[100px] px-[92px] bg-white">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 gap-[48px]">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#F5F5F5] rounded-[20px] p-[48px] hover:shadow-lg transition-shadow">
              <div className="w-[72px] h-[72px] mb-[24px] relative">
                <Image src={feature.icon} alt={feature.title} fill className="object-contain" />
              </div>
              <h3 className="font-anek font-bold text-[28px] leading-[32px] text-[#0b2540] mb-[16px]">
                {feature.title}
              </h3>
              <p className="font-noto text-[18px] leading-[26px] text-[rgba(0,0,0,0.8)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
