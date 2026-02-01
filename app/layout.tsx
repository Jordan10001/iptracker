import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultUrl = "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "IP - Tracker",
  description: "Advanced IP information lookup with beautiful UI.",
  robots: "index, follow",
  icons: {
    icon: [
    { url: "/favicon.ico" },
    { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  keywords: [
    "what is my ip",
    "ip tracker",
    "ip info",
    "ip address",
    "ip lookup",
    "ip finder",
    "ip locator",
  ],
  openGraph: {
    title: "IP - Tracker",
    description:
      "IP Tracker is a free online tool that allows you to find the IP address of any website or domain. It also provides information about the IP address, such as the country, region, city, and organization.",
    url: defaultUrl,
    siteName: "IP - Tracker",
    images: [
      {
        url: `${defaultUrl}/og.jpg`,
        width: 600,
        height: 600,
        alt: "IP - Tracker",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${mono.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" // Force dark if user wants simplistic look, or stick to system. 
          // Re-reading user request: "theme togle" removal suggests they might want a fixed theme or just no control.
          // I will keep the provider but remove the UI.
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
