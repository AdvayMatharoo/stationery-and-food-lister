import type { Item } from "@/types/item";
import type { Recommendation } from "@/types/recommendation";

export interface RecommendationInput {
  currentItems: Item[];
  preferences?: Record<string, string | number | boolean>;
  shoppingHistory?: Item[];
}

export interface RecommendationService {
  getRecommendations(input: RecommendationInput): Promise<Recommendation[]>;
}
