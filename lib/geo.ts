interface Coordinates {
    lat: number;
    lng: number;
}

// Simple mapping or algorithm to get coordinates from country code
// For a real app, this might use a larger dataset.
// Here we can use a basic map for demo purposes or parse the 'loc' field if available combined with country center fallback.
// However, the requirement asks for "Map ISO country code -> latitude & longitude".

const COUNTRY_COORDINATES: Record<string, Coordinates> = {
    US: { lat: 37.0902, lng: -95.7129 },
    GB: { lat: 55.3781, lng: -3.4360 },
    CA: { lat: 56.1304, lng: -106.3468 },
    AU: { lat: -25.2744, lng: 133.7751 },
    DE: { lat: 51.1657, lng: 10.4515 },
    FR: { lat: 46.2276, lng: 2.2137 },
    JP: { lat: 36.2048, lng: 138.2529 },
    IN: { lat: 20.5937, lng: 78.9629 },
    BR: { lat: -14.2350, lng: -51.9253 },
    CN: { lat: 35.8617, lng: 104.1954 },
    ID: { lat: -5.9999, lng: 120.0000 },
    SG: { lat: 1.3521, lng: 103.8198 },
    MY: { lat: 4.2105, lng: 101.9758 },
    MX: { lat: 23.6345, lng: -102.5528 },
    AR: { lat: -38.4161, lng: -63.6167 },
    CL: { lat: -35.6751, lng: -71.5430 },
    CO: { lat: 4.5709, lng: -74.2973 },
    PE: { lat: -9.1900, lng: -75.0152 },
    IT: { lat: 41.8719, lng: 12.5674 },
    ES: { lat: 40.4637, lng: -3.7492 },
    NL: { lat: 52.1326, lng: 5.2913 },
    RU: { lat: 61.5240, lng: 105.3188 },
    UA: { lat: 48.3794, lng: 31.1656 },
    PL: { lat: 51.9194, lng: 19.1451 },
    SE: { lat: 60.1282, lng: 18.6435 },
    NO: { lat: 60.4720, lng: 8.4689 },
    KR: { lat: 35.9078, lng: 127.7669 },
    TH: { lat: 15.8700, lng: 100.9925 },
    VN: { lat: 14.0583, lng: 108.2772 },
    PH: { lat: 12.8797, lng: 121.7740 },
    TR: { lat: 38.9637, lng: 35.2433 },
    SA: { lat: 23.8859, lng: 45.0792 },
    AE: { lat: 23.4241, lng: 53.8478 },
    NZ: { lat: -40.9006, lng: 174.8860 },
    ZA: { lat: -30.5595, lng: 22.9375 },
    EG: { lat: 26.8206, lng: 30.8025 },
    NG: { lat: 9.0820, lng: 8.6753 },
    KE: { lat: -0.0236, lng: 37.9062 },
};

export function getCountryCoordinates(code: string): Coordinates {
    // Normalize code
    const upperCode = code.toUpperCase();

    if (COUNTRY_COORDINATES[upperCode]) {
        return COUNTRY_COORDINATES[upperCode];
    }

    // Default to 0,0 or some neutral location if unknown
    return { lat: 20.0, lng: 0.0 };
}

export function parseLocString(loc: string): Coordinates | null {
    try {
        const [lat, lng] = loc.split(',').map(Number);
        if (!isNaN(lat) && !isNaN(lng)) {
            return { lat, lng };
        }
    } catch (e) {
        return null; // Invalid format
    }
    return null;
}
