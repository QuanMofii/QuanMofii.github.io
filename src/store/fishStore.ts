import { create } from 'zustand';

interface FishState {
  isFlying: boolean;
  setIsFlying: (isFlying: boolean) => void;
}

export const useFishStore = create<FishState>((set) => ({
  isFlying: false,
  setIsFlying: (isFlying) => set({ isFlying }),
})); 