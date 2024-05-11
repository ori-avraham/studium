"use client";

import useLocalStorage from "@/hooks/use-local-storage";
import { type Session } from "next-auth";
import { createContext, type PropsWithChildren } from "react";

interface DashboardContextType {
  isOpen: boolean;
  setIsOpen?: (value: boolean) => void;
  session: Session | null;
}

export const DashboardContext = createContext<DashboardContextType | null>(
  null
);

interface DashboardProviderProps extends PropsWithChildren {
  session: Session | null;
}

export default function DashboardProvider({
  children,
  session,
}: DashboardProviderProps) {
  const [isOpen, setIsOpen] = useLocalStorage("sidebar-open", true);
  return (
    <DashboardContext.Provider value={{ isOpen, setIsOpen, session }}>
      {children}
    </DashboardContext.Provider>
  );
}
