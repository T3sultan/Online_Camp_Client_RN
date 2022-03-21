import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import commonstyle from "../../theme/commonstyle";
import { Colors, Metrics } from "../../theme";
import CustomText from "../../common/CustomText";
import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../../common/Input";
import TagInput from "../../components/TagInput";

const Create = () => {
  return (
    <ScrollView style={commonstyle.container}>
      <View style={styles.mainContainer}>
        <CustomText title bold primary centered>
          Create Camp
        </CustomText>
        <Formik
          initialValues={{
            title: "",
            description: "",
            careers: [],
            address: "",
            email: "",
            contact: "",
            website: "",
            isScholarship: false,
            jobReady: false,
            coverColor: {
              name: "orange",
              code: Colors.orange,
            },
          }}
          onSubmit={(values, action) => {}}
        >
          {formikProps => (
            <View style={styles.secondContainer}>
              <TextInput
                formikKey="title"
                placeholder="Title"
                formikProps={formikProps}
                autoCapitalize="words"
              />
              <TextInput
                formikKey="description"
                placeholder="Description"
                formikProps={formikProps}
              />
              <View style={{ marginTop: Metrics.base }}>
                <CustomText lightGrey style={{ marginBottom: Metrics.start }}>
                  Careers (press space after adding a careers)
                </CustomText>
                <TagInput formikProps={formikProps} formikKey="careers" />
              </View>

              <TextInput
                formikKey="address"
                placeholder="Address"
                formikProps={formikProps}
              />
              <TextInput
                formikKey="email"
                placeholder="Contact Email"
                formikProps={formikProps}
              />
              <TextInput
                formikKey="contact"
                placeholder="Contact Number"
                formikProps={formikProps}
              />
              <TextInput
                formikKey="website"
                placeholder="Camp Website"
                formikProps={formikProps}
              />
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default Create;

const styles = StyleSheet.create({
  mainContainer: {
    margin: Metrics.base,
  },
  secondContainer: {
    marginTop: Metrics.base,
  },
});
