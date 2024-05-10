import { Metadata } from "next";
import Link from "next/link";

import { GraduationCap } from "lucide-react";
import { type PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Studium Authentication",
  description: "Sign in or create an account if you do not already have one.",
};

interface AuthLayoutProps extends PropsWithChildren {}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <Link href="/">
          <div className="relative z-20 flex items-center text-lg font-medium">
            <GraduationCap className="mr-2 h-6 w-6" />
            Studium
          </div>
        </Link>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;An investment in knowledge pays the best interest.&rdquo;
            </p>
            <footer className="text-sm">Benjamin Franklin</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">{children}</div>
    </div>
  );
}
