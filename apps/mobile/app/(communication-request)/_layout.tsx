import { CommunicationRequestProvider } from "@/contexts/CommunicationRequestContext";
import { Stack } from "expo-router";

export default function CommunicationRequestLayout() {
  return (
    <CommunicationRequestProvider>
      <Stack>
        <Stack.Screen name="(steps)" options={{ headerShown: false }} />
      </Stack>
    </CommunicationRequestProvider>
  );
}
