import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ProviderLayout from "@/components/common/ProviderLayout";

export const metadata: Metadata = {
    title: "HireHalo",
    description: "Connecting Dreams with Opportunities",
};

export default function LandingPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={""}
            >
                <ProviderLayout>
                    <div className="w-full flex relative flex-col">
                        <Header />
                        {children}
                        <Footer />
                    </div>
                </ProviderLayout>
                

            </body>
        </html>
    );
}
