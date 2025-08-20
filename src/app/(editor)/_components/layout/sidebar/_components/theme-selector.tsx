"use client";

import { useState } from "react";
import { useThemeStore } from "@/hooks/stores/use-theme-store";
import { presets, type Preset } from "@/lib/presets";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const PREVIEW_COLOR_KEYS = [
  "note_green",
  "note_red",
  "note_yellow",
  "note_blue",
  "note_orange",
];
const ThemePreview = ({ colors }: { colors: string[] }) => (
  <div className="flex items-center gap-1">
    {colors.map((color, index) => (
      <div
        key={index}
        className="size-3 rounded-md"
        style={{ backgroundColor: color }}
      />
    ))}
  </div>
);

export const ThemeSelector = () => {
  const [isOpen, setIsOpen] = useState(false);

  const themeName = useThemeStore((state) => state.themeName);
  const setTheme = useThemeStore((state) => state.setTheme);
  const currentGuitarColors = useThemeStore((state) => state.theme.guitar);

  const handleSelectPreset = (preset: Preset) => {
    setTheme(preset.themeData, preset.name);
  };

  const currentPreviewColors = PREVIEW_COLOR_KEYS.map(
    (key) => currentGuitarColors[key as keyof typeof currentGuitarColors],
  );

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger className="flex cursor-pointer items-center font-semibold outline-none">
        <div className="mr-2">
          <ThemePreview colors={currentPreviewColors} />
        </div>
        {themeName}{" "}
        <ChevronRight
          size={16}
          className={cn(
            "ml-2 inline transition-transform duration-200",
            isOpen && "rotate-90",
          )}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuLabel>Select a Preset</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {presets.map((preset) => {
          const presetPreviewColors = PREVIEW_COLOR_KEYS.map(
            (key) =>
              preset.themeData.guitar[
                key as keyof Preset["themeData"]["guitar"]
              ],
          );

          return (
            <DropdownMenuItem
              key={preset.name}
              onSelect={() => handleSelectPreset(preset)}
            >
              <div className="mr-4 flex items-center gap-2">
                <ThemePreview colors={presetPreviewColors} />
                <span>{preset.name}</span>
              </div>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
