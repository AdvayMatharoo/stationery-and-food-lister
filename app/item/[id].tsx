import { StyleSheet, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { AppText } from "@/components/ui/AppText";
import { Screen } from "@/components/ui/Screen";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { colors } from "@/constants/colors";
import { radius } from "@/constants/radius";
import { spacing } from "@/constants/spacing";
import { useUIStore } from "@/store/uiStore";

export default function ItemDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const item = useUIStore((state) => state.items.find((entry) => entry.id === id));

  if (!item) {
    return (
      <Screen>
        <SectionHeader title="Item" subtitle="Item not found" />
      </Screen>
    );
  }

  return (
    <Screen>
      <SectionHeader title={item.name} subtitle="Item details" />
      <View style={styles.card}>
        <AppText secondary>Category: {item.category}</AppText>
        <AppText secondary>Status: {item.status}</AppText>
        {item.quantity ? <AppText secondary>Quantity: {item.quantity} {item.unit ?? ""}</AppText> : null}
        {item.recurrenceLabel ? <AppText secondary>Repeat: {item.recurrenceLabel}</AppText> : null}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.large,
    backgroundColor: colors.surface,
    padding: spacing.lg,
    gap: spacing.sm,
  },
});
