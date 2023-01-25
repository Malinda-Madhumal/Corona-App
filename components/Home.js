import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import LottieView from "lottie-react-native";
import { Platform } from "react-native";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
import { LinearGradient } from "expo-linear-gradient";

const Home = (props) => {
  const [autoLoad, setAutoLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAutoLoad(true);
    }, 5000);
  }, []);

  useEffect(() => {
    if (autoLoad) {
      props.navigation.replace("Drawer");
    }
  }, [autoLoad, props.navigation]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <View
          style={{
            backgroundColor: "#312e81",
            height: 200,
            width: 200,
            borderRadius: 110,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 50,
              fontWeight: "bold",
            }}
          >
            Covid
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: "36%",
            }}
          >
            Plus +
          </Text>
        </View>
        {/* <Safe */}
        <LottieView
          style={{
            marginTop: "80%",
          }}
          source={require("../assets/97096-loading-dots-pink.json")}
          autoPlay
          loop
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
