import { Dimensions, platform } from "react-native";
import { scale } from "react-native-size-matters";

const { width, height } = Dimensions.get("window");

const metrics = {
  header: scale(60),
  base: scale(20),
  halfBase: scale(10),
  doubleBase: scale(40),
  regular: scale(50),
  screenWidth: width,
  screenHeight: height,
};

export default metrics;
