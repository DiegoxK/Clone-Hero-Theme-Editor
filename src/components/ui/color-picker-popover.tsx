"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useThemeStore } from "@/hooks/stores/use-theme-store";
import { type Theme } from "@/lib/presets/index";
import { HexColorPicker } from "react-colorful";

type ColorPickerPopoverProps = {
  section: keyof Theme;
  colorKey: string;
};

export const ColorPickerPopover = ({
  section,
  colorKey,
}: ColorPickerPopoverProps) => {
  const colorValue = useThemeStore(
    (state) => state.theme[section][colorKey as keyof Theme[typeof section]],
  );
  const updateColor = useThemeStore((state) => state.updateColor);

  const handleColorChange = (newColor: string) => {
    updateColor(section, colorKey, newColor);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="size-8 flex-shrink-0 cursor-pointer rounded-lg p-0"
          style={{
            backgroundColor: colorValue,
          }}
          aria-label={`Change ${colorKey} color`}
        />
      </PopoverTrigger>
      <PopoverContent
        side="right"
        align="start"
        sideOffset={8}
        alignOffset={-1}
        className="bg-popover/10 flex w-auto flex-col gap-4 rounded-lg backdrop-blur-sm"
      >
        <HexColorPicker color={colorValue} onChange={handleColorChange} />
      </PopoverContent>
    </Popover>
  );
};
