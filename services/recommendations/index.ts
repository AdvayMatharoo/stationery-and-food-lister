import type {
  Recommendation,
  RecommendationInput,
  RecommendationService,
} from "./recommendation.types";

export const RECOMMEND_ITEMS_FUNCTION_PATH = "/functions/v1/recommend-items";

const hasFoodItems = (currentItems: unknown[]): boolean =>
  currentItems.some((item) => {
    const value = item as { itemCategory?: string; category?: string };
    return value.itemCategory === "food" || value.category === "food";
  });

export class MockRecommendationService implements RecommendationService {
  async getRecommendations(input: RecommendationInput): Promise<Recommendation[]> {
    const recommendations: Recommendation[] = [
      {
        id: "stationery-pen-pack",
        name: "Ballpoint Pen Pack",
        category: "stationery",
        reason: "Commonly repurchased stationery essential.",
        confidence: 0.72,
      },
    ];

    if (hasFoodItems(input.currentItems)) {
      recommendations.unshift({
        id: "food-greek-yoghurt",
        name: "Greek Yoghurt",
        category: "food",
        reason: "Fits a high-protein food recommendation profile.",
        confidence: 0.79,
      });
    }

    return recommendations;
  }
}

export const createRecommendationService = (): RecommendationService =>
  new MockRecommendationService();

export * from "./recommendation.types";
