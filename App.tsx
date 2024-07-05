import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { usePushNotification } from "./hooks/usePushNotification";

export default function App() {
  const { expoPushToken } = usePushNotification();
  return (
    <View style={styles.container}>
      <Text>{expoPushToken}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
