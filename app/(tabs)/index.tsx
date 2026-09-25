import { useMemo, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";

import { ItemSection } from "@/components/items/ItemSection";
import { AppText } from "@/components/ui/AppText";
import { Pill } from "@/components/ui/Pill";
import { Screen } from "@/components/ui/Screen";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import { searchItems } from "@/services/search";
import { useUIStore } from "@/store/uiStore";
import type { ItemFilter } from "@/types/item";

const filterOptions: { label: string; value: ItemFilter }[] = [
  { label: "All", value: "all" },
  { label: "Food", value: "food" },
  { label: "Stationery", value: "stationery" },
];

export default function TodayScreen(): React.JSX.Element {
  const router = useRouter();
  const items = useUIStore((state) => state.items);
  const toggleItemCompleted = useUIStore((state) => state.toggleItemCompleted);
  const [filter, setFilter] = useState<ItemFilter>("all");

  const filteredItems = useMemo(() => {
    const byQuery = searchItems("", items);

    return byQuery.filter((item) => {
      if (item.status === "archived") {
        return false;
      }

      if (filter === "all") {
        return item.status !== "expired";
      }

      return item.category === filter && item.status !== "expired";
    });
  }, [filter, items]);

  return (
    <Screen>
      <View style={styles.headerBlock}>
        <AppText secondary>Good morning</AppText>
        <SectionHeader title="Today" />
      </View>

      <View style={styles.filtersRow}>
        {filterOptions.map((option) => (
          <Pill
            key={option.value}
            label={option.label}
            active={filter === option.value}
            onPress={() => setFilter(option.value)}
          />
        ))}
      </View>

      <ItemSection title="Today's items" items={filteredItems} onToggle={toggleItemCompleted} />

      <Pressable onPress={() => router.push("/add-item")} style={styles.addRow}>
        <AppText style={styles.addLabel}>+ Add item</AppText>
      </Pressable>
    </Screen>
  );
}

const styles = StyleSheet.create({
  headerBlock: {
    gap: spacing.xs,
  },
  filtersRow: {
    flexDirection: "row",
    gap: spacing.sm,
    flexWrap: "wrap",
  },
  addRow: {
    marginTop: spacing.sm,
    paddingVertical: spacing.sm,
  },
  addLabel: {
    color: colors.stationeryAccent,
    fontWeight: "700",
  },
});
