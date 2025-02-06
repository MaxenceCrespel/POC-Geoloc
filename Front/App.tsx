import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Tracker from "./screens/Tracker";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Tracker />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
