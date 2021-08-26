import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

export default function App() {

  let [fontsLoaded] = useFonts({
    fontFamily: 'Inter_900Black',
  });

  let handleRadioToggle = () => {
    console.log('a')
  };
  return (
      <View style={styles.container}>
        <Text style={styles.titleText}>ONIONFM</Text>
        <Pressable style={styles.fmButton} onPress={handleRadioToggle}>
          <Text style={styles.fmButtonText}>Press to turn ON</Text>
        </Pressable>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    color: "#fff",
  },
  titleText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  fmButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'white',
  },
  fmButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  }
});
