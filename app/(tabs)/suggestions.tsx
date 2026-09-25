import { useQuery } from "@tanstack/react-query";

import { SuggestionCard } from "@/components/ai/SuggestionCard";
import { Screen } from "@/components/ui/Screen";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { createRecommendationService } from "@/services/recommendations";
import { useUIStore } from "@/store/uiStore";

export default function SuggestionsScreen() {
  const items = useUIStore((state) => state.items);

  const { data } = useQuery({
    queryKey: ["recommendations", items.length],
    queryFn: async () => createRecommendationService().getRecommendations({ currentItems: items }),
  });

  return (
    <Screen>
      <SectionHeader
        title="Smart suggestions"
        subtitle="Personalised recommendations will appear here as the app learns what you need."
      />
      {(data ?? []).map((suggestion) => (
        <SuggestionCard key={suggestion.id} recommendation={suggestion} />
      ))}
    </Screen>
  );
}
