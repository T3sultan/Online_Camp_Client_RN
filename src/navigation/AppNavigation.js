import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/app/Home";
import BookMark from "../screens/app/BookMark";
import Create from "../screens/app/Create";
import Profile from "../screens/app/Profile";
import { Images } from "../theme";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? Images.homeActive : Images.homeInActive;
          } else if (route.name === "BookMark") {
            iconName = focused ? Images.heartActive : Images.heartInActive;
          } else if (route.name === "Profile") {
            iconName = focused ? Images.profileActive : Images.profileInActive;
          } else if (route.name === "Create") {
            iconName = Images.add;
          }
          return (
            <Image
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
              source={iconName}
            />
          );
        },
        tabBarLabel: () => null,
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="BookMark"
        component={BookMark}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Create"
        component={Create}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigation;
