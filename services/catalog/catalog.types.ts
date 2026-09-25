import type { ItemCategory } from "@/types/item";

export interface CatalogSearchResult {
  id: string;
  name: string;
  category: ItemCategory;
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
  category?: ItemCategory;
  limit?: number;
}

export interface CatalogService {
  searchCatalog(input: CatalogSearchInput): Promise<CatalogSearchResult[]>;
}
