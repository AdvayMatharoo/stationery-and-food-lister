import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { useRouter } from "expo-router";

import { AutomationBadge } from "@/components/automation/AutomationBadge";
import { Button } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { Screen } from "@/components/ui/Screen";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { colors } from "@/constants/colors";
import { radius } from "@/constants/radius";
import { spacing } from "@/constants/spacing";
import { useUIStore } from "@/store/uiStore";
import type { ItemCategory } from "@/types/item";

export default function AddItemScreen(): React.JSX.Element {
  const router = useRouter();
  const addItem = useUIStore((state) => state.addItem);

  const [name, setName] = useState("");
  const [category, setCategory] = useState<ItemCategory>("food");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");

  const onSubmit = (): void => {
    if (!name.trim()) {
      return;
    }

    addItem({
      name: name.trim(),
      category,
      quantity: quantity ? Number(quantity) : undefined,
      unit: unit.trim() || undefined,
    });

    router.back();
  };

  return (
    <Screen>
      <SectionHeader title="Add Item" subtitle="Use local state for now." />

      <View style={styles.fieldGroup}>
        <TextInput
          placeholder="Item name"
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholderTextColor={colors.textMuted}
        />
      </View>

      <View style={styles.fieldGroup}>
        <View style={styles.row}>
          <Pill label="Food" active={category === "food"} onPress={() => setCategory("food")} />
          <Pill
            label="Stationery"
            active={category === "stationery"}
            onPress={() => setCategory("stationery")}
          />
        </View>
      </View>

      <View style={styles.row}>
        <TextInput
          placeholder="Quantity"
          keyboardType="numeric"
          style={[styles.input, styles.half]}
          value={quantity}
          onChangeText={setQuantity}
          placeholderTextColor={colors.textMuted}
        />
        <TextInput
          placeholder="Unit"
          style={[styles.input, styles.half]}
          value={unit}
          onChangeText={setUnit}
          placeholderTextColor={colors.textMuted}
        />
      </View>

      <View style={styles.fieldGroup}>
        <SectionHeader title="Repeat & automation" subtitle="Automation integration scaffold is ready." />
        <AutomationBadge />
      </View>

      <Button label="Add item" onPress={onSubmit} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  fieldGroup: {
    gap: spacing.sm,
  },
  row: {
    flexDirection: "row",
    gap: spacing.sm,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    borderRadius: radius.medium,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    color: colors.textPrimary,
  },
  half: {
    flex: 1,
  },
});
