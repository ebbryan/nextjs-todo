import type { Metadata } from "next";
import "./globals.css";
import { B612 } from "next/font/google";
import ProvidersBarProvider from "@/components/Providers/ProgressBarProvider";

const b612 = B612({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-b612",
});

export const metadata: Metadata = {
  title: "NextJS + Shadcn UI Todo App",
  description: "Developed by @ebbryan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={b612.className}>
        <ProvidersBarProvider>{children}</ProvidersBarProvider>
      </body>
    </html>
  );
}
