export interface IpInfo {
    ip: string;
    asn?: string;
    as_name?: string;
    as_domain?: string;
    country_code?: string;
    country?: string;
    continent_code?: string;
    continent?: string;
    // Fallbacks if standard response sneaks in
    loc?: string;
}
