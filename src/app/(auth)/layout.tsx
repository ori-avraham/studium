import { Metadata } from "next";
import Link from "next/link";

import { GraduationCap } from "lucide-react";
import { type PropsWithChildren } from "react";

const educationQuotes = [
  {
    author: "John Dewey",
    quote: "Education is not preparation for life; education is life itself.",
  },
  {
    author: "Plutarch",
    quote: "The mind is not a vessel to be filled, but a fire to be kindled.",
  },
  {
    author: "Sydney J. Harris",
    quote: "The whole purpose of education is to turn mirrors into windows.",
  },
  {
    author: "Allan Bloom",
    quote: "Education is the movement from darkness to light.",
  },
  {
    author: "Robert Frost",
    quote:
      "Education is the ability to listen to almost anything without losing your temper or your self-confidence.",
  },
  {
    author: "Socrates",
    quote: "Education is the kindling of a flame, not the filling of a vessel.",
  },
  {
    author: "Benjamin Franklin",
    quote: "An investment in knowledge pays the best interest.",
  },
  {
    author: "John F. Kennedy",
    quote:
      "The goal of education is the advancement of knowledge and the dissemination of truth.",
  },
  {
    author: "William Butler Yeats",
    quote:
      "Education is not the filling of a pail, but the lighting of a fire.",
  },
  {
    author: "Plato",
    quote:
      "The direction in which education starts a man will determine his future in life.",
  },
  {
    author: "George Washington Carver",
    quote: "Education is the key to unlock the golden door of freedom.",
  },
  {
    author: "G.K. Chesterton",
    quote:
      "Education is simply the soul of a society as it passes from one generation to another.",
  },
  {
    author: "Aristotle",
    quote: "The roots of education are bitter, but the fruit is sweet.",
  },
  {
    author: "Confucius",
    quote:
      "Education breeds confidence. Confidence breeds hope. Hope breeds peace.",
  },
  {
    author: "Shakunta Devi",
    quote:
      "Education is not just about going to school and getting a degree. It's about widening your knowledge and absorbing the truth about life.",
  },
  {
    author: "Will Durant",
    quote: "Education is the transmission of civilization.",
  },
];

export const metadata: Metadata = {
  title: "Studium Authentication",
  description: "Sign in or create an account if you do not already have one.",
};

interface AuthLayoutProps extends PropsWithChildren {}

export default function AuthLayout({ children }: AuthLayoutProps) {
  const randomQuote =
    educationQuotes[Math.floor(Math.random() * educationQuotes.length)];
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
          <blockquote className="flex gap-2">
            <span className="text-6xl font-serif">“</span>
            <div className="space-y-2">
              <p className="text-lg">{randomQuote.quote}</p>
              <footer className="text-sm text-end">{randomQuote.author}</footer>
            </div>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">{children}</div>
    </div>
  );
}
