import { Dimensions, platform } from "react-native";
import { scale } from "react-native-size-matters";

const { width, height } = Dimensions.get("window");

const metrics = {
  start: scale(5),
  header: scale(60),
  base: scale(20),
  baseDouble: scale(30),
  halfBase: scale(10),
  doubleBase: scale(40),
  regular: scale(50),
  screenWidth: width,
  screenHeight: height,
  btnHeight: scale(40),
  btnBorderRadius: scale(20),
  splashWidth: scale(300),
  splashHeight: scale(300),
};

export default metrics;
