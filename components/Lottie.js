import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import LottieView from "lottie-react-native";

const Lottie = (props) => {
  const [autoLoad, setAutoLoad] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAutoLoad(true);
    }, 4000);
  }, []);

  useEffect(() => {
    if (autoLoad) {
      props.navigation.replace("SeeMore");
    }
  }, [autoLoad, props.navigation]);

  return (
    <View
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
        <LottieView source={require("../assets/covid.json")} autoPlay loop />
        <Text style={{
            fontSize: 19,
            fontWeight: 'bold',
            fontStyle: 'italic',
            marginTop: "70%",
            // color: 'white'
        }}>Loading...</Text>
      </View>
    </View>
  );
};

export default Lottie;
