import type {Metadata, Viewport} from "next";
import {Cal_Sans, Inter, JetBrains_Mono, Sofia} from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import React from "react";

// --- Font Definitions ---
const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

const calSans = Cal_Sans({
    weight: "400",
    variable: "--font-cal-sans",
    subsets: ["latin"]
});

const sofia = Sofia({
    variable: "--font-sofia",
    style: "normal",
    weight: "400",
    subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

// --- Viewport & Theme Configuration ---
export const viewport: Viewport = {
    themeColor: [
        {media: "(prefers-color-scheme: light)", color: "#ffffff"},
        {media: "(prefers-color-scheme: dark)", color: "#0a0a0a"}, // Matches 'A.png' black background
    ],
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

// --- Metadata Identity ---
export const metadata: Metadata = {
    metadataBase: new URL("https://ajith-goveas-portfolio.vercel.app"),

    title: {
        default: "Ajith Goveas // Kotlin Multiplatform & Web Engineer",
        template: "%s | Ajith Goveas"
    },

    description: "Mobile-First Engineer specializing in Native Android, KMM, CMP, and high-performance Web development.",

    applicationName: "Ajith Goveas Portfolio",
    authors: [{name: "Ajith Goveas", url: "https://ajith-goveas-portfolio.vercel.app"}],
    generator: "Next.js",
    creator: "Ajith Goveas",

    icons: {
        icon: [
            {url: "/favicon.ico"},
            {url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png"},
            {url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png"},
        ],
        apple: [
            {url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png"},
        ],
    },

    // PWA Support (Add site.webmanifest to public/)
    manifest: "/site.webmanifest",

    appleWebApp: {
        capable: true,
        statusBarStyle: "default",
        title: "Ajith Goveas",
    },

    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://ajith-goveas-portfolio.vercel.app",
        siteName: "Ajith Goveas // Architectural Portfolio",
        title: "Ajith Goveas // Kotlin Multiplatform Architect",
        description: "Engineering shared-logic mobile ecosystems and precision web interfaces.",
        images: [
            {
                url: "/og-main.png",
                width: 1200,
                height: 630,
                alt: "Ajith Goveas // Portfolio Interface",
            },
        ],
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning className="scroll-smooth">
        <body
            className={`${calSans.variable} ${inter.variable} ${sofia.variable} ${jetBrainsMono.variable} antialiased min-h-screen bg-background font-inter`}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}