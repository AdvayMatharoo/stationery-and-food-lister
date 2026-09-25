import "react-native-reanimated";

import { useEffect } from "react";
import { Stack } from "expo-router";
import { QueryClientProvider } from "@tanstack/react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { queryClient } from "@/lib/queryClient";
import { initializeDatabase } from "@/lib/sqlite";

export default function RootLayout() {
  useEffect(() => {
    void initializeDatabase();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="add-item" options={{ presentation: "modal", headerShown: true, title: "Add item" }} />
          <Stack.Screen name="item/[id]" options={{ headerShown: true, title: "Item" }} />
        </Stack>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
