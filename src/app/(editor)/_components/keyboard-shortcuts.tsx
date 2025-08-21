"use client";

import { useTemporalThemeStore } from "@/hooks/stores/use-theme-store";
import { useEffect } from "react";

export const KeyboardShortcuts = () => {
  const { undo, redo, pastStates, futureStates } = useTemporalThemeStore(
    (state) => ({
      undo: state.undo,
      redo: state.redo,
      pastStates: state.pastStates,
      futureStates: state.futureStates,
    }),
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const isModifierPressed = event.metaKey || event.ctrlKey;
      if (!isModifierPressed) return;

      const key = event.key.toLowerCase();

      const canUndo = pastStates.length > 1;
      const canRedo = futureStates.length > 0;

      if (key === "z" && !event.shiftKey) {
        event.preventDefault();
        if (canUndo) {
          undo();
        }
      }

      if (key === "y" || (key === "z" && event.shiftKey)) {
        event.preventDefault();
        if (canRedo) {
          redo();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [undo, redo, pastStates, futureStates]);

  return null;
};
