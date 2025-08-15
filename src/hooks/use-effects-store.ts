import { create } from "zustand";

type EffectsState = {
  starPower: boolean;
  strikerHitFLame: boolean;
  toggleStarPower: () => void;
  toggleStrikerHitFlame: () => void;
};

export const useEffectsStore = create<EffectsState>((set) => ({
  starPower: false,
  strikerHitFLame: false,

  toggleStarPower: () =>
    set((state) => ({
      starPower: !state.starPower,
    })),
  toggleStrikerHitFlame: () =>
    set((state) => ({
      strikerHitFLame: !state.strikerHitFLame,
    })),
}));
