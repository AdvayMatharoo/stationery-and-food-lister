import { StyleSheet, View } from "react-native";

import { colors } from "@/constants/colors";
import { radius } from "@/constants/radius";
import { spacing } from "@/constants/spacing";

import { AppText } from "../ui/AppText";

interface AutomationBadgeProps {
  label?: string;
}

export const AutomationBadge = ({ label = "Automation ready" }: AutomationBadgeProps) => (
  <View style={styles.container}>
    <AppText style={styles.text}>{label}</AppText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.automationAccent,
    borderRadius: radius.pill,
    alignSelf: "flex-start",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  text: {
    color: colors.surface,
    fontSize: 12,
    fontWeight: "600",
  },
});
