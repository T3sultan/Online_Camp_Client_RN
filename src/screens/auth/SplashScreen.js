import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors, Images, Metrics } from "../../theme";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Image style={styles.logoStyle} source={Images.login} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  logoStyle: {
    // width: Metrics.screenWidth,
    // height: Metrics.screenHeight,
    width: Metrics.splashWidth,
    height: Metrics.splashHeight,
  },
});
