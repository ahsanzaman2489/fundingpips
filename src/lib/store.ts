import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Stock } from "./types";
import { initialStocks } from "./mockData";

interface StoreState {
  stocks: Stock[];
  updateStocks: (stocks: Stock[]) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      stocks: initialStocks,
      updateStocks: (stocks) => set({ stocks }),
    }),
    {
      name: "stocks",
      partialize: (state) => ({
        // only persist these fields
        stocks: state.stocks,
      }),
    },
  ),
);
