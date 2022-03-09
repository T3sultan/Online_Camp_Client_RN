import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import cs from "../../theme/commonstyle";
import { Colors, Images, Metrics } from "../../theme";
import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../../common/Input";
import CustomText from "../../common/CustomText";
import CustomButton from "../../common/CustomButton";
import API from "../../api";
import CustomLoading from "../../common/CustomLoading";

const validationSchema = Yup.object().shape({
  name: Yup.string().label("Name").required("Name field is empty"),
  email: Yup.string()
    .trim()
    .label("Email")
    .email()
    .required("Email field is empty"),
  password: Yup.string()
    .label("Password")
    .required("Password field is empty")
    .min(8, "Too short Pass"),
  bio: Yup.string().label("bio").required("Bio field is empty"),
});

export default function Register({ navigation }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={cs.container}>
      <View style={styles.doubleContainer}>
        <Image source={Images.login} style={styles.imageStyle} />
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            bio: "",
          }}
          onSubmit={async (values, action) => {
            console.log({ values });
            action.setSubmitting(true);
            const registerURL = "auth/register";
            try {
              let res = await API.post(registerURL, values);
              action.setSubmitting(false);
              console.log("res ", res.data);
            } catch (err) {
              console.log("err ", err.response);
              action.setSubmitting(false);
            }
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
                  placeholder="Short bio"
                  formikProps={formikProps}
                  formikKey={"bio"}
                />
                {formikProps.isSubmitting ? (
                  <CustomLoading />
                ) : (
                  <CustomButton
                    onPress={formikProps.handleSubmit}
                    style={{ marginTop: Metrics.base }}
                    title="Register"
                  />
                )}
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

    marginTop: Metrics.start,
  },
  doubleContainer: {
    margin: Metrics.halfBase,
  },
});
