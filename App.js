import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native";
import Toast from "react-native-toast-message";
import ToDo from "./src/ToDo";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <StatusBar translucent style="dark" hidden={false} />
      <ToDo />
      <Toast />
    </SafeAreaView>
  );
}
