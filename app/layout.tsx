import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/context/themeContext";


export const metadata: Metadata = {
  title: "Movie Tickets",
  description: "A Website fot movie Tickets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html lang="en">
        {children}
      </html>
    </ThemeProvider>
  );
}
