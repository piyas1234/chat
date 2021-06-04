import React from "react";
import { useLayoutEffect } from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { ScrollView } from "react-native";
import { TextInput } from "react-native";
import { useState } from "react";
import { Keyboard } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import firebase from 'firebase/app';
import { db, auth } from "../firebase";

const ChatScreen = ({ navigation, route }) => {
  const [input, setInput] = useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Chat",
      headerTitleAlign: "left",
      headerTitle: () => (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Avatar
            source={{
              uri: "https://iconape.com/wp-content/png_logo_vector/user-circle.png",
            }}
            rounded
          ></Avatar>
          <Text style={{ color: "white", marginLeft: 10, fontWeight: "bold" }}>
            {route.params.chatName}
          </Text>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity
          style={{ marginLeft: 10 }}
          onPress={navigation.goBack}
        >
          <AntDesign name="arrowleft" size={24} color="white"></AntDesign>
        </TouchableOpacity>
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
          <TouchableOpacity>
            <FontAwesome
              name="video-camera"
              size={24}
              color="white"
            ></FontAwesome>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="call" size={24} color="white"></Ionicons>
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);
  const sendMessage = () => {
    Keyboard.dismiss();
    db.collection('chats').doc(route.params.id).collection('message').add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        message: input,
        displayName: auth.currentUser.displayName,
        email: auth.currentUser.email,
        photoURL: auth.currentUser.photoURL,
    });
    setInput('')
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <KeyboardAvoidingView
        style={styles.container}
        keyboardVerticalOffset={90}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <ScrollView></ScrollView>
            <View style={styles.footer}>
              <TextInput
                value={input}
                onChangeText={(text) => setInput(text)}
                onSubmitEditing={sendMessage}
                placeholder="Write message"
                style={styles.textInput}
              ></TextInput>
              <TouchableOpacity onPress={sendMessage} activeOpacity={0.5}>
                <Ionicons name="send" size={24} color="black"></Ionicons>
              </TouchableOpacity>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      {/* <Text>{route.params.chatName}</Text> */}
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
  },
  textInput: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    backgroundColor: "#ECECEC",
    padding: 10,
    color: "gray",
    borderRadius: 30,
  },
});
