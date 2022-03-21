import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Metrics } from "../theme";
import CustomText from "./CustomText";
import { Switch, Icon } from "native-base";

const SwitchForm = ({
  title,
  details,
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
  formikProps,
  formikKey,
}) => {
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.wrapperOne,
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
          style={{ marginBottom: Metrics.start }}
          bold
          title
          caption={captionText}
          primaryColor={outlinePrimary}
        >
          {title}
        </CustomText>
        <CustomText
          lh={20}
          boldRegular
          caption={captionText}
          primaryColor={outlinePrimary}
        >
          {details}
        </CustomText>
      </View>
      <Switch
        colorScheme="primary"
        offTrackColor="rose.200"
        onTrackColor="lime.200"
        size="lg"
        onValueChange={value => {
          formikProps.setFieldValue("", value);
        }}
        value={formikProps.values[""]}
      />
    </View>
  );
};

export default SwitchForm;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: Metrics.base,
  },
  wrapperOne: {
    flex: 1,
    marginRight: Metrics.halfBase,
  },
});
