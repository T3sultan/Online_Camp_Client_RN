import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import commonstyle from "../../theme/commonstyle";
import { Colors, CoverColors, Metrics } from "../../theme";
import CustomText from "../../common/CustomText";
import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../../common/Input";
import TagInput from "../../components/TagInput";
import CustomButton from "../../common/CustomButton";
import SwitchForm from "./../../common/SwitchForm";
import { AntDesign } from "@expo/vector-icons";

const Create = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={commonstyle.container}
    >
      <View style={styles.mainContainer}>
        <CustomText jumbo bold primary centered>
          Create Details
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
          onSubmit={(values, action) => {
            console.log("careers", values);
          }}
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
              <SwitchForm
                title="Job Ready"
                details="Will online camp students become job ready after completing ?"
                formikKey="jobReady"
                formikProps={formikProps}
              />
              <SwitchForm
                formikKey="isScholarship"
                formikProps={formikProps}
                title="Scholarship available"
                details="Do you provide scholarship to the camp students ?"
              />

              {/* <View style={styles.switchFrom}>
                <View style={styles.wrapperFrom}>
                  <CustomText style={{ marginBottom: Metrics.start }} bold>
                    Job Ready
                  </CustomText>
                  <CustomText lh={20} boldRegular caption>
                    Will online camp students become job ready after completing
                    ?
                  </CustomText>
                </View>
                <Switch
                  colorScheme="primary"
                  offTrackColor="rose.200"
                  onTrackColor="lime.200"
                  size="lg"
                  onValueChange={value => {
                    formikProps.setFieldValue("jobReady", value);
                  }}
                  value={formikProps.values["jobReady"]}
                />
              </View> */}
              <View style={styles.textStyle}>
                <CustomText bold>Select your cover color</CustomText>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={styles.coverColorStyle}
                >
                  {CoverColors.map(item => {
                    return (
                      <TouchableOpacity
                        style={{
                          height: Metrics.doubleBase,
                          width: Metrics.doubleBase,
                          backgroundColor: item.code,
                          marginRight: Metrics.base,
                          borderRadius: Metrics.base,
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        key={item.name}
                        onPress={() => {
                          formikProps.setFieldValue("coverColor", item);
                        }}
                      >
                        {item.name ===
                          formikProps.values["coverColor"].name && (
                          <AntDesign name="check" size={24} color="white" />
                        )}
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              </View>

              <CustomButton
                onPress={formikProps.handleSubmit}
                exploreButton
                style={{ marginTop: Metrics.header }}
                title="Create "
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
  switchFrom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: Metrics.base,
  },
  wrapperFrom: {
    flex: 1,
    marginRight: 10,
  },
  textStyle: {
    marginTop: Metrics.base,
  },
  coverColorStyle: {
    flexDirection: "row",
    paddingTop: Metrics.base,
  },
  cover: {},
});
