import {
  Image,
  StyleSheet,
  Platform,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { DarkTheme } from "@react-navigation/native";
import { Colors } from "@/constants/Colors";

export default function RankingScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type='title'>Fehlstunden Ranking!</ThemedText>
        <ThemedText>Last update: {new Date().toDateString()}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.container}>
        <ThemedView style={styles.stepHeader}>
          <ThemedText type='defaultSemiBold'>Platzierung</ThemedText>
          <ThemedText type='defaultSemiBold'>Name</ThemedText>
          <ThemedText type='defaultSemiBold'>Fehlstunden</ThemedText>
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText>1</ThemedText>
          <ThemedText>Max Mustermann</ThemedText>
          <ThemedText>5</ThemedText>
        </ThemedView>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
  },

  container: {
    flexDirection: "column",
  },

  stepContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    textAlign: "center",
    borderBottomColor: "#687076",
    paddingVertical: 5,
    borderBottomWidth: 1,
  },

  stepHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
    textAlign: "center",
    borderBottomColor: "#687076",
    paddingBottom: 5,
    borderBottomWidth: 3,
    marginBottom: 0,
  },
});
