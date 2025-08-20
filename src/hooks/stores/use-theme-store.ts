import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { type Theme, initialThemeData } from "@/lib/default-theme";

type ThemeState = {
  theme: Theme;

  setTheme: (newTheme: Theme) => void;
  updateColor: (section: keyof Theme, key: string, value: string) => void;
  reset: () => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
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

      reset: () => set({ theme: initialThemeData }),
    }),
    {
      name: "clone-hero-theme-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
