import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "jiyeon's portfolio",
  description: "gonna be awesome",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Error: Hydration failed because the initial UI does not match what was rendered on the server. */}
      {/* so i put common div into body */}
        <body className={inter.className}>
          <div className="w-full h-screen border-2 border-red-700">
              {children}
          </div>
        </body>
    </html>
  );
}
