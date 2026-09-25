import { StyleSheet, View } from "react-native";

import { colors } from "@/constants/colors";
import { radius } from "@/constants/radius";
import { spacing } from "@/constants/spacing";
import type { Recommendation } from "@/types/recommendation";

import { AppText } from "../ui/AppText";

interface SuggestionCardProps {
  recommendation: Recommendation;
}

export const SuggestionCard = ({ recommendation }: SuggestionCardProps) => (
  <View style={styles.card}>
    <AppText style={styles.name}>{recommendation.name}</AppText>
    <AppText secondary>{recommendation.reason}</AppText>
  </View>
);

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.large,
    backgroundColor: colors.surface,
    padding: spacing.lg,
    gap: spacing.sm,
  },
  name: {
    color: colors.suggestionAccent,
    fontWeight: "700",
  },
});
