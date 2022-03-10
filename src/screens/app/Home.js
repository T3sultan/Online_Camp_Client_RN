import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import CustomButton from "../../common/CustomButton";
import { Colors, Metrics } from "../../theme";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  const { authContext } = useContext(AuthContext);
  const { signOut } = authContext;
  return (
    <View>
      <Text>Home</Text>
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

const styles = StyleSheet.create({});
