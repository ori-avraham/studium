import { DashboardContext } from "@/providers/dashboard-provider";
import { useContext } from "react";

export default function useDashboard() {
  const dashboardContext = useContext(DashboardContext);

  if (!dashboardContext) {
    throw new Error(
      "useDashboard has to be used within <DashboardContext.Provider>"
    );
  }

  return dashboardContext;
}
