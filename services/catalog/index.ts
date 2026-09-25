import type {
  CatalogSearchInput,
  CatalogSearchResult,
  CatalogService,
} from "./catalog.types";

export const SEARCH_CATALOG_FUNCTION_PATH = "/functions/v1/search-catalog";

const MOCK_CATALOG: CatalogSearchResult[] = [
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

export class MockCatalogService implements CatalogService {
  async searchCatalog(input: CatalogSearchInput): Promise<CatalogSearchResult[]> {
    const query = normalize(input.query);
    const limit = Math.max(1, input.limit ?? 20);

    const matches = MOCK_CATALOG.filter((item) => {
      const matchesQuery =
        query.length === 0 ||
        normalize(item.name).includes(query) ||
        normalize(item.brand ?? "").includes(query) ||
        (item.tags ?? []).some((tag) => normalize(tag).includes(query));

      const matchesCategory =
        !input.category || item.category === input.category;

      return matchesQuery && matchesCategory;
    });

    return matches.slice(0, limit);
  }
}

export const createCatalogService = (): CatalogService => new MockCatalogService();

export * from "./catalog.types";
