import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import CustomButton from "../../common/CustomButton";
import { Colors, Images, Metrics } from "../../theme";
import { AuthContext } from "../../context/AuthContext";
import commonstyle from "../../theme/commonstyle";
import AppIntro from "../../components/AppIntro";
import AsyncStorage from "@react-native-async-storage/async-storage";
import API from "../../api";
import CustomText from "../../common/CustomText";
import Swiper from "react-native-deck-swiper";
import CustomLoading from "../../common/CustomLoading";

const Home = () => {
  const { authContext } = useContext(AuthContext);
  const { signOut } = authContext;
  const [showOnBoarding, setShowOnBoarding] = useState(false);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOnlineCamp();
  }, []);

  useEffect(() => {
    checkOnBoarding();
  }, []);

  const checkOnBoarding = async () => {
    const isVisited = await AsyncStorage.getItem("visited");
    if (!isVisited) {
      setShowOnBoarding(true);
    }
    await AsyncStorage.removeItem("visited");
  };

  const toggleModal = () => {
    setShowOnBoarding(!showOnBoarding);
  };
  // if (showOnBoarding) {
  //   return (
  //     <View style={[commonstyle.container, { margin: 8 }]}>
  //       <AppIntro
  //         onDone={() => {
  //           setShowOnBoarding(false);
  //         }}
  //       />
  //     </View>
  //   );
  // }

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
  const renderCard = (card, index) => {
    return (
      <View style={styles.card}>
        <View style={styles.cardInside}>
          <Image source={Images.location} />
          <CustomText style={styles.textStyle} caption bold>
            {card.address}
          </CustomText>
        </View>
        <View
          style={{
            paddingTop: Metrics.header,
            backgroundColor: card.coverColor.code,
            paddingBottom: Metrics.doubleBase,
            borderTopLeftRadius: Metrics.header,
            borderBottomRightRadius: Metrics.header,
          }}
        >
          <View>
            <CustomText centered display bold white>
              {card.title}
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
                  Tipu Sultan
                </CustomText>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  if (loading) {
    return <CustomLoading />;
  }
  const onSwiped = (direction, index, item) => {
    console.log(direction, index, item);
  };

  return (
    <View style={commonstyle.container}>
      <CustomText centered display bold primary>
        ONLINE CAMPS
      </CustomText>

      <Swiper
        onSwipedLeft={(index, item) => onSwiped("left", index, item)}
        onSwipedRight={(index, item) => onSwiped("right", index, item)}
        cards={list}
        cardIndex={0}
        renderCard={renderCard}
        stackSize={10}
        stackSeparation={15}
        backgroundColor={Colors.lightGrey}
        verticalSwipe={false}
        // containerStyle={{ position: "relative" }}
      />

      <AppIntro visible={showOnBoarding} toggleModal={toggleModal} />
      <CustomButton
        onPress={() => {
          signOut();
        }}
        style={{ marginTop: Metrics.base, backgroundColor: Colors.primary }}
        title="LOG OUT"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {},
  card: {
    height: "90%",
    borderRadius: Metrics.start,
    borderWidth: 2,
    borderColor: Colors.lightGrey,
    backgroundColor: Colors.white,
  },
  cardInside: {
    flexDirection: "row",
    alignItems: "center",
    margin: Metrics.base,
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
});
