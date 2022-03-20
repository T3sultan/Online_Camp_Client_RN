import { StyleSheet, View, Image } from "react-native";
import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { Images } from "../theme";
import commonstyle from "../theme/commonstyle";
import CustomText from "../common/CustomText";
import { scale } from "react-native-size-matters";

const slides = [
  {
    key: "one",
    title: "Learning",
    subtitle: "Make yourself better",
    description: "Learning new stuffs and get professional",
    image: Images.onboarding1,
  },
  {
    key: "two",
    title: "Earning",
    subtitle: "Earning money with your knowledge",
    description: "You can earn professionally with our online camp education",
    image: Images.onboarding2,
  },
  {
    key: "three",
    title: "Help",
    subtitle: "Help others by educating",
    description: "Create your own online camp and others ",
    image: Images.onboarding3,
  },
];
const AppIntro = () => {
  const renderSlides = ({ item }) => {
    return (
      <View>
        <Image
          style={{ width: "100%", height: "60%", backgroundColor: "red" }}
          resizeMode="contain"
          source={item?.image}
        />
      </View>
    );
  };
  return <AppIntroSlider data={slides} renderItem={renderSlides} />;
};

export default AppIntro;

const styles = StyleSheet.create({});
