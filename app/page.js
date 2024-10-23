import AboutSection from "@/components/AboutSection";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";

export default function Home() {
  return (
    <div className="space-y-10">
      <HeroSection />
      <VisionSection />
      <AboutSection />
    </div>
  );
}
