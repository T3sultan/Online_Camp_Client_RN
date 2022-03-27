import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";
import { Colors } from "../theme";

const CustomLoading = ({ size = "large" }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={Colors.primary} size={size} />
    </View>
  );
};

export default CustomLoading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
