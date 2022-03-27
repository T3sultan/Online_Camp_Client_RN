import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import commonstyle from "../../theme/commonstyle";
import { Colors, Metrics } from "../../theme";
import CustomText from "../../common/CustomText";
import API from "../../api";
import CustomLoading from "../../common/CustomLoading";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const response = await API.get("auth/profile");
    setUserData(response.data.data);
    setLoading(false);
    // console.log("response", response.data);
  };

  if (loading) {
    return <CustomLoading />;
  }

  return (
    <View style={commonstyle.container}>
      <View style={styles.wrapper}>
        <CustomText white display centered>
          My Profile
        </CustomText>
        <View style={styles.secondWrapper}>
          <CustomText white>{userData.name}</CustomText>
          <CustomText white>{userData.email}</CustomText>
        </View>
        <View style={styles.description}>
          <CustomText white>{userData.bio}</CustomText>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.exploreButton,
    borderBottomRightRadius: 90,
    padding: Metrics.doubleBase,
    paddingHorizontal: Metrics.base,
  },
  secondWrapper: {
    marginTop: Metrics.base,
  },
  description: {
    marginTop: Metrics.start,
  },
});
