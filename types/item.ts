export type ItemCategory = "food" | "stationery";

export type ItemStatus =
  | "active"
  | "completed"
  | "expiring_soon"
  | "expired"
  | "archived";

export interface Item {
  id: string;
  name: string;
  category: ItemCategory;
  quantity?: number;
  unit?: string;
  status: ItemStatus;
  recurring?: boolean;
  recurrenceLabel?: string;
  expiryAt?: string;
  healthTags?: string[];
  createdAt: string;
  completedAt?: string;
}

export type ItemFilter = "all" | ItemCategory;
