import { Pressable, StyleSheet } from "react-native";
import { Check } from "lucide-react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

import { animation } from "@/constants/animation";
import { colors } from "@/constants/colors";
import { radius } from "@/constants/radius";

interface ItemCheckboxProps {
  checked: boolean;
  onPress: () => void;
}

export const ItemCheckbox = ({ checked, onPress }: ItemCheckboxProps) => {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePress = (): void => {
    scale.value = withTiming(0.88, { duration: animation.fast }, () => {
      scale.value = withTiming(1, { duration: animation.normal });
    });

    onPress();
  };

  return (
    <Pressable onPress={handlePress} hitSlop={8}>
      <Animated.View style={[styles.box, checked && styles.checked, animatedStyle]}>
        {checked ? <Check size={14} color={colors.surface} /> : null}
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 22,
    height: 22,
    borderRadius: radius.small,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  checked: {
    borderColor: colors.foodAccent,
    backgroundColor: colors.foodAccent,
  },
});
