import type { Metadata } from "next";
import { userDashboardLinks } from "@/constants";
import DashboardLayout from "@/components/common/DashboardLayout";

export const metadata: Metadata = {
  title: "Recruiter Dashboard  || Phoneblock",
  description: "Revamping HR management of your candidates - Connecting Dreams with Opportunities",
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
