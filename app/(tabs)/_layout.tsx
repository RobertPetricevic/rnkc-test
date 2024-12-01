// app/_layout.js
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 90,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Two',
          tabBarIcon: ({ color, size }) => <Ionicons name="settings" color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
