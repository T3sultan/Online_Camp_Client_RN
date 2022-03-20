import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
} from "react-native";
import React from "react";
import CustomText from "./CustomText";
import { Colors, Metrics } from "../theme";

const CustomButton = ({
  title,
  onPress,
  style,
  outlinePrimary,
  outlineSecondary,
  secondary,
  width,
  height,
  color,
  noBorder,
  captionText,
  disable,
  fullWidth = false,
  primary,
  blue,
  exploreButton,
}) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        style={[
          styles.container,
          outlinePrimary && styles.outlinePrimary,
          fullWidth && styles.fullWidth,
          width && { width },
          height && { height },
          secondary && { backgroundColor: Colors.white },
          noBorder && { borderWidth: 0 },
          style,
          primary && { backgroundColor: Colors.primary },
          blue && { backgroundColor: Colors.blue },
          exploreButton && { backgroundColor: Colors.exploreButton },
        ]}
      >
        <CustomText
          fwBold
          title
          centered
          caption={captionText}
          primaryColor={outlinePrimary}
          style={[styles.text]}
        >
          {title}
        </CustomText>
      </View>
    </TouchableNativeFeedback>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.superLightGrey,
    borderColor: Colors.border,
    borderRadius: Metrics.btnBorderRadius,
    height: Metrics.btnHeight,
    borderWidth: 1,
  },
  text: {
    width: "100%",
  },
  outlinePrimary: {
    borderColor: Colors.primary,
    backgroundColor: "transparent",
    borderWidth: 1,
  },
  fullWidth: {
    width: "100%",
  },
});
