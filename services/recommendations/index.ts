import type { Recommendation } from "@/types/recommendation";
import type {
  RecommendationInput,
  RecommendationService,
} from "./recommendation.types";

const mockRecommendations: Recommendation[] = [
  {
    id: "rec-greek-yoghurt",
    name: "Greek Yoghurt",
    category: "food",
    reason: "High-protein staple often paired with your food list.",
    confidence: 0.82,
  },
  {
    id: "rec-blue-pens",
    name: "Blue Pens",
    category: "stationery",
    reason: "Frequently recurring stationery item for weekly workflow.",
    confidence: 0.74,
  },
];

class MockRecommendationService implements RecommendationService {
  async getRecommendations(input: RecommendationInput): Promise<Recommendation[]> {
    const hasFood = input.currentItems.some((item) => item.category === "food");

    if (!hasFood) {
      return mockRecommendations.filter((item) => item.category !== "food");
    }

    return mockRecommendations;
  }
}

export const createRecommendationService = (): RecommendationService =>
  new MockRecommendationService();

export * from "./recommendation.types";
