import { create } from "zustand";
import axios from "axios";
import { light, dark } from "../styles/Theme";

interface Theme {
  name: string;

  colors: {
    background: string;
    text: string;
    inputBackground: string;
    inputShadow: string;
  };
}

interface WordState {
  word: string;
  wordData: null;
  isLoading: boolean;
  isError: boolean;
  theme: Theme;
  setTheme: () => void;
  setWordData: (data: any) => void;
  setWord: (newWord: string) => void;
  fetchWordData: (newWord: string) => void;
}

export const useWordStore = create<WordState>((set, get) => ({
  word: "",
  wordData: null,
  isLoading: false,
  isError: false,
  theme: light,
  setTheme: () =>
    set((state) => ({ theme: state.theme === dark ? light : dark })),
  setWordData: (data) => set({ wordData: data }),
  setWord: (newWord) => set({ word: newWord }),
  fetchWordData: async (newWord) => {
    try {
      set({ isError: false });
      set({ isLoading: true });
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${newWord}`
      );
      const data = response.data[0];
      set({ wordData: data });
    } catch (error) {
      set({ isError: true });
    } finally {
      set({ isLoading: false });
    }
  },
}));
