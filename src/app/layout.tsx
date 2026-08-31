import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { ScrollControls } from "@/components/ui/scroll-controls";
import { ChatBot } from "@/components/chat-bot";


import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const title = "NanTech | Turning Complex Challenges Into Practical Solutions";
const description = "NanTech is a mission-driven technology and AI company helping organizations improve operations through process & workflow improvement, project & program management, and responsible AI strategy & solutions.";

export const metadata: Metadata = {
  metadataBase: new URL("https://nantechs.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://nantechs.com",
    siteName: "NanTech",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/30 selection:text-white`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CustomCursor />
          <ScrollControls />
          <Navbar />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <ChatBot />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
