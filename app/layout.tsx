import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/shared";
import { SidePanel } from "./components/shared/side-panel";

export const metadata: Metadata = {
  title: "Lendo Dashboard",
  description: "A demo dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full" lang="en">
      <body className="h-full font-proxima-nova">
        <div className="grid grid-cols-[25%_75%] grid-rows-8 h-full">
          <div className="row-span-8">
            <SidePanel />
          </div>
          <div className="row-span-1">
            <Header />
          </div>
          <div className="row-span-7">{children}</div>
        </div>
      </body>
    </html>
  );
}
