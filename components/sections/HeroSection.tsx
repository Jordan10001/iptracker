import { IpInfoCard } from "@/components/features/ip/IpInfoCard";
import { IpInfo } from "@/lib/types";
import { Skeleton } from "@/components/ui/skeleton";
import Magnet from "@/components/Magnet";
import { ClientClock } from "@/components/ui/client-clock";
import GradientText from '@/components/GradientText'

interface HeroSectionProps {
    data: IpInfo | null;
    loading: boolean;
}

export function HeroSection({ data, loading }: HeroSectionProps) {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden py-20 px-4">
            {/* Top Left Magnet - IP Text */}
            <div className="absolute top-4 left-4 z-50 md:top-8 md:left-8">
                <Magnet padding={50} magnetStrength={3}>
                    <div className="px-4 py-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-md text-white/80 font-mono text-sm font-bold">
                        IP
                    </div>
                </Magnet>
            </div>

            {/* Top Right Magnet - Clock */}
            <div className="absolute top-4 right-4 z-50 md:top-8 md:right-8">
                <Magnet padding={50} magnetStrength={3}>
                    <div className="px-4 py-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-md">
                        <ClientClock />
                    </div>
                </Magnet>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] -z-10 animate-pulse" />

            <div className="w-full max-w-5xl z-10 flex flex-col items-center">
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-8 sm:mb-12 text-center bg-clip-text text-transparent break-all px-4">
                    <GradientText
                        colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                        animationSpeed={3}
                        showBorder={false}
                        className="custom-class"
                    >
                        {loading ? (
                            <Skeleton className="h-12 w-64 mx-auto bg-white/10" />
                        ) : (data?.ip || "Unknown IP")}
                    </GradientText>
                </h1>

                {loading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
                        {[1, 2, 3, 4, 5, 6].map(i => <Skeleton key={i} className="h-32 w-full rounded-xl" />)}
                    </div>
                ) : data ? (
                    <IpInfoCard data={data} />
                ) : (
                    <div className="text-center text-red-400">Failed to load IP data</div>
                )}
            </div>
        </section>
    );

}
