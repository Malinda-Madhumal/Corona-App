import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import { auth, currentUser } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pressed, setPressed] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  // if (auth.currentUser) {
  //   // navigation.navigate("Home");
  // }

  const login = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigation.navigate("Home");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      setErrorMessage("Please enter your email and password to login!!");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0891b2",
      }}
    >
      <StatusBar style="dark" />
      <View
        style={{
          backgroundColor: "white",
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
          paddingTop: "20%",
        }}
      >
        <Text
          style={{
            marginLeft: "7%",
            fontSize: 33,
            color: "#059669",
            fontWeight: "bold",
            marginBottom: "20%",
          }}
        >
          Login
        </Text>
      </View>
      <Text
        style={{
          color: "red",
          marginLeft: "10%",
          marginTop: '10%'
        }}
      >
        {errorMessage}
      </Text>
      <KeyboardAvoidingView
      behavior="position"
        style={{
          marginTop: "10%",
          marginLeft: "7%",
          marginRight: "7%",
        }}
      >
        <TextInput
          placeholder="Email"
          value={email}
          placeholderTextColor={"white"}
          editable={true}
          keyboardType={"email-address"}
          selectionColor={"white"}
          onChangeText={(text) => setEmail(text)}
          style={{
            // borderRadius: 10,
            // backgroundColor: "#312e81",
            // paddingBottom: 10,
            paddingTop: 14,
            // paddingLeft: 14,
            // shadowColor: "black",
            // elevation: 5,
            // shadowOffset: { width: 0, height: 1 },
            // shadowOpacity: 5,
            // shadowRadius: 10,
            // marginBottom: 20,
            borderBottomWidth: 1,
            marginBottom: 10,
            borderBottomColor: "white",
          }}
        />
        <View
          style={{
            paddingTop: 14,
            borderBottomWidth: 1,
            marginBottom: 10,
            borderBottomColor: "white",
            // paddingBottom: 14,
            // paddingTop: 14,
            // paddingLeft: 10,
            // shadowColor: "black",
            // elevation: 5,
            // shadowOffset: { width: 0, height: 1 },
            // shadowOpacity: 5,
            // shadowRadius: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder="Password"
            value={password}
            placeholderTextColor={"white"}
            editable={true}
            keyboardType={"email-address"}
            selectionColor={"white"}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={pressed ? true : false}
            style={{
              maxWidth: "60%",
            }}
          />
          <TouchableOpacity
            style={{
              marginLeft: "90%",
              position: "absolute",
            }}
            onPress={() => {
              setPressed(!pressed);
            }}
          >
            <Feather
              name={pressed ? "eye-off" : "eye"}
              color="#eee"
              size={17}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <TouchableOpacity
        onPress={login}
        style={{
          marginTop: 50,
          alignItems: "center",
          shadowColor: "black",
          elevation: 5,
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 5,
          shadowRadius: 1,
          backgroundColor: "#0891b2",
          paddingBottom: 10,
          paddingTop: 10,
          borderRadius: 10,
          maxWidth: 100,
          marginLeft: "34%",
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        <Text
          style={{
            fontSize: 15,
          }}
        >
          If you not have any account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 15,
              color: "white",
              fontWeight: "bold",
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: "57%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "#eee",
            fontSize: 17,
          }}
        >
          Covid Plus+
        </Text>
      </View>
    </View>
  );
}
