import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Input } from "react-native-elements/dist/input/Input";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {};
  return (
    <View style={styles.container}>
      <StatusBar style="light"></StatusBar>
      <Image
        source={{
          uri: "https://www.online-tech-tips.com/wp-content/uploads/2020/09/Google_Messages_logo.png",
        }}
        style={{ width: 250, height: 200 }}
      ></Image>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Enter email"
          autoFocus
          type="email"
          onChangeText={(text) => setEmail(text)}
        ></Input>
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          onChangeText={(text) => setPassword(text)}
        ></Input>
        <Button
          containerStyle={styles.button}
          onPress={signIn}
          title="Login"
        ></Button>
        <Button
          containerStyle={styles.button}
          type="outline"
          title="Register"
        ></Button>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
      
  },
  inputContainer: {},
  button: {},
});
