import { Stack } from "expo-router";

export default function CommunicationRequestStepsLayout() {
  return (
    <Stack>
      <Stack.Screen name="code/index" options={{ headerShown: false }} />
      <Stack.Screen
        name="initial-message/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="name/index" options={{ headerShown: false }} />
    </Stack>
  );
}
