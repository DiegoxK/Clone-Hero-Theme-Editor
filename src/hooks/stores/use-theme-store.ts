import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { type Theme, initialThemeData } from "@/lib/presets/index";

type ThemeState = {
  theme: Theme;
  themeName: string;
  setTheme: (newTheme: Theme, newName: string) => void;
  updateColor: (section: keyof Theme, key: string, value: string) => void;
  reset: () => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: initialThemeData,
      themeName: "Default Theme",
      setTheme: (newTheme, newName) =>
        set({ theme: newTheme, themeName: newName }),
      updateColor: (section, key, value) =>
        set((state) => ({
          theme: {
            ...state.theme,

            [section]: {
              ...state.theme[section],

              [key]: value.toUpperCase(),
            },
          },
          themeName: "Custom Theme",
        })),

      reset: () => set({ theme: initialThemeData, themeName: "Default Theme" }),
    }),
    {
      name: "clone-hero-theme-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
