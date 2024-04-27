"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const NAVBAR_ITEMS = [
    {
      label: "Kontakt",
      href: "mailto:me@swajp.me?subject=mujqrkod.cz - Kontakt",
    },
  ];
  const pathname = usePathname();
  return (
    <nav className="w-full h-16 rounded-2xl bg-background my-8 shadow-md flex items-center justify-between px-8">
      <Link className="text-lg font-bold" href="/">
        můjqrkod
      </Link>
      <div className="flex items-center space-x-3 font-medium *:p-2 *:px-3 *:rounded-full">
        {NAVBAR_ITEMS.map((item) => (
          <Link
            key={item.label}
            className={cn(
              " hover:bg-foreground hover:text-muted transition-colors",
              pathname === item.href && "bg-foreground text-muted"
            )}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
