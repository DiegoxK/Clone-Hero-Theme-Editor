import { create } from "zustand";

type EffectsState = {
  starPower: boolean;
  strikerHitFLame: boolean;
  strikerHoldSpark: boolean;
  noteParticles: boolean;
  toggleStarPower: () => void;
  toggleStrikerHitFlame: () => void;
  toggleStrikerHoldSpark: () => void;
  toggleNoteParticles: () => void;
};

export const useEffectsStore = create<EffectsState>((set) => ({
  starPower: false,
  strikerHitFLame: false,
  strikerHoldSpark: false,
  noteParticles: false,

  toggleStarPower: () =>
    set((state) => ({
      starPower: !state.starPower,
    })),
  toggleStrikerHitFlame: () =>
    set((state) => ({
      strikerHitFLame: !state.strikerHitFLame,
    })),
  toggleStrikerHoldSpark: () =>
    set((state) => ({
      strikerHoldSpark: !state.strikerHoldSpark,
    })),
  toggleNoteParticles: () =>
    set((state) => ({
      noteParticles: !state.noteParticles,
    })),
}));
