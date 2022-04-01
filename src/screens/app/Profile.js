import {
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import commonstyle from "../../theme/commonstyle";
import { Colors, Images, Metrics } from "../../theme";
import CustomText from "../../common/CustomText";
import API from "../../api";
import CustomLoading from "../../common/CustomLoading";
import coverColors from "./../../theme/coverColor";

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
  // const deleteOnlineCamp = ({ item }) => {};

  if (loading) {
    return <CustomLoading />;
  }
  const renderItem = ({ item, index }) => {
    return (
      <ScrollView
        style={{
          borderRadius: Metrics.halfBase,
          padding: Metrics.base,
          backgroundColor: item.coverColor.code,
          width: Metrics.screenWidth * 0.4,
          margin: Metrics.start,
        }}
      >
        <CustomText numberOfLines={2} white title centered>
          {item.title}
        </CustomText>
        <CustomText body>{item.website}</CustomText>
        <TouchableOpacity
          onPress={() => {
            API.delete(`onlineCamps/${item._id}`).then(res => {
              console.log("delete", res);
              if (res.status === 200) {
                const newList = onlineCampData.filter(
                  value => value._id !== item._id
                );
                setOnlineCampData(newList);
              }
            });
          }}
          style={{ alignSelf: "flex-end", marginTop: Metrics.halfBase }}
        >
          <Image source={Images.delete} />
        </TouchableOpacity>
      </ScrollView>
    );
  };

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
    return (
      <View style={{ margin: Metrics.base }}>
        <CustomText primary title bold>
          My Online Camps
        </CustomText>
        <FlatList
          columnWrapperStyle={{ justifyContent: "space-between" }}
          numColumns={2}
          data={onlineCampData}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: Metrics.base }}
          renderItem={renderItem}
        />
      </View>
    );
  };

  return (
    <View style={commonstyle.container}>
      <View style={styles.wrapper}>
        <CustomText white display centered>
          My Profile
        </CustomText>
        <View style={styles.secondWrapper}>
          <CustomText headLine white>
            {userData.name}
          </CustomText>
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
