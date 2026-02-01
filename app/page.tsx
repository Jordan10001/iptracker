"use client";

import { useIpInfo } from "@/components/features/ip/useIpInfo";
import { HeroSection } from "@/components/sections/HeroSection";
import { MapSection } from "@/components/sections/MapSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";

export default function Home() {
  const { data, loading } = useIpInfo();

  return (
    <div className="flex flex-col gap-0">
      <HeroSection data={data} loading={loading} />
      <MapSection data={data} />
      <FeaturesSection />
    </div>
  );
}
