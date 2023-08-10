import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts, Poppins_900Black } from '@expo-google-fonts/poppins';

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Poppins_900Black', fontSize: 40 }}>Poppins</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
