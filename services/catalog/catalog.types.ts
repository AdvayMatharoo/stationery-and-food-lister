export type CatalogCategory = "food" | "stationery";

export interface CatalogSearchResult {
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

export interface CatalogSearchInput {
  query: string;
  category?: CatalogCategory;
  limit?: number;
}

export interface CatalogService {
  searchCatalog(input: CatalogSearchInput): Promise<CatalogSearchResult[]>;
}
