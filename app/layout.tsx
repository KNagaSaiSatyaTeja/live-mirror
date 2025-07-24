// app/layout.tsx
import "./globals.css";
import "./style.css";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import { Header } from "@/components/Header"; // Assuming you move header into a component

export const metadata: Metadata = {
  title: "Live Mirror - Collaborative Code Editor",
  description: "Real-time collaborative code editing made easy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="layout-wrapper">
            <Header />
            <main className="main-content">{children}</main>
            <footer className="footer">
              © 2025 Live Mirror. Built for remote teams.
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
