import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import { Colors, Fonts, Metrics } from "../theme";
// import { Input, Label, Icon, Item } from "native-base";

export default function FormInput({
  placeholder,
  formikProps,
  formikKey,
  autoCapitalize,
  secureTextEntry,
  autoCompleteType,
  style,
  maxChar,
  hint,
  multiline,
  textStyle,
}) {
  return (
    <View style={styles.container}>
      {/* <CustomText>{placeholder}</CustomText> */}
      {/* <View style={styles.wrapper}> */}
      <TextInput
        placeholder={placeholder}
        onChangeText={formikProps.handleChange(formikKey)}
        autoCapitalize={autoCapitalize}
        autoCompleteType={autoCompleteType}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        value={formikProps.values[formikKey]}
        style={[styles.label, { color: Colors.darkGrey }, textStyle]}
        multiline={multiline}
      />
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Metrics.doubleBase,
    borderColor: Colors.white,
    borderWidth: 0.5,
    marginTop: 5,
    justifyContent: "center",
    padding: Metrics.halfBase,
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
  },
  error: {
    color: Colors.error,
    fontSize: Fonts.size.caption,
  },
  label: {
    color: Colors.lightGrey,
    fontSize: Fonts.size.body,
    fontFamily: Fonts.type.base,
  },
});
