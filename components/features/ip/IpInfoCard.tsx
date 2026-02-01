"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IpInfo } from "@/lib/types";
import { Globe, Server, Network, Flag, Map, Copy, FileJson, Check } from "lucide-react";
import { useState } from "react";

interface IpInfoCardProps {
    data: IpInfo;
}

export function IpInfoCard({ data }: IpInfoCardProps) {
    const [copiedIp, setCopiedIp] = useState(false);
    const [copiedJson, setCopiedJson] = useState(false);

    // Mapping fields as requested: ASN, AS Name, AS Domain, Country Code, Country, Continent
    const items = [
        { label: "ASN", value: data.asn, icon: Network, color: "text-blue-400" },
        { label: "AS Name", value: data.as_name, icon: Server, color: "text-purple-400" },
        { label: "AS Domain", value: data.as_domain || "N/A", icon: Globe, color: "text-green-400" },
        { label: "Country Code", value: data.country_code, icon: Flag, color: "text-yellow-400" },
        { label: "Country", value: data.country, icon: Map, color: "text-orange-400" },
        { label: "Continent Code", value: data.continent_code || data.continent || "N/A", icon: Globe, color: "text-cyan-400" },
    ];

    const handleCopyIp = () => {
        navigator.clipboard.writeText(data.ip);
        setCopiedIp(true);
        setTimeout(() => setCopiedIp(false), 2000);
    };

    const handleCopyJson = () => {
        navigator.clipboard.writeText(JSON.stringify(data, null, 2));
        setCopiedJson(true);
        setTimeout(() => setCopiedJson(false), 2000);
    };

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, idx) => (
                    <Card key={idx} className="bg-white/5 dark:bg-black/20 backdrop-blur-md border-white/5 overflow-hidden hover:bg-white/10 transition-all duration-300">
                        <CardContent className="p-6 flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg bg-white/5 ${item.color}`}>
                                    <item.icon className="w-5 h-5" />
                                </div>
                                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                    {item.label}
                                </p>
                            </div>
                            <p className="text-xl font-mono font-medium truncate" title={String(item.value)}>
                                {item.value || "-"}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <Button
                    onClick={handleCopyIp}
                    variant="outline"
                    className="bg-white/5 border-white/10 hover:bg-white/10 text-white w-full h-12"
                >
                    {copiedIp ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                    {copiedIp ? "Copied!" : "Copy IP"}
                </Button>
                <Button
                    onClick={handleCopyJson}
                    variant="outline"
                    className="bg-white/5 border-white/10 hover:bg-white/10 text-white w-full h-12"
                >
                    {copiedJson ? <Check className="w-4 h-4 mr-2" /> : <FileJson className="w-4 h-4 mr-2" />}
                    {copiedJson ? "Copied JSON" : "Copy JSON"}
                </Button>
            </div>
        </div>
    );
}
