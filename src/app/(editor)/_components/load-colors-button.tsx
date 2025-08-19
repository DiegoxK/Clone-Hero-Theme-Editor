"use client";

import type { Theme } from "@/lib/default-theme";
import { Button } from "@/components/ui/button";
import { useThemeStore } from "@/hooks/stores/use-theme-store";
import { parseINIString } from "@/lib/ini-utils";
import { useRef } from "react";
import { FileDown } from "lucide-react";

export default function LoadColorsButton() {
  const setTheme = useThemeStore((state) => state.setTheme);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      const text = e.target?.result;
      if (typeof text === "string") {
        try {
          const parsedData = parseINIString(text);

          setTheme(parsedData as Theme);
        } catch (error) {
          console.error("Failed to parse INI file:", error);
          alert("Error: Could not parse the INI file.");
        }
      }
    };

    reader.readAsText(file);
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <Button variant="ghost" size="sm" onClick={handleUploadClick}>
        <FileDown /> Import Theme.ini
      </Button>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".ini"
        className="hidden"
      />
    </>
  );
}
