import { NextResponse } from "next/server";

export async function GET() {
    const API_TOKEN = process.env.API_TOKEN;

    if (!API_TOKEN) {
        return NextResponse.json({ error: "Server API configuration missing" }, { status: 500 });
    }

    try {
        const res = await fetch(`https://api.ipinfo.io/lite/me?token=${API_TOKEN}`, {
            next: { revalidate: 3600 },
            headers: {
                "Accept": "application/json"
            }
        });

        if (!res.ok) {
            throw new Error("Failed to fetch upstream IP data");
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch IP info" }, { status: 500 });
    }
}
