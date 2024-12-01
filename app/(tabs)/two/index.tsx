// app/(tabs)/settings/index.js
import { View, Text, TextInput, Button, StyleSheet, Platform } from 'react-native';
import { useRouter } from 'expo-router';
import { KeyboardToolbar, KeyboardAwareScrollView } from 'react-native-keyboard-controller';

export default function SettingsScreen() {
  const router = useRouter();
  const height = 90;

  return (
    <>
      <KeyboardAwareScrollView
        style={{
          paddingTop: 100,
        }}>
        <Text style={styles.heading}>Settings Screen</Text>
        <TextInput placeholder="Input 1" style={styles.input} />
        <TextInput placeholder="Input 2 SECURE" style={styles.input} secureTextEntry />
        <TextInput placeholder="Input 3 SECURE" style={styles.input} secureTextEntry />
        <Button title="Go to Second" onPress={() => router.push('/two/second')} />
      </KeyboardAwareScrollView>
      <KeyboardToolbar offset={{ closed: height, opened: height }} />
    </>
  );
}

const styles = StyleSheet.create({
  heading: { fontSize: 24, marginBottom: 16 },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
});
