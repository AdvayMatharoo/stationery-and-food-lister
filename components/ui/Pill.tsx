import { Pressable, StyleSheet } from "react-native";

import { colors } from "@/constants/colors";
import { radius } from "@/constants/radius";
import { spacing } from "@/constants/spacing";

import { AppText } from "./AppText";

interface PillProps {
  label: string;
  active?: boolean;
  onPress?: () => void;
}

export const Pill = ({ label, active, onPress }: PillProps) => (
  <Pressable
    onPress={onPress}
    style={({ pressed }) => [styles.pill, active && styles.active, pressed && styles.pressed]}
  >
    <AppText style={[styles.label, active && styles.activeLabel]}>{label}</AppText>
  </Pressable>
);

const styles = StyleSheet.create({
  pill: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.pill,
    backgroundColor: colors.surface,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
  },
  active: {
    backgroundColor: colors.textPrimary,
    borderColor: colors.textPrimary,
  },
  pressed: {
    opacity: 0.8,
  },
  label: {
    fontWeight: "600",
  },
  activeLabel: {
    color: colors.surface,
  },
});
