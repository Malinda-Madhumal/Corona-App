import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
  FlatList,
  Animated,
} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

const items = [
  {
    image: require("../picture/confused.jpeg"),
  },
  {
    image: require("../picture/cough.jpeg"),
  },
  {
    image: require("../picture/fever.jpeg"),
  },
];

const width = Dimensions.get("window").width;

export default function AddItems() {
  // const [items, setItems] = useState([]);

  // const onAdd = React.useCallback(() => {
  //   setItems((currentItems) => [...currentItems, 0]);
  // });

  // const onDelete = React.useCallback((index) => {
  //   setItems((currentItems) =>
  //     currentItems.filter((_, currentItemsIndex) => currentItemsIndex != index)
  //   );
  // });

  // const renderProduct = ({ item, index }) => {
  //   return (
  //     <View
  //       style={{
  //         width: width,
  //         height: 200,
  //         alignItems: "center",
  //         justifyContent: "center",
  //       }}
  //     >
  //       <Image
  //         source={item}
  //         style={{
  //           height: "100%",
  //           width: "100%",
  //           resizeMode: "contain",
  //         }}
  //       />
  //     </View>
  //   );
  // };

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width)

  return (
    <View
      style={{
        // flex: 1,
        backgroundColor: "white",
      }}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.8}
        snapToInterval={width}
        bounces={false}
        pagingEnabled={true}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false}
        )}
        s
      >
        <Image
          source={items[0].image}
          style={{
            width: width,
            height: 290,
            resizeMode: "cover",
          }}
        />
        <Image
          source={items[1].image}
          style={{
            width: width,
            height: 290,
            resizeMode: "cover",
          }}
        />
        <Image
          source={items[2].image}
          style={{
            width: width,
            height: 290,
            resizeMode: "cover",
          }}
        />
      </ScrollView>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: '91%'
      }}>
        {
          items.map((item, index) => {
            let opacity = position.interpolate({
              inputRange: [index - 1, index, index + 1],
              outputRange: [0, 2, 0],
              // extrapolate: 'clamp',
            })
            return (
              <Animated.View 
              key={index}
              style={{
                height: 15,
                width: 15,
                opacity,
                borderRadius: 30,
                backgroundColor: '#111',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {/* <Text style={{
                  fontSize: 15,
                  color: 'white',
                  fontWeight: 'bold'
                }}>{index + 1}</Text> */}
              </Animated.View>
            )
          })
        }
      </View>
    </View>
  );
}
