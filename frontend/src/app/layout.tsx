import type { Metadata } from "next";
import "./globals.css";
import ModalContextLayout from "@/components/common/ModalContextLayout";
import { Toaster } from "react-hot-toast";
import ProviderLayout from "@/components/common/ProviderLayout";
export const metadata: Metadata = {
  title: "PhoneBlock.io",
  description: "Connecting Dreams with Opportunities",
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
          <ModalContextLayout>
            {
              children
            }
          </ModalContextLayout>
        </ProviderLayout>
       

      </body>
    </html>
  );
}
