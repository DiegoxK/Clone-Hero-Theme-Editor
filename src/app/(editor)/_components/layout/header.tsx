import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b p-4">
      <h1 className="text-primary text-xl font-bold">
        Clone Hero Theme Editor
      </h1>
      <Link
        target="_blank"
        href="https://github.com/DiegoxK/clone-hero-theme-editor"
      >
        <Button className="rounded-full" variant="ghost" size="icon">
          <Github className="size-4.5" />
        </Button>
      </Link>
    </header>
  );
}
