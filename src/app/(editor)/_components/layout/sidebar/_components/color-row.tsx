"use client";

import { useThemeStore } from "@/hooks/stores/use-theme-store";
import { type Theme } from "@/lib/default-theme";
import { CircleQuestionMark } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ColorPickerPopover } from "@/components/ui/color-picker-popover";
import { HexColorInput } from "@/components/ui/hex-color-input";
import { EyeDropperButton } from "@/components/ui/eye-dropper-button";

interface ColorRowProps {
  section: keyof Theme;
  colorKey: string;
  label: string;
  description: string;
}

export const ColorRow = ({
  section,
  colorKey,
  label,
  description,
}: ColorRowProps) => {
  const colorValue = useThemeStore(
    (state) =>
      state.theme[section][colorKey as keyof Theme[typeof section]] ??
      "#000000",
  );
  const updateColor = useThemeStore((state) => state.updateColor);

  const handleColorChange = (newColor: string) => {
    updateColor(section, colorKey, newColor);
  };

  return (
    <div className="flex flex-col gap-2 py-0.5">
      <div className="flex items-center gap-1 text-sm">
        <span>{label}</span>
        <Popover>
          <PopoverTrigger>
            <CircleQuestionMark className="size-4 cursor-pointer opacity-50" />
          </PopoverTrigger>
          <PopoverContent
            className="bg-popover/50 flex w-auto flex-col gap-4 rounded-lg backdrop-blur-sm"
            side="right"
            align="start"
          >
            {description}
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex items-center gap-2">
        <ColorPickerPopover section={section} colorKey={colorKey} />
        <HexColorInput
          className="h-8.5 rounded-lg"
          value={colorValue}
          onChange={handleColorChange}
        />
        <EyeDropperButton section={section} colorKey={colorKey} />
      </div>
    </div>
  );
};
