// app/(tabs)/settings/index.js
import { Stack } from 'expo-router';

export default function SettingsLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: 'Settings' }} />
      <Stack.Screen name="second" options={{ title: 'Details' }} />
    </Stack>
  );
}
