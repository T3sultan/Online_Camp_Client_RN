import { Button, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomInput from "../../common/Input";
import cs from "../../theme/commonstyle";
import { Images, Metrics } from "../../theme";
import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../../common/Input";

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
              <TextInput
                placeholder="Email"
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

              {/* {formikProps.isSubmitting ? (
                <Loading />
              ) : (
                <Button
                  onPress={formikProps.handleSubmit}
                  style={{ margin: Metrics.doubleBase }}
                  title="Login"
                />
              )} */}
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
  },
  wrapper: {
    marginTop: Metrics.double,
    marginHorizontal: Metrics.base,
  },
});
