import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {Header} from "@/components/Header";
import {ThemeProvider} from "next-themes";
import {Providers} from "./providers";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Ahsan Zaman - Frontend task",
};


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Header/>
            <Providers>{children}</Providers>
        </ThemeProvider>
        </body>
        </html>
    );
}
