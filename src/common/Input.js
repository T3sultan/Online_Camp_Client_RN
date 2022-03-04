import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import CustomText from "./CustomText";
import { Colors, Fonts, Metrics } from "../theme";

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
  const [borderColor, setBorderColor] = useState(Colors.lightGrey);

  const onFocus = () => {
    setBorderColor(Colors.darkGrey);
  };

  return (
    <View>
      <View style={[styles.container]}>
        <View style={[{ borderColor }]} floatingLabel>
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
            onFocus={onFocus}
            onBlur={() => {
              formikProps.setFieldTouched(formikKey, true);
              setBorderColor(Colors.lightGrey);
            }}
          />
        </View>
      </View>
      <View style={styles.errorType}>
        {formikProps.touched[formikKey] && formikProps.errors[formikKey] && (
          <CustomText style={[styles.label, styles.error]}>
            {formikProps.errors[formikKey]}
          </CustomText>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Metrics.doubleBase,
    borderColor: Colors.white,
    borderWidth: 0.5,
    marginTop: 10,
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
  errorType: {
    marginLeft: Metrics.halfBase,
  },
});
