import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import ReactQueryProvider from "./react-query-context";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500"]
});

export const metadata: Metadata = {
  title: "Ethnocentrique",
  description: "We enable African Markets to thrive at home and on the global stage",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo-icon.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-icon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/logo-icon.png",
  },
  openGraph: {
    title: "Ethnocentrique",
    description: "We enable African Markets to thrive at home and on the global stage",
    images: "/logo-icon.png",
  },
};

export default function RootLayout ({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <ReactQueryProvider>
          {children}
          <Toaster />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
