import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import { AntDesign, Octicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import { auth } from "../firebase";
// import { deleteUser } from "firebase/auth";

export default function CustomDrawer({ navigation }) {
  const [errorMessage, setErrorMessage] = useState("");

  const user = auth.currentUser;

  // const deleted = () => {
  //   deleteUser(user)
  //   .then(() => {
  //     navigation.navigate("Home")
  //   })
  //   .catch((error) => {
  //     setErrorMessage(error.message)
  //   });
  // }

  if (user === null) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            backgroundColor: "#0891b2",
            paddingBottom: "30%",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <TouchableOpacity
            style={{
              marginTop: 40,
              marginLeft: 10,
              backgroundColor: "#0891b2",
              borderRadius: 50,
              height: 50,
              width: 50,
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "black",
              shadowOffset: { width: 0, height: 20 },
              shadowOpacity: 5,
              elevation: 5,
            }}
            onPress={() => navigation.closeDrawer()}
          >
            <AntDesign name="close" size={24} color="white" />
          </TouchableOpacity>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: "10%",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 19,
              }}
            >
              You are not Sign in
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 20,
            marginLeft: 10,
          }}
        >
          <AntDesign name="login" size={24} color="grey" />
          <Text
            style={{
              color: "grey",
              marginLeft: 20,
              fontSize: 18,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>

        <View
          style={{
            alignItems: "center",
            marginTop: "160%",
          }}
        >
          <Text
            style={{
              color: "grey",
              fontSize: 13,
            }}
          >
            App Version
          </Text>
          <Text
            style={{
              color: "grey",
              fontSize: 12,
            }}
          >
            2.0.0
          </Text>
        </View>
      </View>
    );
  } else {
    const email = user.email;
  }

  // auth.currentUser.email ---
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          backgroundColor: "#0891b2",
          paddingBottom: "10%",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <TouchableOpacity
          style={{
            marginTop: 40,
            marginLeft: 10,
            backgroundColor: "#0891b2",
            borderRadius: 50,
            height: 50,
            width: 50,
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "black",
            shadowOffset: { width: 0, height: 20 },
            shadowOpacity: 5,
            elevation: 5,
          }}
          onPress={() => navigation.closeDrawer()}
        >
          <AntDesign name="close" size={24} color="white" />
        </TouchableOpacity>
        <View
          style={{
            marginTop: 30,
            marginLeft: 10,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Image
            source={require("../picture/lanka.jpeg")}
            style={{
              height: 80,
              width: 80,
              borderRadius: 50,
              marginLeft: 10,
            }}
          />
        </View>
        <Text
          style={{
            marginLeft: 10,
            marginTop: 15,
            fontSize: 16,
            color: "white",
            fontWeight: "bold",
          }}
        >
          {auth.currentUser.email}
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 20,
          marginLeft: 10,
        }}
      >
        <Octicons name="sign-out" size={24} color="grey" />
        <Text
          style={{
            color: "grey",
            marginLeft: 20,
            fontSize: 18,
          }}
        >
          Log Out
        </Text>
      </TouchableOpacity>

      <View
        style={{
          alignItems: "center",
          marginTop: "160%",
        }}
      >
        <Text
          style={{
            color: "grey",
            fontSize: 13,
          }}
        >
          App Version
        </Text>
        <Text
          style={{
            color: "grey",
            fontSize: 12,
          }}
        >
          2.0.0
        </Text>
      </View>
    </View>
  );
}

//
