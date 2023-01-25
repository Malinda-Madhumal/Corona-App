import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Feather } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [pressed, setPressed] = useState();
  const [isPress, setPress] = useState();
  const [validationMessage, setValidationMessage] = useState("");

  const validationAndSet = (value, valueToCompare, setValue) => {
    if (value !== valueToCompare) {
      setValidationMessage("Password do not match!");
    } else {
      setValidationMessage("");
    }
    setValue(value);
  };

  const signUp = () => {
    if (password === confirmpassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigation.navigate("Home");
        })
        .catch((error) => {
          setValidationMessage(error.message);
        });
    }
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#0891b2",
      }}
    >
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
            paddingBottom: "5%",
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}
        >
          <Text
            style={{
              marginTop: "20%",
              marginLeft: "7%",
              fontSize: 33,
              color: "#059669",
              fontWeight: "bold",
            }}
          >
            Sign Up
          </Text>
          <Image
            source={{
              uri: "https://thumbs.dreamstime.com/b/online-registration-sign-up-concept-young-woman-signing-login-to-account-smartphone-app-user-interface-secure-password-194944775.jpg",
            }}
            style={{
              height: 210,
              width: 140,
              marginLeft: "50%",
              marginTop: "-29%",
            }}
          />
        </View>
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={7}
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
            onChangeText={(text) => setEmail(text)}
            style={{
              // borderRadius: 10,
              // backgroundColor: "#0891b2",
              paddingBottom: 10,
              paddingTop: 14,
              // paddingLeft: 14,
              // shadowColor: "black",
              // elevation: 5,
              // shadowOffset: { width: 0, height: 1 },
              // shadowOpacity: 5,
              // shadowRadius: 10,
              marginBottom: 20,
              borderBottomWidth: 1,
              borderColor: 'white'
            }}
          />
          <View
            style={{
              // borderRadius: 10,
              // backgroundColor: "#0891b2",
              paddingBottom: 14,
              paddingTop: 14,
              // paddingLeft: 10,
              // shadowColor: "black",
              // elevation: 5,
              // shadowOffset: { width: 0, height: 1 },
              // shadowOpacity: 5,
              // shadowRadius: 10,
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 20,
              borderBottomWidth: 1,
              borderBottomColor: 'white'
            }}
          >
            <TextInput
              placeholder="Password"
              value={password}
              placeholderTextColor={"white"}
              keyboardType={"numbers-and-punctuation"}
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
          <View
            style={{
              // borderRadius: 10,
              // backgroundColor: "#0891b2",
              paddingBottom: 14,
              paddingTop: 14,
              // paddingLeft: 10,
              // shadowColor: "black",
              // elevation: 5,
              // shadowOffset: { width: 0, height: 1 },
              // shadowOpacity: 5,
              // shadowRadius: 10,
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 10,
              borderBottomColor: 'white',
              borderBottomWidth: 1
            }}
          >
            <TextInput
              placeholder="Confirm Password"
              value={confirmpassword}
              placeholderTextColor={"white"}
              onChangeText={(value) =>
                validationAndSet(value, password, setConfirmPassword)
              }
              secureTextEntry={isPress ? true : false}
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
                setPress(!isPress);
              }}
            >
              <Feather
                name={isPress ? "eye-off" : "eye"}
                color="#eee"
                size={17}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              color: "red",
              marginTop: -4,
              marginBottom: 5,
              marginLeft: 3,
            }}
          >
            {validationMessage}
          </Text>
        </KeyboardAvoidingView>
        <TouchableOpacity
          onPress={signUp}
          style={{
            marginTop: 30,
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
            Sign Up
          </Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: "45%",
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
    </ScrollView>
  );
}
