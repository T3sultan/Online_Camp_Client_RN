import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/app/Home";
import BookMark from "../screens/app/BookMark";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="BookMark" component={BookMark} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
