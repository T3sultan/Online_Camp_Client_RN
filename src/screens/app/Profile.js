import { StyleSheet, View, Image } from "react-native";
import React, { useState, useEffect } from "react";
import commonstyle from "../../theme/commonstyle";
import { Colors, Images, Metrics } from "../../theme";
import CustomText from "../../common/CustomText";
import API from "../../api";
import CustomLoading from "../../common/CustomLoading";

const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [onlineCampLoading, setOnlineCampLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const [onlineCampData, setOnlineCampData] = useState([]);

  useEffect(() => {
    getUserData();
  }, []);
  useEffect(() => {
    getUserOnlineCamp();
  }, []);

  const getUserData = async () => {
    const response = await API.get("auth/profile");
    setUserData(response.data.data);
    setLoading(false);
    // console.log("response", response.data);
  };

  const getUserOnlineCamp = async () => {
    const response = await API.get("onlineCamps/getUserOnlineCamps");
    setOnlineCampData(response.data.data);
    setOnlineCampLoading(false);
    console.log("onlineCamps", response.data);
  };

  if (loading) {
    return <CustomLoading />;
  }
  const renderOnlineCamp = () => {
    if (onlineCampData.length === 0) {
      return (
        <View style={styles.creatingOnlineCamp}>
          <CustomText centered primary bold title>
            My Online Camp
          </CustomText>

          <Image style={styles.emptyImageStyle} source={Images.empty} />
          <View style={{ marginTop: Metrics.base }}>
            <CustomText centered bold>
              You have not created any online camp yet!
            </CustomText>
          </View>
        </View>
      );
    }
  };

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
      <View style={{ flex: 1 }}>
        {onlineCampLoading ? <CustomLoading /> : renderOnlineCamp()}
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
  creatingOnlineCamp: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyImageStyle: {
    width: "100%",
  },
});
