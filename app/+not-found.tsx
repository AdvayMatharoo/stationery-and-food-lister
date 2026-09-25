import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";

import { AppText } from "@/components/ui/AppText";
import { colors } from "@/constants/colors";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops" }} />
      <View style={styles.container}>
        <AppText style={styles.title}>This screen doesn&apos;t exist.</AppText>
        <Link href="/" style={styles.link}>
          Back to Today
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontWeight: "700",
    marginBottom: 12,
  },
  link: {
    color: colors.stationeryAccent,
    fontWeight: "600",
  },
});
