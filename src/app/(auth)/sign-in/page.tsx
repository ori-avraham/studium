import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await auth();
  if (session) return redirect("/");

  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <Link
        href="/sign-up"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8"
        )}
      >
        Sign Up
      </Link>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Login to your account
        </h1>
        <p className="text-sm text-muted-foreground">
          Sign in with one of the following providers.
        </p>
      </div>
      <div className="grid gap-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Sign in with
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <form
            action={async () => {
              "use server";
              await signIn("google", { callbackUrl: "/" });
            }}
          >
            <Button className="w-full" variant="outline" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 me-2"
                viewBox="0 0 256 262"
              >
                <path
                  fill="#4285F4"
                  d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                ></path>
                <path
                  fill="#34A853"
                  d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"
                ></path>
                <path
                  fill="#EB4335"
                  d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                ></path>
              </svg>
              Google
            </Button>
          </form>
          <form
            action={async () => {
              "use server";
              await signIn("github", { callbackUrl: "/" });
            }}
          >
            <Button className="w-full" variant="outline" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 me-2"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                ></path>
              </svg>
              GitHub
            </Button>
          </form>
          <form
            action={async () => {
              "use server";
              await signIn("twitter", { callbackUrl: "/" });
            }}
          >
            <Button className="w-full" variant="outline" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 me-2"
                viewBox="0 0 14 14"
              >
                <g fill="none">
                  <g clipPath="url(#primeTwitter0)">
                    <path
                      fill="currentColor"
                      d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="primeTwitter0">
                      <path fill="#fff" d="M0 0h14v14H0z"></path>
                    </clipPath>
                  </defs>
                </g>
              </svg>
              Twitter
            </Button>
          </form>
          <form
            action={async () => {
              "use server";
              await signIn("zoom", { callbackUrl: "/" });
            }}
          >
            <Button className="w-full" variant="outline" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 me-2"
                viewBox="0 0 256 256"
              >
                <defs>
                  <linearGradient
                    id="logosZoomIcon0"
                    x1="23.666%"
                    x2="76.334%"
                    y1="95.612%"
                    y2="4.388%"
                  >
                    <stop offset="0%" stopColor="#0845BF"></stop>
                    <stop offset="19.11%" stopColor="#0950DE"></stop>
                    <stop offset="38.23%" stopColor="#0B59F6"></stop>
                    <stop offset="50%" stopColor="#0B5CFF"></stop>
                    <stop offset="67.32%" stopColor="#0E5EFE"></stop>
                    <stop offset="77.74%" stopColor="#1665FC"></stop>
                    <stop offset="86.33%" stopColor="#246FF9"></stop>
                    <stop offset="93.88%" stopColor="#387FF4"></stop>
                    <stop offset="100%" stopColor="#4F90EE"></stop>
                  </linearGradient>
                </defs>
                <path
                  fill="url(#logosZoomIcon0)"
                  d="M256 128c0 13.568-1.024 27.136-3.328 40.192c-6.912 43.264-41.216 77.568-84.48 84.48C155.136 254.976 141.568 256 128 256c-13.568 0-27.136-1.024-40.192-3.328c-43.264-6.912-77.568-41.216-84.48-84.48C1.024 155.136 0 141.568 0 128c0-13.568 1.024-27.136 3.328-40.192c6.912-43.264 41.216-77.568 84.48-84.48C100.864 1.024 114.432 0 128 0c13.568 0 27.136 1.024 40.192 3.328c43.264 6.912 77.568 41.216 84.48 84.48C254.976 100.864 256 114.432 256 128"
                ></path>
                <path
                  fill="#FFF"
                  d="M204.032 207.872H75.008c-8.448 0-16.64-4.608-20.48-12.032c-4.608-8.704-2.816-19.2 4.096-26.112l89.856-89.856H83.968c-17.664 0-32-14.336-32-32h118.784c8.448 0 16.64 4.608 20.48 12.032c4.608 8.704 2.816 19.2-4.096 26.112l-89.6 90.112h74.496c17.664 0 32 14.08 32 31.744"
                ></path>
              </svg>
              Zoom
            </Button>
          </form>
        </div>
      </div>
      <p className="px-8 text-center text-sm text-muted-foreground">
        By clicking continue, you agree to our{" "}
        <Link
          href="/terms"
          className="underline underline-offset-4 hover:text-primary"
        >
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          className="underline underline-offset-4 hover:text-primary"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}
