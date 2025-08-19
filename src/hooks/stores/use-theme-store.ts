import { create } from "zustand";
import { type Theme, initialThemeData } from "@/lib/default-theme";

type ThemeState = {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
  updateColor: (section: keyof Theme, key: string, value: string) => void;
};

export const useThemeStore = create<ThemeState>((set) => ({
  theme: initialThemeData,

  setTheme: (newTheme) => set({ theme: newTheme }),

  updateColor: (section, key, value) =>
    set((state) => ({
      theme: {
        ...state.theme,

        [section]: {
          ...state.theme[section],

          [key]: value.toUpperCase(),
        },
      },
    })),
}));
