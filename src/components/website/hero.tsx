import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-12 lg:py-16 px-6">
      <div
        aria-hidden="true"
        className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
      >
        <div className="bg-gradient-to-r from-background/50 to-background blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
        <div className="bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-accent via-primary-background to-background" />
      </div>
      <div className="relative z-10">
        <div className="container py-10 lg:py-16">
          <div className="max-w-2xl text-center mx-auto">
            <p className="">Revolutionize your learning experience</p>
            <div className="mt-5 max-w-2xl">
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Studium: The Ultimate Learning Platform
              </h1>
            </div>
            <div className="mt-5 max-w-3xl">
              <p className="text-xl text-muted-foreground">
                Studium offers a seamless and comprehensive learning
                environment, with powerful tools and features to enhance your
                educational journey.
              </p>
            </div>
            <div className="mt-8 gap-3 flex justify-center">
              <Link
                href="/dashboard"
                className={buttonVariants({ size: "lg" })}
              >
                Get started
              </Link>
              <Button size={"lg"} variant={"outline"}>
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
