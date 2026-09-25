export interface WearableSummaryInput {
  sleepTrend?: unknown;
  weightTrend?: unknown;
  activitySummary?: unknown;
  userReportedEnergy?: unknown;
}

export interface RecommendationInput {
  currentItems: unknown[];
  preferences: unknown;
  shoppingHistory?: unknown;
  healthSummary?: unknown;
  dietPreferences?: unknown;
  healthGoals?: unknown;
  foodRestrictions?: unknown;
  activeList?: unknown[];
  completionHistory?: unknown;
  dismissedSuggestions?: unknown[];
  recurringItemBehavior?: unknown;
  wearableSummary?: WearableSummaryInput;
}

export interface Recommendation {
  id: string;
  name: string;
  category: "food" | "stationery";
  reason: string;
  confidence?: number;
}

export interface RecommendationService {
  getRecommendations(input: RecommendationInput): Promise<Recommendation[]>;
}
