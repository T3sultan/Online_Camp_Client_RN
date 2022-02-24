import { StyleSheet, Text as RNText } from "react-native";
import React from "react";
import { Colors, Fonts } from "../theme";

const CustomText = ({ children }) => {
  return <RNText style={[styles.textStyle]}>{children}</RNText>;
};

export default CustomText;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: Fonts.size.body,
    fontFamily: Fonts.type.baseBold,
    color: Colors.text,
  },
});
