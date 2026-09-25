import { StyleSheet, View } from "react-native";
import { ChevronRight } from "lucide-react-native";

import { AppText } from "@/components/ui/AppText";
import { Screen } from "@/components/ui/Screen";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { colors } from "@/constants/colors";
import { radius } from "@/constants/radius";
import { spacing } from "@/constants/spacing";

const rows = [
  "Preferences",
  "Health & nutrition",
  "Notifications",
  "Appearance",
  "Data & privacy",
] as const;

export default function SettingsScreen(): React.JSX.Element {
  return (
    <Screen>
      <SectionHeader title="Settings" />
      <View style={styles.list}>
        {rows.map((row) => (
          <View key={row} style={styles.row}>
            <AppText>{row}</AppText>
            <ChevronRight size={16} color={colors.textMuted} />
          </View>
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  list: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.large,
    backgroundColor: colors.surface,
    overflow: "hidden",
  },
  row: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
