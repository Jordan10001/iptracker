import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        // Ambil IP client dari query atau header (Cloudflare/Vercel friendly)
        const url = new URL(req.url);
        const ipQuery = url.searchParams.get("ip");

        const forwarded = req.headers.get("x-forwarded-for");
        const cf = req.headers.get("cf-connecting-ip");
        const real = req.headers.get("x-real-ip");

        // x-forwarded-for bisa berisi beberapa IP, ambil yang pertama
        const forwardedIp = forwarded ? forwarded.split(",")[0].trim() : null;
        const ip = ipQuery || cf || real || forwardedIp || null;

        // We use API_TOKEN to match your existing .env file
        const API_TOKEN = process.env.API_TOKEN;

        if (!API_TOKEN) {
            return NextResponse.json(
                { error: "Server API configuration missing" },
                { status: 500 }
            );
        }

        const base = "https://api.ipinfo.io/lite";
        // jika IP kosong, gunakan path query standard /json (requester IP) atau /lite jika diinginkan
        // User requested /lite logic in snippet, but /json is standard for full data. 
        // The previous snippet used /lite/me. 
        // Adapting to user's "path" logic:
        const path = ip ? `/${ip}` : "/json";

        // Note: ipinfo.io/json (no IP) returns the requester's info. 
        // ipinfo.io/1.2.3.4 returns that IP's info.

        const res = await fetch(`${base}${path}?token=${API_TOKEN}`, { cache: "no-store" });

        if (!res.ok) {
            const text = await res.text();
            return NextResponse.json(
                { error: "Failed to fetch ipinfo", status: res.status, detail: text },
                { status: res.status || 500 }
            );
        }

        const data = await res.json();

        return NextResponse.json({
            ip: ip || data.ip, // Use detected IP or fallback to what API returned
            ...data,
        });
    } catch (err) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
