import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, type ViewProps } from "react-native";

import { colors } from "@/constants/colors";
import { spacing } from "@/constants/spacing";

interface ScreenProps extends ViewProps {
  scroll?: boolean;
  children: React.ReactNode;
}

export const Screen = ({ scroll = true, children, style, ...props }: ScreenProps) => {
  const content = scroll ? (
    <ScrollView contentContainerStyle={styles.content}>{children}</ScrollView>
  ) : (
    children
  );

  return (
    <SafeAreaView style={[styles.container, style]} {...props}>
      {content}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: spacing.lg,
    gap: spacing.lg,
  },
});
