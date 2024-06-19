import {
  Image,
  StyleSheet,
  Platform,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function StatScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type='title'>Bilanz & Stats</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText>
          Hier erstellen wir eine gesamte Bilanz der Fehlstunden. Diese bezieht
          sich jedoch auf alle Schüler zusammen.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.divider} />
      <ThemedView style={styles.statsContainer}>
        <ThemedText type='defaultSemiBold'>Fehlstunden gesamt:</ThemedText>
        <ThemedText>100</ThemedText>
      </ThemedView>
      <ThemedView style={styles.statsContainer}>
        <ThemedText type='defaultSemiBold'>Fehlstunden gesamt:</ThemedText>
        <ThemedText>100</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: "#687076",
    borderBottomWidth: 2,
  },

  statsContainer: {
    flexDirection: "row",
    gap: 4,
  },

  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
