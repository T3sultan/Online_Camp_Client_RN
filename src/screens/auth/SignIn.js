import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  InputText,
  TextInput,
} from "react-native";
import { Item, Icon, Label, Input } from "native-base";
import React from "react";
import { Colors, Images, Metrics } from "../../theme";
import CustomText from "../../common/CustomText";
import cs from "../../theme/commonstyle";

const SignIn = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={Images.login}
        style={styles.imageStyle}
      ></ImageBackground>

      <View style={[styles.bottomView]}>
        <View style={styles.bottomView2}>
          <CustomText black jumbo>
            WellCome
          </CustomText>
          <CustomText>
            Don't have an account? <CustomText error>Register Now</CustomText>
          </CustomText>
        </View>
      </View>
      <View>
        <TextInput keyboardType="Email Address" placeholder="Email" />
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  imageStyle: {
    height: Dimensions.get("window").height / 2,
  },
  bottomView: {
    flex: 1.5,
    backgroundColor: Colors.border,
    borderTopStartRadius: Metrics.doubleBase,
    borderTopEndRadius: Metrics.doubleBase,
    marginTop: -60,
  },
  bottomView2: {
    padding: Metrics.doubleBase,
  },
});
