import { Pressable, StyleSheet, type ViewStyle } from "react-native";

import { colors } from "@/constants/colors";
import { radius } from "@/constants/radius";
import { spacing } from "@/constants/spacing";

import { AppText } from "./AppText";

interface ButtonProps {
  label: string;
  onPress: () => void;
  style?: ViewStyle;
}

export const Button = ({ label, onPress, style }: ButtonProps) => (
  <Pressable onPress={onPress} style={({ pressed }) => [styles.button, style, pressed && styles.pressed]}>
    <AppText style={styles.label}>{label}</AppText>
  </Pressable>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.textPrimary,
    borderRadius: radius.medium,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    alignItems: "center",
  },
  pressed: {
    opacity: 0.85,
  },
  label: {
    color: colors.surface,
    fontWeight: "600",
  },
});
