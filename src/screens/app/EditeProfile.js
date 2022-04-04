import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomText from "../../common/CustomText";
import commonstyle from "../../theme/commonstyle";

const EditeProfile = () => {
  return (
    <View style={commonstyle.container}>
      <CustomText title primary centered>
        Profile Edit
      </CustomText>
    </View>
  );
};

export default EditeProfile;

const styles = StyleSheet.create({});
