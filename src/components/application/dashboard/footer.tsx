import Link from "next/link";

export function Footer() {
  return (
    <div className="supports-backdrop-blur:bg-background/60 z-20 w-full border-t bg-background/95 backdrop-blur">
      <div className="mx-4 md:mx-8 flex h-14 items-center">
        <span className="text-sm text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <Link href="/" className="hover:underline">
            Studium™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </div>
  );
}
