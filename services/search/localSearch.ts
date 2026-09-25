export type ItemCategory = "food" | "stationery";

export interface SearchableItem {
  id?: string;
  name?: string;
  category?: string;
  status?: string;
  healthTags?: string[];
  itemCategory?: ItemCategory | string;
}

export interface SearchItemsQuery {
  text?: string;
  name?: string;
  category?: string;
  status?: string;
  healthTags?: string[];
  itemCategory?: ItemCategory;
}

const normalize = (value: unknown): string =>
  String(value ?? "").trim().toLowerCase();

const toTagList = (value: unknown): string[] => {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.map((entry) => normalize(entry)).filter(Boolean);
};

const getHealthTags = (item: Record<string, unknown>): string[] => {
  const healthTags = toTagList(item.healthTags);
  if (healthTags.length > 0) {
    return healthTags;
  }

  return toTagList(item.tags);
};

const includesText = (source: unknown, query: string): boolean =>
  normalize(source).includes(query);

export const searchItems = <T extends SearchableItem>(
  query: string | SearchItemsQuery,
  items: T[],
): T[] => {
  const normalizedQuery =
    typeof query === "string"
      ? { text: query }
      : {
          text: query.text,
          name: query.name,
          category: query.category,
          status: query.status,
          healthTags: query.healthTags ?? [],
          itemCategory: query.itemCategory,
        };

  const textFilter = normalize(normalizedQuery.text);
  const nameFilter = normalize(normalizedQuery.name);
  const categoryFilter = normalize(normalizedQuery.category);
  const statusFilter = normalize(normalizedQuery.status);
  const itemCategoryFilter = normalize(normalizedQuery.itemCategory);
  const healthTagFilters = (normalizedQuery.healthTags ?? [])
    .map((tag) => normalize(tag))
    .filter(Boolean);

  return items.filter((item) => {
    const record = item as Record<string, unknown>;

    const matchesText =
      !textFilter ||
      includesText(record.name, textFilter) ||
      includesText(record.category, textFilter) ||
      includesText(record.status, textFilter) ||
      getHealthTags(record).some((tag) => tag.includes(textFilter)) ||
      includesText(record.itemCategory, textFilter);

    const matchesName = !nameFilter || includesText(record.name, nameFilter);
    const matchesCategory =
      !categoryFilter || normalize(record.category) === categoryFilter;
    const matchesStatus =
      !statusFilter || normalize(record.status) === statusFilter;
    const matchesItemCategory =
      !itemCategoryFilter ||
      normalize(record.itemCategory) === itemCategoryFilter;
    const itemHealthTags = getHealthTags(record);
    const matchesHealthTags = healthTagFilters.every((filterTag) =>
      itemHealthTags.includes(filterTag),
    );

    return (
      matchesText &&
      matchesName &&
      matchesCategory &&
      matchesStatus &&
      matchesHealthTags &&
      matchesItemCategory
    );
  });
};
