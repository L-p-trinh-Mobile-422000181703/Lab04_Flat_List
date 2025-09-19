import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export const unstable_settings = {
  anchor: "index",
};

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Product List" }} />
        <Stack.Screen name="usb-list" options={{ title: "USB List" }} />
        <Stack.Screen name="user-list" options={{ title: "User List" }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
