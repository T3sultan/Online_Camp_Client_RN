import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import CustomText from "../../common/CustomText";
import { Colors, Images, Metrics } from "../../theme";
import commonstyle from "../../theme/commonstyle";
import {
  MaterialIcons,
  Foundation,
  AntDesign,
  Entypo,
} from "@expo/vector-icons";

const BookMarkDetails = ({ route, navigation }) => {
  const { card } = route.params;
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={commonstyle.container}
    >
      <View
        style={{
          backgroundColor: card.coverColor.code,
          padding: Metrics.base,
          paddingBottom: Metrics.base,
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Images.backArrow} />
        </TouchableOpacity>
        <View style={styles.wrapper}>
          <CustomText centered white mega bold>
            {card.title}
          </CustomText>
          <View style={styles.userStyle}>
            <View style={styles.monthStyle}>
              <Image source={Images.calendar} />
              <CustomText white style={{ marginLeft: Metrics.start }}>
                4 months
              </CustomText>
            </View>
            <View style={styles.teacherStyle}>
              <Image source={Images.teacher} />

              <CustomText white style={{ marginLeft: Metrics.start }}>
                {card.user.name}
              </CustomText>
            </View>
          </View>
          <View style={styles.cardItem}>
            <View style={styles.TkContainer}>
              <CustomText white boldRegular>
                TK 0
              </CustomText>
            </View>

            {card.jobReady && (
              <View style={styles.buttonContainer}>
                <CustomText caption white>
                  Job Ready
                </CustomText>
              </View>
            )}

            {card.isScholarship && (
              <View
                style={[styles.buttonContainer, { marginLeft: Metrics.start }]}
              >
                <CustomText caption white>
                  Scholarship
                </CustomText>
              </View>
            )}
          </View>
        </View>
      </View>
      <View style={styles.detailsStyle}>
        <View style={styles.locationStyle}>
          <Image source={Images.location} />
          <CustomText style={styles.textStyle} caption bold>
            {card.address}
          </CustomText>
        </View>
        <View style={styles.title}>
          <View style={{ flexDirection: "row" }}>
            <MaterialIcons name="settings-display" size={24} color="#18B18D" />
            <CustomText style={{ marginLeft: Metrics.start }} title bold>
              {card.title}
            </CustomText>
          </View>
        </View>
        <View style={{ marginTop: Metrics.start }}>
          <CustomText midGrey caption>
            {card.description}
          </CustomText>
        </View>
        <View>
          <View style={styles.title}>
            <View style={{ flexDirection: "row" }}>
              <AntDesign name="contacts" size={24} color="#18B18D" />
              <CustomText style={{ marginLeft: Metrics.start }} title bold>
                Contact
              </CustomText>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={styles.contactStyle}>
                <Image source={Images.phone} />
                <CustomText style={{ marginLeft: Metrics.start }} midGrey>
                  {card.contact}
                </CustomText>
              </View>
              <View style={styles.contactStyle1}>
                <MaterialIcons name="email" size={24} color="#18B18D" />
                <CustomText style={{ marginLeft: Metrics.start }} midGrey>
                  {card.email}
                </CustomText>
              </View>
            </View>
            <View style={styles.contactStyle}>
              <Foundation name="web" size={24} color="#18B18D" />
              <CustomText style={{ marginLeft: Metrics.start }} midGrey>
                {card.website}
              </CustomText>
            </View>
            <View style={styles.contactStyle}>
              <Foundation name="web" size={24} color="#18B18D" />
              <CustomText style={{ marginLeft: Metrics.start }} midGrey>
                {card.website}
              </CustomText>
            </View>
            <View style={styles.title}>
              <View style={{ flexDirection: "row" }}>
                <Entypo name="address" size={24} color="#18B18D" />
                <CustomText style={{ marginLeft: Metrics.start }} title bold>
                  Address
                </CustomText>
              </View>
              <View style={{ marginTop: Metrics.start }}>
                <CustomText style={{ marginLeft: Metrics.start }} midGrey>
                  {card.address}
                </CustomText>
              </View>
            </View>
            <View style={styles.title}>
              <View style={{ flexDirection: "row" }}>
                <MaterialIcons
                  name="cast-for-education"
                  size={24}
                  color="#18B18D"
                />
                <CustomText style={{ marginLeft: Metrics.start }} title bold>
                  Careers
                </CustomText>
              </View>
              <View style={{ marginTop: Metrics.start }}>
                <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                  {card.careers.map((careers, index) => {
                    return (
                      <View key={index} style={styles.cardCareers}>
                        <CustomText
                          caption
                          white
                          style={styles.careersTextStyle}
                        >
                          {`${careers}`}
                        </CustomText>
                      </View>
                    );
                  })}
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default BookMarkDetails;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: Metrics.doubleBase,
  },
  userStyle: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: Metrics.baseDouble,
  },
  monthStyle: {
    flexDirection: "row",
    alignSelf: "center",
    padding: Metrics.start,
  },
  teacherStyle: {
    flexDirection: "row",
    alignSelf: "center",
    marginLeft: Metrics.base,
  },
  buttonContainer: {
    marginTop: Metrics.base,
    borderColor: Colors.white,
    borderWidth: 1,
    borderRadius: Metrics.baseDouble,
    padding: Metrics.start,
    paddingHorizontal: Metrics.base,
  },
  cardItem: {
    flexDirection: "row",
    marginRight: Metrics.doubleBase,
    justifyContent: "space-between",
  },
  TkContainer: {
    alignItems: "center",
    marginTop: Metrics.base,
    padding: Metrics.start,
    paddingHorizontal: Metrics.base,
  },
  detailsStyle: {
    margin: Metrics.base,
  },
  locationStyle: {
    flexDirection: "row",
  },
  textStyle: {
    marginLeft: Metrics.halfBase,
  },
  title: {
    marginTop: Metrics.base,
  },
  contactStyle: {
    marginTop: Metrics.base,
    flexDirection: "row",
  },
  contactStyle1: {
    marginTop: Metrics.base,
    flexDirection: "row",
    marginLeft: Metrics.base,
  },
  cardCareers: {
    marginTop: Metrics.halfBase,
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
    borderWidth: 1,
    borderRadius: Metrics.base,
    padding: Metrics.start,
    paddingHorizontal: Metrics.base,
    marginRight: Metrics.start,
  },
  careersTextStyle: {
    lineHeight: Metrics.base,
    padding: Metrics.start,
  },
});
