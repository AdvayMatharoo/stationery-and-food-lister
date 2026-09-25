import { StyleSheet, View } from "react-native";
import * as Haptics from "expo-haptics";

import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";
import type { Item } from "@/types/item";

import { AppText } from "../ui/AppText";
import { ItemCheckbox } from "./ItemCheckbox";

interface ItemRowProps {
  item: Item;
  onToggle: (id: string) => void;
}

const getMetaLabel = (item: Item): string | undefined => {
  if (item.status === "expiring_soon") {
    return "Expiring tomorrow";
  }

  if (item.recurring && item.recurrenceLabel) {
    return item.recurrenceLabel;
  }

  return undefined;
};

export const ItemRow = ({ item, onToggle }: ItemRowProps) => {
  const isCompleted = item.status === "completed";
  const quantityLabel = item.quantity
    ? `${item.quantity}${item.unit && item.unit !== "x" ? ` ${item.unit}` : item.unit === "x" ? "" : ""}`
    : undefined;
  const metaLabel = getMetaLabel(item);

  const handleToggle = async (): Promise<void> => {
    await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onToggle(item.id);
  };

  return (
    <View style={[styles.container, isCompleted && styles.completedContainer]}>
      <ItemCheckbox checked={isCompleted} onPress={() => void handleToggle()} />
      <View style={styles.textWrap}>
        <View style={styles.nameRow}>
          <AppText style={[styles.name, isCompleted && styles.completedText]}>{item.name}</AppText>
          {quantityLabel ? (
            <AppText style={[styles.quantity, isCompleted && styles.completedText]}>{quantityLabel}</AppText>
          ) : null}
        </View>
        {metaLabel ? (
          <AppText secondary style={[isCompleted && styles.completedText]}>
            {metaLabel}
          </AppText>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: spacing.md,
    paddingVertical: spacing.sm,
  },
  completedContainer: {
    opacity: 0.55,
  },
  textWrap: {
    flex: 1,
    gap: spacing.xs,
  },
  nameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    gap: spacing.md,
  },
  name: {
    fontWeight: "600",
    flexShrink: 1,
  },
  quantity: {
    color: colors.textSecondary,
  },
  completedText: {
    textDecorationLine: "line-through",
  },
});
