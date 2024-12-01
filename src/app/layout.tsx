import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import 'leaflet/dist/leaflet.css';
import clsx from "clsx";


const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "leadscrapr",
  description: "Ultimate lead generation platform for web developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
         <script
              src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
              async
              defer
            ></script>
            {children}
      </body>
    </html>
  );
}
