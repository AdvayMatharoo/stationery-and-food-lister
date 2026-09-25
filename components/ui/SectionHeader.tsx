import { StyleSheet, View } from "react-native";

import { spacing } from "@/constants/spacing";
import { typography } from "@/constants/typography";

import { AppText } from "./AppText";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => (
  <View style={styles.container}>
    <AppText style={styles.title}>{title}</AppText>
    {subtitle ? <AppText secondary>{subtitle}</AppText> : null}
  </View>
);

const styles = StyleSheet.create({
  container: {
    gap: spacing.xs,
  },
  title: {
    fontSize: typography.h2,
    fontWeight: "700",
  },
});
