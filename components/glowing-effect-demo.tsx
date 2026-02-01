"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Globe, Shield, Zap, Search } from "lucide-react";
import GradientText from "./GradientText";

export default function GlowingEffectDemo() {
    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden py-20 border-t border-white/5">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] -z-10 animate-pulse" />

            <h2 className="text-center text-4xl font-bold mb-8 bg-clip-text text-transparent">
                <GradientText
                    colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="custom-class"
                >
                    Advanced Features
                </GradientText>
            </h2>
            <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-2 lg:gap-4 max-w-7xl mx-auto px-4">
                <GridItem
                    area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
                    icon={<Globe className="h-4 w-4 text-white" />}
                    title="Global IP Lookup"
                    description="Instant geolocation data for any IP address worldwide with precision accuracy."
                />
                <GridItem
                    area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
                    icon={<Zap className="h-4 w-4 text-white" />}
                    title="Real-time Performance"
                    description="Optimized latency with edge caching for lightning-fast data retrieval."
                />
                <GridItem
                    area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
                    icon={<Shield className="h-4 w-4 text-white" />}
                    title="Developer API"
                    description="We utilize the reliable ipinfo.io API to provide accurate and real-time data integration."
                />
                <GridItem
                    area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
                    icon={<Search className="h-4 w-4 text-white" />}
                    title="Detailed Insights"
                    description="Get IP, ISP, Organization, Timezone, and more in a structured JSON format."
                />
                <GridItem
                    area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
                    icon={<Globe className="h-4 w-4 text-white" />}
                    title="Secure & Private"
                    description="Your privacy is paramount. We do not store or log any of your query data."
                />
            </ul>
        </div>
    );
}

interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
    return (
        <li className={`min-h-[12rem] md:min-h-[20rem] list-none ${area}`}>
            <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-transparent p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-4 md:p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] bg-transparent">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border border-gray-600 p-2 ">
                            {icon}
                        </div>
                        <div className="space-y-3">
                            <h3 className="pt-0.5 text-2xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-3xl/[1.875rem] text-balance text-black dark:text-white">
                                {title}
                            </h3>
                            <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-base/[1.125rem] md:text-lg/[1.375rem]  text-black dark:text-neutral-400">
                                {description}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
