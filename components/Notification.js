import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

export default function Notification({navigation}) {
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
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingBottom: "10%",
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}
          style={{
            backgroundColor: "#0891b2",
            borderRadius: 60,
            shadowColor: "black",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 1,
            elevation: 5,
            marginTop: 50,
            marginLeft: 20,
            width: 50,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Entypo name="chevron-left" size={25} color="white" />
        </TouchableOpacity>
        <Text style={{
          marginTop: 20,
          marginLeft: 30,
          fontSize: 29,
          fontWeight: 'bold',
          color: 'white'
        }}>Notifications</Text>
      </View>
      <View style={{
        marginTop: '40%',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <LottieView source={require('../assets/notification.json')} autoPlay loop style={{ height: 250}} />
        <Text style={{
            fontSize: 22,
            fontWeight: 'bold',
            opacity: 0.8,
            color: '#0891b2'
        }}>Oops No Notifications!</Text>
      </View>
    </View>
  );
}
