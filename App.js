import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

export default function App() {
  const [fontsLoaded] = useFonts({
    EncodedSansBold: require("./assets/fonts/EncodeSans-Bold.ttf"),
    EncodedSansRegular: require("./assets/fonts/EncodeSans-Regular.ttf"),
    MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
    MontserratRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
  });
  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "EncodedSansBold" }}>
        Open up App.js to start working on your app!
      </Text>
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
