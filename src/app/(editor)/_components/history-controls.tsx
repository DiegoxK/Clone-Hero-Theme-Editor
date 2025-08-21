"use client";

import { Button } from "@/components/ui/button";
import { useTemporalThemeStore } from "@/hooks/stores/use-theme-store";
import { Redo2, Undo2 } from "lucide-react";

export const HistoryControls = () => {
  const { undo, redo, pastStates, futureStates } = useTemporalThemeStore(
    (state) => ({
      undo: state.undo,
      redo: state.redo,
      pastStates: state.pastStates,
      futureStates: state.futureStates,
    }),
  );

  const canUndo = pastStates.length > 1;
  const canRedo = futureStates.length > 0;

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => undo()}
        disabled={!canUndo}
        aria-label="Undo change"
      >
        <Undo2 className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => redo()}
        disabled={!canRedo}
        aria-label="Redo change"
      >
        <Redo2 className="h-4 w-4" />
      </Button>
    </div>
  );
};
