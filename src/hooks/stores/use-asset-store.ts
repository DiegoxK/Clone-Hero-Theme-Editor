import { create } from "zustand";

export type StrikerState = "default" | "pressed" | "open";
export type NoteState = "default" | "sp";

type AssetStoreState = {
  strikerState: StrikerState;
  noteState: NoteState;

  cycleStrikerState: () => void;
  cycleNoteState: () => void;
};

const STRIKER_CYCLE_ORDER: StrikerState[] = ["default", "pressed", "open"];
const NOTE_CYCLE_ORDER: NoteState[] = ["default", "sp"];

export const useAssetStore = create<AssetStoreState>((set) => ({
  strikerState: "default",
  noteState: "default",

  cycleStrikerState: () =>
    set((state) => {
      const currentIndex = STRIKER_CYCLE_ORDER.indexOf(state.strikerState);
      const nextIndex = (currentIndex + 1) % STRIKER_CYCLE_ORDER.length;
      return { strikerState: STRIKER_CYCLE_ORDER[nextIndex] };
    }),

  cycleNoteState: () =>
    set((state) => {
      const currentIndex = NOTE_CYCLE_ORDER.indexOf(state.noteState);
      const nextIndex = (currentIndex + 1) % NOTE_CYCLE_ORDER.length;
      return { noteState: NOTE_CYCLE_ORDER[nextIndex] };
    }),
}));
