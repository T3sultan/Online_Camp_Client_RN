import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useContext, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, Root } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../theme";
import { platform } from "react-native";
import SplashScreen from "../screens/auth/SplashScreen";
import AuthNavigation from "./AuthNavigation";
import AppNavigation from "./AppNavigation";
import FlashMessage from "react-native-flash-message";
import { AuthContext } from "./../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  // const [userToken, setUserToken] = useState(null);
  const [isLoading, setShowSplashScreen] = useState(true);
  // const isLoading = false;
  const { state, authContext } = useContext(AuthContext);
  const { userToken } = state;
  // const isLoading = true;
  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);
  }, []);

  // const { a } = useContext(AuthContext);
  // console.log(a);
  useEffect(() => {
    bootstrap();
  }, []);

  const bootstrap = async () => {
    try {
      let token;
      token = await AsyncStorage.getItem("userToken");
      authContext.restoreToken(token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar backgroundColor={Colors.border} />
          <Stack.Navigator>
            {isLoading ? (
              <Stack.Screen
                name="Splash"
                component={SplashScreen}
                options={{ headerShown: false }}
              />
            ) : userToken === null ? (
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="AuthNavigation"
                component={AuthNavigation}
              />
            ) : (
              <Stack.Screen
                options={{ headerShown: false }}
                name="AppNavigation"
                component={AppNavigation}
              />
            )}
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
      <FlashMessage position="top" />
    </NativeBaseProvider>
  );
}

// isLoading ? (
//   <Stack.Screen
//     name="splash"
//     component={SplashScreen}
//     options={{
//       headerShown: false,
//     }}
//   />
// ) :
