import { create } from 'zustand';

type BurgerStorage = {
  burgerIsOpen: boolean;
  setBurgerIsOpen: (value: boolean) => void;
};

export const useZusBurger = create<BurgerStorage>((set) => ({
  burgerIsOpen: false,
  setBurgerIsOpen: (value) => set((state) => ({ burgerIsOpen: (state.burgerIsOpen = value) })),
}));
