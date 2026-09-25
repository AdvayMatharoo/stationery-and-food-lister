import { Text, type TextProps } from "react-native";

import { colors } from "@/constants/colors";
import { typography } from "@/constants/typography";

interface AppTextProps extends TextProps {
  muted?: boolean;
  secondary?: boolean;
}

export const AppText = ({ muted, secondary, style, ...props }: AppTextProps) => (
  <Text
    style={[
      {
        color: muted ? colors.textMuted : secondary ? colors.textSecondary : colors.textPrimary,
        fontSize: typography.body,
      },
      style,
    ]}
    {...props}
  />
);
