import type { AutomationRule } from "@/types/automation";

const mockRules: AutomationRule[] = [
  {
    id: "weekly-paper",
    label: "Weekly A4 Paper reminder",
    enabled: true,
    description: "Deterministic recurring reminder for stationery restock.",
  },
];

export const listAutomationRules = async (): Promise<AutomationRule[]> => mockRules;
