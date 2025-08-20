"use a client";

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
import { ChevronDown } from "lucide-react";

const PREVIEW_COLOR_KEYS = [
  "note_green",
  "note_red",
  "note_yellow",
  "note_blue",
  "note_orange",
];

export const ThemeSelector = () => {
  const themeName = useThemeStore((state) => state.themeName);
  const setTheme = useThemeStore((state) => state.setTheme);

  const handleSelectPreset = (preset: Preset) => {
    setTheme(preset.themeData, preset.name);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center text-lg font-semibold outline-none">
        {themeName} <ChevronDown size={16} className="ml-2 inline" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuLabel>Select a Preset</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {presets.map((preset) => (
          <DropdownMenuItem
            key={preset.name}
            onSelect={() => handleSelectPreset(preset)}
          >
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {PREVIEW_COLOR_KEYS.map((key) => (
                  <div
                    key={key}
                    className="size-3 rounded-sm border"
                    style={{
                      backgroundColor:
                        preset.themeData.guitar[
                          key as keyof Preset["themeData"]["guitar"]
                        ],
                    }}
                  />
                ))}
              </div>
              <span>{preset.name}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
