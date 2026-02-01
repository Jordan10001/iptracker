"use client";

import { useState, useEffect } from "react";

export function ClientClock() {
    const [time, setTime] = useState<string | null>(null);

    useEffect(() => {
        // Set initial time
        setTime(new Date().toLocaleTimeString());

        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!time) return null; // Avoid hydration mismatch by rendering nothing initially

    return (
        <div className="font-mono font-bold text-sm md:text-base text-white/80">
            {time}
        </div>
    );
}
