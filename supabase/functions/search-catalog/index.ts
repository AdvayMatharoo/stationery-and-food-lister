import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

type CatalogCategory = "food" | "stationery";

interface CatalogSearchResult {
  id: string;
  name: string;
  category: CatalogCategory;
  brand?: string;
  imageUrl?: string;
  nutrition?: {
    calories?: number;
    protein?: number;
    sugar?: number;
    carbohydrates?: number;
    fat?: number;
  };
  tags?: string[];
}

const mockCatalog: CatalogSearchResult[] = [
  {
    id: "food-greek-yoghurt-1",
    name: "Greek Yoghurt",
    category: "food",
    brand: "Sample Foods",
    tags: ["protein", "dairy"],
    nutrition: { calories: 130, protein: 12, sugar: 5, carbohydrates: 7, fat: 5 },
  },
  {
    id: "stationery-notebook-1",
    name: "A5 Notebook",
    category: "stationery",
    brand: "Paper Co",
    tags: ["notes", "paper"],
  },
];

const normalize = (value: string): string => value.trim().toLowerCase();

serve((request) => {
  const { searchParams } = new URL(request.url);
  const query = normalize(searchParams.get("q") ?? "");
  const category = searchParams.get("category") as CatalogCategory | null;

  const results = mockCatalog.filter((item) => {
    const matchesCategory = !category || item.category === category;
    const matchesQuery =
      !query ||
      normalize(item.name).includes(query) ||
      normalize(item.brand ?? "").includes(query) ||
      (item.tags ?? []).some((tag) => normalize(tag).includes(query));

    return matchesCategory && matchesQuery;
  });

  return new Response(JSON.stringify({ results }), {
    headers: { "Content-Type": "application/json" },
  });
});
