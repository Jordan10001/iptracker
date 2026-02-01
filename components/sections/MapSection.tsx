import WorldMap from "@/components/ui/world-map";
import { IpInfo } from "@/lib/types";
import { getCountryCoordinates, parseLocString } from "@/lib/geo";
import GradientText from "../GradientText";

interface MapSectionProps {
    data: IpInfo | null;
}

export function MapSection({ data }: MapSectionProps) {
    // Try 'loc' first, then fallback to country code mapping
    let userLoc = null;

    if (data?.loc) {
        userLoc = parseLocString(data.loc);
    } else if (data?.country_code) {
        userLoc = getCountryCoordinates(data.country_code);
    } else if (data?.country) {
        // Basic fallback if we only have country name (unlikely vs code but safe)
        // For now just skip if no code
    }

    // Default connection: San Francisco (Tech Hub) to User
    const sfLoc = { lat: 37.7749, lng: -122.4194 };

    const dots = userLoc ? [
        {
            start: sfLoc,
            end: userLoc,
        }
    ] : [];

    return (
        <section className="md:min-h-screen flex flex-col justify-center items-center relative bg-background overflow-hidden border-t border-white/5 py-4 sm:py-8 md:py-10 mb-4">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background z-10 pointer-events-none" />

            <div className="w-full h-full flex flex-col items-center justify-center z-20 relative px-4">
                <h2 className="text-center text-4xl font-bold mb-2 md:mb-8 bg-clip-text text-transparent">
                    <GradientText
                        colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
                        animationSpeed={2}
                        showBorder={false}
                        className="custom-class"
                    >
                        Global Connectivity
                    </GradientText>
                </h2>

                <div className="w-full h-[40vh] sm:h-[60vh] md:h-[80vh] opacity-80 hover:opacity-100 transition-opacity duration-1000 mb-4">
                    <WorldMap dots={dots} lineColor="#8b5cf6" />
                </div>
            </div>
        </section>
    );

}
