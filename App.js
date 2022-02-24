import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import { Colors, Metrics } from "./src/theme";
import CustomText from "./src/common/CustomText";

export default function App() {
  const [fontsLoaded] = useFonts({
    EncodedSansBold: require("./assets/fonts/EncodeSans-Bold.ttf"),
    EncodedSansRegular: require("./assets/fonts/EncodeSans-Regular.ttf"),
    MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
    MontserratRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
  });
  // // if (!fontsLoaded) {
  // //   return <AppLoading />;
  // // }

  return (
    <SafeAreaView style={styles.container}>
      <CustomText>Open up App.js to start working on your app!</CustomText>
      <StatusBar style="auto" />
    </SafeAreaView>
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
