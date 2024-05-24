import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is Mohammed Faisal Elorm</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#40eb34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize:24,
    fontWeight:'bold',
  }
});
