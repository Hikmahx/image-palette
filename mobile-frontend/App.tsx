import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  useFonts,
  Poppins_800ExtraBold,
  Poppins_400Regular,
} from "@expo-google-fonts/poppins";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import tw from "twrnc";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Poppins_800ExtraBold,
    Poppins_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return <AppNavigator />;
}
