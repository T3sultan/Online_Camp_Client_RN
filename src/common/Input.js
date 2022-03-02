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
      <CustomText>{placeholder}</CustomText>
      <TextInput
        onChangeText={formikProps.handleChange(formikKey)}
        autoCapitalize={autoCapitalize}
        autoCompleteType={autoCompleteType}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        value={formikProps.values[formikKey]}
        style={[styles.label, { color: Colors.darkGrey }, textStyle]}
        multiline={multiline}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Metrics.doubleBase,
  },

  label: {
    color: Colors.lightGrey,
    fontSize: Fonts.size.body,
    fontFamily: Fonts.type.base,
  },

  error: {
    color: Colors.error,
    fontSize: Fonts.size.caption,
  },
});
