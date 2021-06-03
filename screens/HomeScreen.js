import React from "react";
import { useLayoutEffect } from "react";
import { ScrollView } from "react-native";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { Avatar } from "react-native-elements";
import CustomListItems from "../components/CustomListItems";
import { auth } from "../firebase";
import { TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'FNChat',
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
            <Avatar
              rounded
              source={{ uri: auth?.currentUser?.photoURL }}
            ></Avatar>
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            marginRight: 20,
          }}
        >
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="camerao" size={24} color="white"></AntDesign>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("AddChat");
            }}
            activeOpacity={0.5}
          >
            <SimpleLineIcons
              name="pencil"
              size={24}
              color="white"
            ></SimpleLineIcons>
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItems></CustomListItems>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
