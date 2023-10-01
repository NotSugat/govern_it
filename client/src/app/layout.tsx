import "./globals.scss";
import type { Metadata } from "next";
import ReduxProvider from "@/redux/provider";

export const metadata: Metadata = {
  title: "GovernIT",
  description: "Govermental livestreaming and budget tracking app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
