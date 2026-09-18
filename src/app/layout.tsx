import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import TanStackProvider from "@/components/providers/TanStackProvider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "DentWise - AI Powered Dental Assistant",
    description:
        "Get Instant Dental Advice Through Voice Calls With Our AI Assistant. Available 24/7.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
            >
                <ClerkProvider
                    appearance={{
                        variables: {
                            colorPrimary: "#e78a53",
                            colorBackground: "#f3f4f6",
                            colorForeground: "#111827",
                            colorMutedForeground: "#6b7280",
                            colorInput: "#f3f4f6",
                        },
                    }}
                >
                    <TanStackProvider>
                        <Toaster />
                        {children}
                    </TanStackProvider>
                </ClerkProvider>
            </body>
        </html>
    );
}
