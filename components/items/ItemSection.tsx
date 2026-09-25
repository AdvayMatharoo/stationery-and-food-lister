import { StyleSheet, View } from "react-native";

import type { Item } from "@/types/item";

import { AppText } from "../ui/AppText";
import { ItemRow } from "./ItemRow";

interface ItemSectionProps {
  title: string;
  items: Item[];
  onToggle: (id: string) => void;
}

export const ItemSection = ({ title, items, onToggle }: ItemSectionProps) => (
  <View style={styles.container}>
    <AppText style={styles.title}>{title}</AppText>
    <View>
      {items.map((item) => (
        <ItemRow key={item.id} item={item} onToggle={onToggle} />
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  title: {
    fontWeight: "700",
  },
});
