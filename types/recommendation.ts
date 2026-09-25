import type { ItemCategory } from "./item";

export interface Recommendation {
  id: string;
  name: string;
  category: ItemCategory;
  reason: string;
  confidence?: number;
}
