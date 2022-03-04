import { Button, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomInput from "../../common/Input";
import cs from "../../theme/commonstyle";
import { Images, Metrics } from "../../theme";
import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../../common/Input";
import CustomText from "../../common/CustomText";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .label("Email")
    .email()
    .required("Email field is empty"),
  password: Yup.string().label("Password").required("Password field is empty"),
});

export default function Login() {
  return (
    <View style={cs.container}>
      <Image source={Images.login} style={styles.imageStyle} />
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
      >
        {formikProps => {
          return (
            <View style={styles.formWrapper}>
              <View
                style={{
                  marginTop: -50,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CustomText midGrey jumbo style={{}}>
                  Login
                </CustomText>
              </View>

              <TextInput
                placeholder="Email Address"
                formikProps={formikProps}
                formikKey={"email"}
                autoCapitalize="none"
              />

              <TextInput
                placeholder="Password"
                formikProps={formikProps}
                formikKey={"password"}
                secureTextEntry={true}
              />
            </View>
          );
        }}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: "100%",
    marginTop: -140,
  },
  formWrapper: {
    marginHorizontal: Metrics.halfBase,
    marginTop: -60,
  },
});
