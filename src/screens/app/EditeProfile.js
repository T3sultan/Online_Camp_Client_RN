import {
  TextInput,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import CustomText from "../../common/CustomText";
import commonstyle from "../../theme/commonstyle";
import { Metrics, Images, Colors } from "../../theme";
import { Ionicons } from "@expo/vector-icons";
import API from "../../api";

const EditeProfile = ({ route, navigation }) => {
  const { email, bio, name } = route.params;
  const [count, setCount] = useState(null);
  const [bioMake, setBioMake] = useState(null);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    setCount(bio);
    setBioMake(bio);
    setUserName(name);
  }, []);

  console.log(email);
  return (
    <View style={[commonstyle.container]}>
      <View style={styles.wrapper}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="caret-back" size={24} color="#18B18D" />
        </TouchableOpacity>
        <CustomText title primary centered>
          Edit
        </CustomText>
        <TouchableOpacity
          onPress={async () => {
            const url = "auth/profile";
            try {
              let response = await API.put(url, {
                bio: bioMake,
                name: userName,
              });
              navigation.navigate("Profile");
            } catch (error) {
              console.log("error", error.response);
            }
          }}
        >
          <View>
            <CustomText title bold primary>
              Save
            </CustomText>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ padding: Metrics.halfBase }}>
        <View>
          <CustomText lightGrey caption>
            About Me
          </CustomText>
        </View>
        <View>
          <TextInput
            multiline
            numberOfLines={4}
            maxLength={300}
            editable
            defaultValue={bio}
            onChangeText={text => {
              setCount(text.length);
              setBioMake(text);
            }}
            style={{
              marginTop: 13,
              borderBottomColor: "#333333",
              borderBottomWidth: 1,
            }}
          />
        </View>
      </View>
      <View style={{ padding: Metrics.halfBase }}>
        <View>
          <CustomText lightGrey caption>
            Name
          </CustomText>
        </View>
        <View>
          <TextInput
            onChangeText={text => {
              setUserName(text);
            }}
            editable={true}
            defaultValue={name}
            style={{
              marginTop: 13,
              borderBottomColor: "#333333",
              borderBottomWidth: 1,
            }}
          />
        </View>
      </View>
      <View style={{ padding: Metrics.halfBase }}>
        <View>
          <CustomText lightGrey caption>
            Email Address
          </CustomText>
        </View>
        <View>
          <TextInput
            value={email}
            editable={false}
            style={{
              marginTop: 13,
              borderBottomColor: "#333333",
              borderBottomWidth: 1,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default EditeProfile;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: Metrics.halfBase,
  },
});
