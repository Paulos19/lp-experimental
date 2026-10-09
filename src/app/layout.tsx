import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Aeline — Building the future with AI and strategy",
  description: "A global consulting partner dedicated to building smarter and more adaptive organizations through data-driven consulting and intelligent automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} font-sans antialiased bg-white text-slate-900 selection:bg-lime-300 selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
