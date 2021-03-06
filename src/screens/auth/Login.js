import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useEffect, useContext } from "react";
import cs from "../../theme/commonstyle";
import { Colors, Images, Metrics } from "../../theme";
import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../../common/Input";
import CustomText from "../../common/CustomText";
import CustomButton from "../../common/CustomButton";
import CustomLoading from "../../common/CustomLoading";
import { showMessage } from "react-native-flash-message";
import API from "../../api";
import { AuthContext } from "../../context/AuthContext";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .label("Email")
    .email()
    .required("Email field is empty"),
  password: Yup.string().label("Password").required("Password field is empty"),
});

export default function Login({ navigation }) {
  // useEffect(() => {
  //   showMessage({ message: "testing...", type: "success" });
  // }, []);

  const { authContext } = useContext(AuthContext);
  const { signIn } = authContext;

  return (
    <View style={[cs.container]}>
      <Image source={Images.login} style={styles.imageStyle} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values, action) => {
          console.log({ values });
          action.setSubmitting(true);
          const loginUrl = "auth/login";
          try {
            let res = await API.post(loginUrl, values);
            console.log("res", res);
            action.setSubmitting(false);
            signIn(res.data.token);
          } catch (err) {
            console.log("err", err.response);
            action.setSubmitting(false);
            showMessage({
              message: err.response.data.msg,
              type: "danger",
            });
          }
        }}
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
                <CustomText baseBold midGrey jumbo style={{}}>
                  LOGIN
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
              {formikProps.isSubmitting ? (
                <CustomLoading />
              ) : (
                <CustomButton
                  onPress={formikProps.handleSubmit}
                  style={{ marginTop: Metrics.header }}
                  title="Login"
                />
              )}
            </View>
          );
        }}
      </Formik>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <CustomText base body fw600 centered>
            Don't have an account?
            <CustomText base fw600 body centered primary>
              Sign up
            </CustomText>
          </CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: "100%",
    marginTop: -140,
    margin: Metrics.halfBase,
  },
  formWrapper: {
    marginTop: -60,
    margin: Metrics.halfBase,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: Metrics.base,
  },
});
