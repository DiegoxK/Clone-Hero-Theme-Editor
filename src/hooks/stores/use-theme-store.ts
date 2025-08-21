import { create } from "zustand";
import { temporal, type TemporalState } from "zundo";
import { useStoreWithEqualityFn } from "zustand/traditional";
import { persist, createJSONStorage } from "zustand/middleware";
import { type Theme, initialThemeData } from "@/lib/presets/index";
import { shallow } from "zustand/shallow";
import debounce from "lodash.debounce";

type ThemeState = {
  theme: Theme;
  themeName: string;
  setTheme: (newTheme: Theme, newName: string) => void;
  updateColor: (section: keyof Theme, key: string, value: string) => void;
  reset: () => void;
};

export const useThemeStore = create<ThemeState>()(
  temporal(
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

        reset: () =>
          set({ theme: initialThemeData, themeName: "Default Theme" }),
      }),
      {
        name: "clone-hero-theme-storage",
        storage: createJSONStorage(() => localStorage),
      },
    ),
    {
      handleSet: (handleSet) =>
        debounce<typeof handleSet>(
          (state) => {
            handleSet(state);
          },
          1000,
          {
            leading: true,
            trailing: false,
          },
        ),
      limit: 100,
    },
  ),
);

export const useTemporalThemeStore = <T>(
  selector: (state: TemporalState<Partial<ThemeState>>) => T,
) => {
  return useStoreWithEqualityFn(useThemeStore.temporal, selector, shallow);
};
