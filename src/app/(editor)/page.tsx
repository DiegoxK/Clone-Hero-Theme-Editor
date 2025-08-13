"use client";

import Notes from "./_components/editor/notes";
import { useRef, useState, type ChangeEvent } from "react";
import { initialThemeData, type Theme } from "@/lib/default-theme";
import Highway from "./_components/editor/highway";
import GuitarStrings from "./_components/editor/guitar-strings";
import BeatLines from "./_components/editor/beatlines";
import Sidebars from "./_components/editor/sidebars";
import Strikers from "./_components/editor/strikers";
import PowerMetter from "./_components/editor/power-metter";
import BgImage from "./_components/editor/bg-image";
import OpenNote from "./_components/editor/open-note";
import { parseINIString } from "@/lib/ini-utils";
import { Button } from "@/components/ui/button";
import OpenSustain from "./_components/editor/open-sustain";
import NoteSustains from "./_components/editor/note-sustains";
import Multiplier from "./_components/editor/multiplier";

export default function Editor() {
  const [theme, setTheme] = useState(initialThemeData);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
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
    <main className="flex grow flex-col justify-between">
      <div className="flex border-b p-3">
        <Button size="sm" onClick={handleUploadClick}>
          Load colors.ini
        </Button>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept=".ini"
          className="hidden"
        />
      </div>
      <div className="flex grow items-center justify-center overflow-hidden">
        <div className="[container-type:inline-size] relative w-full">
          <BgImage />
          <Highway />
          <GuitarStrings />
          <BeatLines />
          <Multiplier otherColors={theme.other} />
          <Sidebars />
          <Strikers pressed={false} guitarColors={theme.guitar} />
          <PowerMetter otherColors={theme.other} />
          <NoteSustains guitarColors={theme.guitar} />
          <Notes guitarColors={theme.guitar} />
          <OpenSustain guitarColors={theme.guitar} />
          <OpenNote guitarColors={theme.guitar} />
        </div>
      </div>
      <div className="border-t p-4">
        <nav>Heads | Notes</nav>
      </div>
    </main>
  );
}
