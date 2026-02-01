import { IpInfo } from "@/lib/types";

const BASE_URL = "/api/ip";

export async function getIpInfo(): Promise<IpInfo> {
    try {
        const res = await fetch(BASE_URL, {
            next: { revalidate: 3600 },
            headers: {
                "Accept": "application/json"
            }
        });

        if (!res.ok) {
            throw new Error("Failed to fetch IP info");
        }

        return res.json();
    } catch (error) {
        console.error("Error fetching IP info:", error);
        throw error;
    }
}
