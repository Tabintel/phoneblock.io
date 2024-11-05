import type { Metadata } from "next";
import { userDashboardLinks } from "@/constants";
import DashboardLayout from "@/components/common/DashboardLayout";

export const metadata: Metadata = {
  title: "Admin Dashboard  || Phoneblock",
  description: "Revamping blokchain management of web resources - Connecting Dreams with Opportunities through blockchain!!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex">
      <DashboardLayout sidebarlinks={userDashboardLinks}>
        {children}
      </DashboardLayout>
    </div>

  );
}
