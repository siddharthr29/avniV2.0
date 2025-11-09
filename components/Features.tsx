import Image from "next/image";

const features = [
  {
    icon: "https://www.figma.com/api/mcp/asset/b7cf3ea0-3920-47dc-b1de-abeb16e829c5",
    title: "Real-time Analytics",
    description: "Monitor program performance with live dashboards and comprehensive reporting tools",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/5f18fc00-9b06-4e6f-a172-b0d0458c598d",
    title: "Secure & Compliant",
    description: "Enterprise-grade security with role-based access control and data encryption",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/c237f74d-623a-42b7-aefc-d7304f549a46",
    title: "Smart Workflows",
    description: "Automate repetitive tasks and create custom workflows for your programs",
  },
  {
    icon: "https://www.figma.com/api/mcp/asset/5b78e730-a612-4a9f-8383-9e32cf8dd257",
    title: "Offline Capability",
    description: "Collect data anywhere, even without internet connectivity",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-anek font-bold text-[40px] text-primary-dark mb-4">
            Leading-Edge Features That Bring Joy
          </h2>
          <p className="font-noto text-[20px] text-gray-600 max-w-3xl mx-auto">
            Avni adapts to diverse program needs — making data collection and monitoring effortless
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative w-16 h-16 mb-6">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-anek font-bold text-[24px] text-primary-dark mb-3">
                {feature.title}
              </h3>
              <p className="font-noto text-[16px] text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
