import { StyleSheet, View } from "react-native";

import { AppText } from "@/components/ui/AppText";
import { Screen } from "@/components/ui/Screen";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { colors } from "@/constants/colors";
import { radius } from "@/constants/radius";
import { spacing } from "@/constants/spacing";
import { useUIStore } from "@/store/uiStore";

export default function HistoryScreen(): React.JSX.Element {
  const items = useUIStore((state) => state.items);
  const completed = items.filter((item) => item.status === "completed");
  const expired = items.filter((item) => item.status === "expired");

  return (
    <Screen>
      <SectionHeader title="History" />
      <View style={styles.card}>
        <AppText style={styles.heading}>Completed ({completed.length})</AppText>
        <AppText secondary>{completed.map((item) => item.name).join(", ") || "No completed items yet."}</AppText>
      </View>
      <View style={styles.card}>
        <AppText style={styles.heading}>Expired ({expired.length})</AppText>
        <AppText secondary>{expired.map((item) => item.name).join(", ") || "No expired items yet."}</AppText>
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
  heading: {
    fontWeight: "700",
  },
});
