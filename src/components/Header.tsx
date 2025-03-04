"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import * as React from "react";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Ahsan zaman Frontend task
        </Link>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
