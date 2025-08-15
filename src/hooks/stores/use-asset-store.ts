import { create } from "zustand";

export type StrikerState = "default" | "pressed" | "open";

type AssetStoreState = {
  strikerState: StrikerState;

  cycleStrikerState: () => void;
};

const STRIKER_CYCLE_ORDER: StrikerState[] = ["default", "pressed", "open"];

export const useAssetStore = create<AssetStoreState>((set) => ({
  strikerState: "default",
  cycleStrikerState: () =>
    set((state) => {
      const currentIndex = STRIKER_CYCLE_ORDER.indexOf(state.strikerState);
      const nextIndex = (currentIndex + 1) % STRIKER_CYCLE_ORDER.length;
      return { strikerState: STRIKER_CYCLE_ORDER[nextIndex] };
    }),
}));
