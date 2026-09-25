import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

interface RecommendationInput {
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
  wearableSummary?: {
    sleepTrend?: unknown;
    weightTrend?: unknown;
    activitySummary?: unknown;
    userReportedEnergy?: unknown;
  };
}

interface Recommendation {
  id: string;
  name: string;
  category: "food" | "stationery";
  reason: string;
  confidence?: number;
}

const hasFoodItems = (currentItems: unknown[]): boolean =>
  currentItems.some((item) => {
    const value = item as { itemCategory?: string; category?: string };
    return value.itemCategory === "food" || value.category === "food";
  });

serve(async (request) => {
  const payload = (await request.json().catch(() => ({}))) as Partial<RecommendationInput>;
  const currentItems = Array.isArray(payload.currentItems) ? payload.currentItems : [];

  const recommendations: Recommendation[] = [
    {
      id: "stationery-pen-pack",
      name: "Ballpoint Pen Pack",
      category: "stationery",
      reason: "Commonly repurchased stationery essential.",
      confidence: 0.72,
    },
  ];

  if (hasFoodItems(currentItems)) {
    recommendations.unshift({
      id: "food-greek-yoghurt",
      name: "Greek Yoghurt",
      category: "food",
      reason: "Fits a high-protein food recommendation profile.",
      confidence: 0.79,
    });
  }

  return new Response(JSON.stringify({ recommendations, source: "mock" }), {
    headers: { "Content-Type": "application/json" },
  });
});
