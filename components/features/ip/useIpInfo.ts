"use client";

import { useState, useEffect } from "react";
import { IpInfo } from "@/lib/types";
import { getIpInfo } from "@/lib/api";

interface UseIpInfoResult {
    data: IpInfo | null;
    loading: boolean;
    error: Error | null;
}

export function useIpInfo(): UseIpInfoResult {
    const [data, setData] = useState<IpInfo | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        let mounted = true;

        async function fetchData() {
            try {
                setLoading(true);
                const info = await getIpInfo();
                if (mounted) {
                    setData(info);
                    setError(null);
                }
            } catch (err) {
                if (mounted) {
                    setError(err instanceof Error ? err : new Error("Unknown error"));
                }
            } finally {
                if (mounted) {
                    setLoading(false);
                }
            }
        }

        fetchData();

        return () => {
            mounted = false;
        };
    }, []);

    return { data, loading, error };
}
