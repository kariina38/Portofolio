import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ajeng Miftahul Carina | AI & Full-Stack Developer",
  description: "Final-year Informatics student at President University with a strong passion for Artificial Intelligence and full-stack software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="font-sans antialiased min-h-screen bg-gradient-to-tr from-[#f0f4ff] via-background to-[#f6f0ff] dark:from-[#111315] dark:via-background dark:to-[#1a122c] text-foreground transition-colors duration-300 relative overflow-x-hidden w-full">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {/* Ambient background glow mesh */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
            <div className="absolute top-[10%] left-[-15%] w-[60vw] h-[60vw] rounded-full bg-primary/25 dark:bg-primary/15 blur-[150px]" />
            <div className="absolute top-[35%] right-[-15%] w-[50vw] h-[50vw] rounded-full bg-secondary/25 dark:bg-secondary/15 blur-[150px]" />
            <div className="absolute bottom-[20%] left-[-10%] w-[45vw] h-[45vw] rounded-full bg-tertiary/20 dark:bg-tertiary/12 blur-[150px]" />
            <div className="absolute bottom-[-5%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-primary/25 dark:bg-primary/15 blur-[150px]" />
          </div>

          {children}
          <Toaster position="bottom-right" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
