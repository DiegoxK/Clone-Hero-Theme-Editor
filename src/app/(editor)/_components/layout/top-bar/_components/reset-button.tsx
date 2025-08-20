"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useAssetStore } from "@/hooks/stores/use-asset-store";
import { useThemeStore } from "@/hooks/stores/use-theme-store";
import { RotateCcw } from "lucide-react";

export const ResetButton = () => {
  const resetTheme = useThemeStore((state) => state.reset);
  const resetAssets = useAssetStore((state) => state.reset);

  const handleReset = () => {
    resetTheme();
    resetAssets();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" size="sm" aria-label="Reset all settings">
          <RotateCcw className="h-4 w-4" /> Reset
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Reset All Settings?</AlertDialogTitle>
          <AlertDialogDescription>
            This action will permanently revert all colors, assets, and effects
            to their original default values. Your current customizations will
            be lost.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleReset}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
