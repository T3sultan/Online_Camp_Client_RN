import { StyleSheet, Text as RNText } from "react-native";
import React from "react";
import { Colors, Fonts } from "../theme";
import { moderateScale } from "react-native-size-matters";

const CustomText = props => {
  const {
    onPress,
    children,
    small,
    body,
    caption,
    subHeader,
    title,
    headLine,
    display,
    jumbo,
    mega,
    bold,
    baseBold,
    base,
    boldRegular,
    border,
    primary,
    lightGrey,
    darkGrey,
    secondary,
    white,
    text,
    midGrey,
    grey,
    green,
    orange,
    error,
    blue,
    superLightGrey,
    underLine,
    centered,
    alginRight,
    alginLeft,
    fwNormal,
    fw500,
    fw600,
    fwBold,
    lh,
    style,
    black,
    description,
    numberOfLines,
  } = props;
  return (
    <RNText
      style={[
        styles.textStyle,
        //fonts size
        small && { fontSize: moderateScale(Fonts.size.small) },
        body && { fontSize: moderateScale(Fonts.size.body) },
        caption && { fontSize: moderateScale(Fonts.size.caption) },
        subHeader && { fontSize: moderateScale(Fonts.size.subHeader) },
        title && { fontSize: moderateScale(Fonts.size.title) },
        headLine && { fontSize: moderateScale(Fonts.size.headLine) },
        display && { fontSize: moderateScale(Fonts.size.display) },
        jumbo && { fontSize: moderateScale(Fonts.size.jumbo) },
        mega && { fontSize: moderateScale(Fonts.size.mega) },
        //fonts
        bold && { fontFamily: Fonts.type.bold },
        boldRegular && { fontFamily: Fonts.type.boldRegular },
        base && { fontFamily: Fonts.type.base },
        baseBold && { fontFamily: Fonts.type.baseBold },

        //color
        black && { color: Colors.black },
        primary && { color: Colors.primary },
        lightGrey && { color: Colors.lightGrey },
        darkGrey && { color: Colors.darkGrey },
        secondary && { color: Colors.secondary },
        border && { color: Colors.border },
        white && { color: Colors.white },
        text && { color: Colors.text },
        superLightGrey && { color: Colors.superLightGrey },
        midGrey && { color: Colors.midGrey },
        grey && { color: Colors.grey },
        green && { color: Colors.green },
        orange && { color: Colors.orange },
        error && { color: Colors.error },
        blue && { color: Colors.blue },
        description && { color: Colors.description },

        //
        underLine && { textDecorationLine: "underline" },
        centered && { textAlign: "center" },
        alginRight && { textAlign: "right" },
        alginLeft && { textAlign: "left" },
        fwNormal && { fontWeight: "normal" },
        fw500 && { fontWeight: "500" },
        fw600 && { fontWeight: "600" },
        fwBold && { fontWeight: "bold" },
        lh && { lineHeight: lh },
        style,
      ]}
      numberOfLines={numberOfLines}
    >
      {children}
    </RNText>
  );
};

export default CustomText;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: Fonts.size.body,
    fontFamily: Fonts.type.baseBold,
    color: Colors.text,
  },
});
