import { Pressable, StyleSheet, type ViewStyle } from "react-native";
import type { LucideIcon } from "lucide-react-native";

import { colors } from "@/constants/colors";
import { radius } from "@/constants/radius";
import { spacing } from "@/constants/spacing";

interface IconButtonProps {
  icon: LucideIcon;
  onPress: () => void;
  style?: ViewStyle;
}

export const IconButton = ({ icon: Icon, onPress, style }: IconButtonProps) => (
  <Pressable onPress={onPress} style={({ pressed }) => [styles.container, style, pressed && styles.pressed]}>
    <Icon color={colors.textPrimary} size={18} />
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.medium,
    padding: spacing.sm,
    backgroundColor: colors.surface,
  },
  pressed: {
    opacity: 0.7,
  },
});
