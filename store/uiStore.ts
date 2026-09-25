import { create } from "zustand";

import { mockItems } from "@/data/mockItems";
import type { Item, ItemCategory, ItemFilter } from "@/types/item";

interface AddItemInput {
  name: string;
  category: ItemCategory;
  quantity?: number;
  unit?: string;
}

interface UIState {
  items: Item[];
  filter: ItemFilter;
  setFilter: (filter: ItemFilter) => void;
  toggleItemCompleted: (id: string) => void;
  addItem: (input: AddItemInput) => void;
}

const nowIso = (): string => new Date().toISOString();

export const useUIStore = create<UIState>((set) => ({
  items: mockItems,
  filter: "all",
  setFilter: (filter) => set({ filter }),
  toggleItemCompleted: (id) =>
    set((state) => ({
      items: state.items.map((item) => {
        if (item.id !== id) {
          return item;
        }

        const isCompleted = item.status === "completed";

        return {
          ...item,
          status: isCompleted ? "active" : "completed",
          completedAt: isCompleted ? undefined : nowIso(),
        };
      }),
    })),
  addItem: (input) =>
    set((state) => ({
      items: [
        {
          id: `${input.category}-${input.name.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`,
          name: input.name,
          category: input.category,
          quantity: input.quantity,
          unit: input.unit,
          status: "active",
          createdAt: nowIso(),
        },
        ...state.items,
      ],
    })),
}));
