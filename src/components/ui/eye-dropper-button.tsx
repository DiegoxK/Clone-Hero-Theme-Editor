"use client";

import { useEffect, useState } from "react";
import { Pipette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useThemeStore } from "@/hooks/stores/use-theme-store";
import { type Theme } from "@/lib/default-theme";
import { cn } from "@/lib/utils";

interface EyeDropperButtonProps extends React.ComponentProps<typeof Button> {
  section: keyof Theme;
  colorKey: string;
}

export const EyeDropperButton = ({
  section,
  colorKey,
  className,
  ...props
}: EyeDropperButtonProps) => {
  const [isSupported, setIsSupported] = useState(false);
  const [isPicking, setIsPicking] = useState(false);

  const updateColor = useThemeStore((state) => state.updateColor);

  useEffect(() => {
    setIsSupported("EyeDropper" in window);
  }, []);

  const handlePickColor = async () => {
    if (!isSupported) return;

    setIsPicking(true);
    try {
      const eyeDropper = new EyeDropper();
      const result = await eyeDropper.open();

      updateColor(section, colorKey, result.sRGBHex.toUpperCase());
    } catch (e) {
      console.log("EyeDropper selection cancelled.");
    } finally {
      setIsPicking(false);
    }
  };

  if (!isSupported) {
    return null;
  }

  return (
    <Button
      className={cn("size-8 rounded-lg", className)}
      size="icon"
      onClick={handlePickColor}
      disabled={isPicking}
      aria-label="Pick color from screen"
      {...props}
    >
      <Pipette className="size-4" />
    </Button>
  );
};
