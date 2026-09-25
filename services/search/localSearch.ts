import type { Item } from "@/types/item";

const normalize = (value: string): string => value.trim().toLowerCase();

export const searchItems = (query: string, items: Item[]): Item[] => {
  const normalizedQuery = normalize(query);

  if (!normalizedQuery) {
    return items;
  }

  return items.filter((item) => {
    const haystack = [
      item.name,
      item.category,
      item.status,
      ...(item.healthTags ?? []),
    ]
      .map(normalize)
      .join(" ");

    return haystack.includes(normalizedQuery);
  });
};
