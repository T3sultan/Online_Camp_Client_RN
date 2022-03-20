import { StyleSheet, View, Image } from "react-native";
import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import { Colors, Images, Metrics } from "../theme";
import commonstyle from "../theme/commonstyle";
import CustomText from "../common/CustomText";
import { scale } from "react-native-size-matters";
import CustomButton from "../common/CustomButton";

const slides = [
  {
    key: "one",
    title: "React Native ",
    subtitle: "React Native Learn once, write anywhere.",
    description:
      "React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.",
    image: Images.onboarding1,
  },
  {
    key: "two",
    title: "Flutter",
    subtitle: "Build apps for any screen",
    description:
      "Flutter transforms the app development process. Build, test, and deploy beautiful mobile, web, desktop, and embedded apps from a single codebase.",
    image: Images.onboarding2,
  },
  {
    key: "three",
    title: "Ionic",
    subtitle: "One codebase. Any platform. Now in Vue.Angular.React.",
    description:
      "An open source mobile toolkit for building high quality, cross-platform native and web app experiences. Move faster with a single code base, running everywhere with JavaScript and the Web. ",
    image: Images.onboarding3,
  },
];
const AppIntro = () => {
  const renderSlides = ({ item, index }) => {
    return (
      <View>
        <Image
          style={{ width: Metrics.screenWidth, height: scale(185) }}
          resizeMode="contain"
          source={item?.image}
        />
        <View>
          <CustomText
            style={{ marginTop: Metrics.doubleBase }}
            lh={60}
            boldRegular
            primary
            mega
            centered
          >
            {item?.title}
          </CustomText>
          <CustomText lh={15} base primary centered>
            {item?.subtitle}
          </CustomText>
          <CustomText
            description
            lh={25}
            centered
            style={{ marginTop: Metrics.halfBase }}
          >
            {item?.description}
          </CustomText>
        </View>
        {index === slides.length - 1 && (
          <CustomButton
            style={{
              width: 200,
              alignSelf: "center",
              marginTop: Metrics.doubleBase,
            }}
            title="Explore Now"
          />
        )}
      </View>
    );
  };
  return (
    <AppIntroSlider
      activeDotStyle={{ backgroundColor: Colors.primary }}
      data={slides}
      renderItem={renderSlides}
    />
  );
};

export default AppIntro;

const styles = StyleSheet.create({});
