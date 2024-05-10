"use client";

import { CircleAlert, X } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import Link from "next/link";

export default function Banner() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen ? (
        <div
          id="banner"
          tabIndex={-1}
          className="flex gap-8 justify-between border-b items-center py-3 px-4 md:px-6 w-full"
        >
          <div className="flex gap-2 items-center">
            <CircleAlert className="hidden md:inline" />
            <p className="text-sm font-light">
              Studium is a portfolio project for demonstration purposes only;
              data may be reset without notice — for full details,{" "}
              <Link
                className="font-medium underline hover:no-underline"
                href="#"
              >
                see our disclaimer.
              </Link>
            </p>
          </div>

          <Button
            onClick={() => setIsOpen(false)}
            variant="ghost"
            type="button"
          >
            Dismiss
          </Button>
        </div>
      ) : null}
    </>
  );
}
