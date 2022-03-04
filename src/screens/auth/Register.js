import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import CustomInput from "../../common/Input";
import cs from "../../theme/commonstyle";
import { Colors, Images, Metrics } from "../../theme";
import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../../common/Input";
import CustomText from "../../common/CustomText";
import CustomButton from "../../common/CustomButton";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .label("Email")
    .email()
    .required("Email field is empty"),
  name: Yup.string().label("Name").required("Name field is empty"),
  password: Yup.string().label("Password").required("Password field is empty"),
  confirmPassword: Yup.string()
    .label("ConfirmPassword")
    .required("Confirm Password field is empty"),
});

export default function Register({ navigation }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={cs.container}>
      <Image source={Images.login} style={styles.imageStyle} />
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values, action) => {
          console.log({ values });
        }}
        validationSchema={validationSchema}
      >
        {formikProps => {
          return (
            <View style={styles.formWrapper}>
              <View
                style={{
                  marginTop: -60,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CustomText baseBold midGrey jumbo style={{}}>
                  REGISTER
                </CustomText>
              </View>
              <TextInput
                placeholder="Full Name"
                formikProps={formikProps}
                formikKey={"name"}
                autoCapitalize="none"
              />

              <TextInput
                placeholder="Email Address"
                formikProps={formikProps}
                formikKey={"email"}
                autoCapitalize="words"
              />

              <TextInput
                placeholder="Password"
                formikProps={formikProps}
                formikKey={"password"}
                secureTextEntry={true}
              />
              <TextInput
                placeholder="Confirm Password"
                formikProps={formikProps}
                formikKey={"password"}
                secureTextEntry={true}
              />
              <CustomButton
                onPress={formikProps.handleSubmit}
                style={{ marginTop: Metrics.base }}
                title="Register"
              />
            </View>
          );
        }}
      </Formik>
      <View style={styles.footer}>
        <TouchableOpacity
        // onPress={() => {
        //   navigation.goBack();
        // }}
        >
          <CustomText base caption centered>
            By continuing, you accept the
            <CustomText base caption centered primary>
              Terms of Use
            </CustomText>
            <CustomText base caption centered>
              &
            </CustomText>
            <CustomText base caption centered primary>
              Privacy Policy
            </CustomText>
          </CustomText>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    width: "100%",
    marginTop: -140,
  },
  formWrapper: {
    marginTop: -80,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    // paddingBottom: Metrics.doubleBase,
    // justifyContent: "center",
    marginTop: Metrics.start,
    margin: Metrics.start,
  },
});
