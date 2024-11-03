import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ProviderLayout from "@/components/common/ProviderLayout";
export const metadata: Metadata = {
  title: "PhoneBlock.io",
  description: "Connecting Dreams with Opportunities, Phoneblock.io",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  
  return (
    <html lang="en">
      <body
        className={""}
      >
        <Toaster
        />
        <ProviderLayout>
          {
            children
          }
        </ProviderLayout>
       

      </body>
    </html>
  );
}
