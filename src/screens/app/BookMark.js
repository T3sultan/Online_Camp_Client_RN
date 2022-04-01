import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import API from "../../api";
import { Metrics, Images, Colors } from "../../theme";
import CustomText from "../../common/CustomText";
import CustomLoading from "../../common/CustomLoading";

const BookMark = ({ navigation }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOnlineCamp();
  }, []);

  const fetchOnlineCamp = () => {
    API.get("onlineCamps/home")
      .then(res => {
        console.log("res", res.data);
        setList(res.data.data);
        setLoading(false);
      })
      .catch(err => {
        setLoading(false);

        console.log("err", err);
      });
  };
  if (loading) {
    return <CustomLoading />;
  }
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate("BookMarkDetails")}>
        <View style={styles.card}>
          <View style={styles.cardInside}>
            <Image source={Images.location} />
            <CustomText style={styles.textStyle} caption bold>
              {item.address}
            </CustomText>
          </View>
          <View
            style={{
              paddingTop: Metrics.header,
              backgroundColor: item.coverColor.code,
              paddingBottom: Metrics.base,
              borderRadius: Metrics.start,
            }}
          >
            <View>
              <CustomText centered mega bold white>
                {item.title}
              </CustomText>
              <View style={styles.secondCard}>
                <View style={styles.cardCalender}>
                  <Image source={Images.calendar} />
                  <CustomText white style={{ marginLeft: Metrics.start }}>
                    4 months
                  </CustomText>
                </View>
                <View style={styles.cardTeacher}>
                  <Image source={Images.teacher} />
                  <CustomText white style={{ marginLeft: Metrics.start }}>
                    {item.user.name}
                  </CustomText>
                </View>
              </View>
            </View>

            <View style={styles.cardItem}>
              {item.jobReady && (
                <View style={styles.buttonContainer}>
                  <CustomText caption white>
                    Job Ready
                  </CustomText>
                </View>
              )}

              {item.isScholarship && (
                <View
                  style={[
                    styles.buttonContainer,
                    { marginLeft: Metrics.start },
                  ]}
                >
                  <CustomText caption white>
                    Scholarship
                  </CustomText>
                </View>
              )}
            </View>
          </View>
          <View style={styles.descriptionStyle}>
            <CustomText title bold black>
              {item.title}
            </CustomText>
            <View style={{ margin: Metrics.start }}>
              <CustomText caption boldRegular>
                {item.description}
              </CustomText>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <View>
        <CustomText centered primary display>
          Saved Online Courses
        </CustomText>
      </View>
      <FlatList
        data={list}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: Metrics.base }}
        renderItem={renderItem}
        horizontal={false}
      />
    </View>
  );
};

export default BookMark;

const styles = StyleSheet.create({
  card: {
    borderRadius: Metrics.start,
    borderWidth: 2,
    borderColor: Colors.border,
    backgroundColor: Colors.white,
    margin: Metrics.start,
    marginBottom: Metrics.start,
  },
  cardInside: {
    flexDirection: "row",
    alignItems: "center",
    padding: Metrics.base,
  },
  textStyle: {
    marginLeft: Metrics.halfBase,
  },
  secondCard: {
    flexDirection: "row",
    marginTop: Metrics.base,
    alignSelf: "center",
  },
  cardCalender: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardTeacher: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: Metrics.base,
  },
  buttonContainer: {
    alignSelf: "flex-end",
    marginTop: Metrics.base,
    borderColor: Colors.white,
    borderWidth: 1,
    borderRadius: Metrics.baseDouble,
    padding: Metrics.start,
    paddingHorizontal: Metrics.base,
  },
  cardItem: {
    alignSelf: "flex-end",
    flexDirection: "row",
    marginRight: Metrics.doubleBase,
  },
  descriptionStyle: {
    marginTop: Metrics.base,
    margin: Metrics.base,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});
