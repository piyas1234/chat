import React, { useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Input, Button } from "react-native-elements";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, []);

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error));
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light"></StatusBar>
      <Text style={styles.titleName}>FNChat</Text>
      <Image
        source={{
          uri: "https://www.online-tech-tips.com/wp-content/uploads/2020/09/Google_Messages_logo.png",
        }}
        style={{ width: 200, height: 130, marginBottom: 20 }}
      ></Image>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Enter email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        ></Input>
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
        ></Input>
      </View>
      <Button containerStyle={styles.button} onPress={signIn} title="Login" />
      <Button
        onPress={() => navigation.navigate("Resister")}
        containerStyle={styles.button}
        type="outline"
        title="Resister"
      />
      <View style={{ height: 100 }}></View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

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
    marginTop: 50,
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
