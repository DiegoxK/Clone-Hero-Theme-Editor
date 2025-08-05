"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import Notes from "./_components/editor/notes";
import { useState } from "react";
import { initialThemeData } from "@/lib/default-theme";
import Highway from "./_components/editor/highway";
import GuitarStrings from "./_components/editor/guitar-strings";
import BeatLines from "./_components/editor/beatlines";
import MultiplierCircle from "./_components/editor/multiplier-circle";
import DotRow from "./_components/editor/dot-row";
import Sidebars from "./_components/editor/sidebars";
import Strikers from "./_components/editor/strikers";
import PowerMetter from "./_components/editor/power-metter";
import BgImage from "./_components/editor/bg-image";
import OpenNote from "./_components/editor/open-note";

export default function Editor() {
  const [theme, setTheme] = useState(initialThemeData);

  return (
    <main className="flex grow flex-col justify-between">
      <div className="border-b p-4">
        <nav>Navigation</nav>
      </div>
      <div className="flex grow items-center justify-center overflow-hidden">
        <div className="[container-type:inline-size] relative w-full">
          <BgImage />
          <Highway />
          <GuitarStrings />
          <BeatLines />
          <MultiplierCircle />
          <DotRow />
          <Sidebars />
          <Strikers pressed={false} guitarColors={theme.guitar} />
          <PowerMetter />
          <Notes guitarColors={theme.guitar} />
          <OpenNote guitarColors={theme.guitar} />
        </div>
      </div>
      <div className="border-t p-4">
        <nav>Heads | Notes</nav>
      </div>
    </main>
  );
}
