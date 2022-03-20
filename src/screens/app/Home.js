import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useContext } from "react";
import CustomButton from "../../common/CustomButton";
import { Colors, Images, Metrics } from "../../theme";
import { AuthContext } from "../../context/AuthContext";
import commonstyle from "../../theme/commonstyle";
import AppIntro from "../../components/AppIntro";

const Home = () => {
  const { authContext } = useContext(AuthContext);
  const { signOut } = authContext;

  return (
    <View style={commonstyle.container}>
      <AppIntro />
    </View>
  );

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
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({});
