import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function NotFoundPage() {
  return (
    <main className="min-h-screen grid place-items-center">
      <section className="space-y-4 text-center">
        <p className="scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-8xl">
          404
        </p>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Something&apos;s missing.
        </h1>
        <p className="leading-7">
          Sorry, we can&apos;t find that page. You&apos;ll find lots to explore
          on the home page.
        </p>
        <Link className={buttonVariants()} href="/">
          Back to Homepage
        </Link>
      </section>
    </main>
  );
}
