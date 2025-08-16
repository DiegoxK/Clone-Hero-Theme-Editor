import { create } from "zustand";

type EffectsState = {
  starPower: boolean;
  strikerHitFLame: boolean;
  strikerHoldSpark: boolean;
  toggleStarPower: () => void;
  toggleStrikerHitFlame: () => void;
  toggleStrikerHoldSpark: () => void;
};

export const useEffectsStore = create<EffectsState>((set) => ({
  starPower: false,
  strikerHitFLame: false,
  strikerHoldSpark: false,

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
}));
