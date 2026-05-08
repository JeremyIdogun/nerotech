import { HeroSection } from "@/components/sections/HeroSection";
import { PillarsSection } from "@/components/sections/PillarsSection";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { SectorSection } from "@/components/sections/SectorSection";
import { ProofSection } from "@/components/sections/ProofSection";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PillarsSection />
      <ApproachSection />
      <SectorSection />
      <ProofSection />
      <AboutPreview />
      <CTASection />
    </>
  );
}
