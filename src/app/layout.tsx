import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import MainHeader from "@/components/MainHeader";
import ManageLoading from "@/components/FirstLoading/ManageLoading";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ibrahim Saleh - Portfolio",
  description:
    "Explore the portfolio of Ibrahim Saleh, a passionate Frontend Developer specializing in Next.js, React, and modern web technologies. Discover projects, experience, and creative UI/UX designs built with performance and precision.",
  verification: {
    google: "SrI98gSOZNrMvxTByRc926pb0un84BxxbVxc0PAUfuM",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased `}>
        <ManageLoading>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange>
            <MainHeader />

            {children}
          </ThemeProvider>
        </ManageLoading>
      </body>
    </html>
  );
}
