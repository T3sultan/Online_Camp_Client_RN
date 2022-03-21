import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Tags from "react-native-tags";
import { Colors, Fonts, Metrics } from "../theme";
import CustomText from "../common/CustomText";

const TagInput = ({ formikProps }) => {
  const [borderColor, setBorderColor] = useState(Colors.lightGrey);
  return (
    <Tags
      initialTags={formikProps.values["careers"]}
      onChangeTags={careers => {
        console.log("careers", careers);
        formikProps.setFieldValue("careers", careers);
      }}
      onTagPress={(index, tagLabel, event, deleted) =>
        console.log(index, tagLabel, event, deleted ? "deleted" : "not deleted")
      }
      inputStyle={{
        borderBottomColor: borderColor,
        borderBottomWidth: 1,
        borderRadius: 0,

        backgroundColor: Colors.white,
        color: Colors.darkGrey,
        fontSize: Fonts.size.body,
        fontFamily: Fonts.type.base,
        lineHeight: 17,
        paddingLeft: 0,
      }}
      tagTextStyle={styles.label}
      renderTag={({ tag, index, onPress, deleteTagOnPress, readonly }) => (
        <TouchableOpacity
          key={`${tag}-${index}`}
          onPress={onPress}
          style={styles.container}
        >
          <View style={{ padding: 10 }}>
            <CustomText fwBold caption primary>
              {tag}
            </CustomText>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default TagInput;

const styles = StyleSheet.create({
  label: {
    color: Colors.lightGrey,
    fontSize: Fonts.size.body,
    fontFamily: Fonts.type.base,
  },
  container: {
    borderWidth: 1,
    borderColor: Colors.primary,
    borderRadius: Metrics.base,
    marginRight: Metrics.start,
    marginVertical: 3,
  },
});
