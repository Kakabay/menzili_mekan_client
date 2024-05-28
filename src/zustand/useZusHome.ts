import { create } from "zustand";

type HomeStore = {
  activeVideo: boolean;
  setActiveVideo: (value: boolean) => void;
};

export const useZusHome = create<HomeStore>((set) => ({
  activeVideo: false,
  setActiveVideo: (value) =>
    set((state) => ({ activeVideo: (state.activeVideo = value) })),
}));
