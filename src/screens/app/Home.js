import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import CustomButton from "../../common/CustomButton";
import { Colors, Images, Metrics } from "../../theme";
import { AuthContext } from "../../context/AuthContext";
import commonstyle from "../../theme/commonstyle";
import AppIntro from "../../components/AppIntro";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = () => {
  const { authContext } = useContext(AuthContext);
  const { signOut } = authContext;
  const [showOnBoarding, setShowOnBoarding] = useState(false);

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
  if (showOnBoarding) {
    return (
      <View style={[commonstyle.container, { margin: 8 }]}>
        <AppIntro
          onDone={() => {
            setShowOnBoarding(false);
          }}
        />
      </View>
    );
  }

  return (
    <ScrollView>
      <Text>Home</Text>
      <Text>Description</Text>
      <CustomButton
        onPress={() => {
          signOut();
        }}
        style={{ marginTop: Metrics.base, backgroundColor: Colors.primary }}
        title="LOG OUT"
      />
      {/* <AppIntro visible={showOnBoarding} toggleModal={toggleModal} /> */}
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
