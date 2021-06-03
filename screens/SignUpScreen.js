import { StatusBar } from "expo-status-bar";
import React, { useState, useLayoutEffect } from "react";
import { View, KeyboardAvoidingView, StyleSheet } from "react-native";
import { Input, Button, Text } from "react-native-elements";

const SignUpScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  useLayoutEffect (() => {
    navigation.setOptions({
        headerBackTitle: 'Login'
    });
  }, [navigation])

  const resister = () => {};
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light"></StatusBar>
      <Text h3 style={{ marginTop: 20 }}>
        Create an account
      </Text>
      <Text style={styles.titleName}>FNChat</Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Enter full name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        ></Input>
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        ></Input>
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        ></Input>
        <Input
          placeholder="Profile Picture link (optional)"
          type="text"
          value={imgUrl}
          onChangeText={(text) => setImgUrl(text)}
          onSubmitEditing={resister}
        ></Input>
      </View>
      <Button
        containerStyle={styles.button}
        raised
        onPress={resister}
        title="Resister"
      ></Button>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  titleName: {
    fontSize: 30,
    color: "blue",
    marginBottom: 20,
    marginTop: 10,
    fontWeight: "bold",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 150,
    marginTop: 10,
  },
});
