// app/(tabs)/settings/details.js
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { KeyboardAwareScrollView, KeyboardToolbar } from 'react-native-keyboard-controller';

export default function SecondScreen() {
  const router = useRouter();

  return (
    <>
      <KeyboardAwareScrollView
        style={{
          paddingTop: 100,
        }}>
        <Text style={styles.heading}>Details Screen</Text>
        <TextInput placeholder="Input 1" style={styles.input} autoFocus />
        <TextInput placeholder="Input 2" style={styles.input} />
        <Button title="Go Back" onPress={() => router.back()} />
      </KeyboardAwareScrollView>
      <KeyboardToolbar />
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
