import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Analytics } from "@vercel/analytics/next";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "QR kód generátor - můjqrkod.cz | Zdarma bez registrace",
  description:
    "Vytvořte si QR kód zdarma a jednoduše. Bez zbytečných registrací a omezení.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("antialiased", font.className)}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex items-center ">
            <MaxWidthWrapper>
              {children}
              <Analytics />
            </MaxWidthWrapper>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
