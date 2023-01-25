import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { auth } from "../firebase";
import { StatusBar } from "expo-status-bar";
import { Entypo } from "@expo/vector-icons";

export default function Profile({ navigation }) {
  const user = auth.currentUser;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <StatusBar style="dark" />
      <View
        style={{
          marginTop: 40,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack("HomeScreen")}
          style={{
            marginLeft: 20,
            borderRadius: 50,
            height: 50,
            width: 50,
            backgroundColor: "#eee",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Entypo name="chevron-left" size={24} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Image
            source={require("../assets/avatar.jpg")}
            style={{
              height: 110,
              width: 110,
              borderRadius: 30,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            marginTop: 15,
            marginLeft: 15,
          }}
        >
          <Text
            style={{
              fontSize: 15,
            }}
          >
            {auth.currentUser.email}
          </Text>
        </View>
      </View>
    </View>
  );
}
