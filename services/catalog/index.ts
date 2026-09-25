import type {
  CatalogSearchInput,
  CatalogSearchResult,
  CatalogService,
} from "./catalog.types";

const mockCatalog: CatalogSearchResult[] = [
  {
    id: "food-greek-yoghurt",
    name: "Greek Yoghurt",
    category: "food",
    brand: "Sample Foods",
    tags: ["protein", "dairy"],
    nutrition: { calories: 130, protein: 12, sugar: 5, carbohydrates: 7, fat: 5 },
  },
  {
    id: "stationery-a4-paper",
    name: "A4 Paper",
    category: "stationery",
    brand: "Paper Co",
    tags: ["office", "printing"],
  },
];

const normalize = (value: string): string => value.trim().toLowerCase();

class MockCatalogService implements CatalogService {
  async searchCatalog(input: CatalogSearchInput): Promise<CatalogSearchResult[]> {
    const query = normalize(input.query);

    return mockCatalog
      .filter((item) => {
        const matchesQuery =
          !query ||
          normalize(item.name).includes(query) ||
          normalize(item.brand ?? "").includes(query) ||
          (item.tags ?? []).some((tag) => normalize(tag).includes(query));

        const matchesCategory = !input.category || item.category === input.category;
        return matchesQuery && matchesCategory;
      })
      .slice(0, input.limit ?? 10);
  }
}

export const createCatalogService = (): CatalogService => new MockCatalogService();

export * from "./catalog.types";
