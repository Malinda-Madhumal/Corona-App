import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const items = [
  {
    image: require("../picture/headache.jpeg"),
    text: "Headache",
  },
  {
    image: require("../picture/eyes.jpeg"),
    text: "Red or irritated eyes",
  },
  {
    image: require("../picture/pains.jpeg"),
    text: "Aches and Pains",
  },
  {
    image: require("../picture/rash.jpeg"),
    text: "A rash on skin",
  },
  {
    image: require("../picture/sore.png"),
    text: "Sore Throat",
  },
  {
    image: require("../picture/stomach.webp"),
    text: "Diarrhoea",
  },
];

export default function SeeMore({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <StatusBar style="inverted" />
      <ScrollView>
        <View
          style={{
            backgroundColor: "#0891b2",
            paddingBottom: 40,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack("HomeScreen")}
            style={{
              marginTop: 43,
              marginLeft: 16,
              backgroundColor: "#0891b2",
              width: 40,
              height: 40,
              borderRadius: 40,
              shadowColor: "black",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 4,
              shadowRadius: 1,
              elevation: 5,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Entypo name="chevron-left" size={24} color="white" />
          </TouchableOpacity>
          <View
            style={{
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 33,
                color: "white",
                fontWeight: "bold",
              }}
            >
              Symptoms
            </Text>
          </View>
          <View
            style={{
              marginLeft: 10,
              marginRight: 10,
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontSize: 17,
              }}
            >
              COVID-19 affects different people in different ways. Most infected
              people will develop mild to moderate illness and recover without
              hospitalization.
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 20,
            marginLeft: "7%",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "grey",
            }}
          >
            Most common symptoms:
          </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              marginLeft: 20,
              paddingRight: 10,
              marginBottom: 18,
            }}
          >
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Image
                source={require("../picture/fever.jpeg")}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 70,
                }}
              />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  marginTop: 8,
                }}
              >
                Fever
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                marginLeft: 28,
              }}
            >
              <Image
                source={require("../picture/cough.jpeg")}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 70,
                }}
              />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  marginTop: 8,
                }}
              >
                Cough
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                marginLeft: 28,
              }}
            >
              <Image
                source={require("../picture/tireadness.jpeg")}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 70,
                }}
              />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  marginTop: 8,
                }}
              >
                Tiredness
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                marginLeft: 28,
              }}
            >
              <Image
                source={require("../picture/tase.jpeg")}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 70,
                }}
              />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  marginTop: 8,
                }}
              >
                Loss smell
              </Text>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            marginTop: 20,
            marginLeft: "7%",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "grey",
            }}
          >
            Less common symptoms:
          </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              marginLeft: 20,
              paddingRight: 10,
              marginBottom: 18,
            }}
          >
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Image
                source={items[0].image}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 70,
                }}
              />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  marginTop: 8,
                }}
              >
                {items[0].text}
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                marginLeft: 28,
              }}
            >
              <Image
                source={items[1].image}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 70,
                }}
              />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  marginTop: 8,
                  maxWidth: 120,
                }}
              >
                {items[1].text}
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                marginLeft: 28,
              }}
            >
              <Image
                source={items[2].image}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 70,
                }}
              />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  marginTop: 8,
                }}
              >
                {items[2].text}
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                marginLeft: 28,
              }}
            >
              <Image
                source={items[3].image}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 70,
                }}
              />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  marginTop: 8,
                }}
              >
                {items[3].text}
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                marginLeft: 28,
              }}
            >
              <Image
                source={items[4].image}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 70,
                }}
              />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  marginTop: 8,
                }}
              >
                {items[4].text}
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                marginLeft: 28,
              }}
            >
              <Image
                source={items[5].image}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 70,
                }}
              />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  marginTop: 8,
                }}
              >
                {items[5].text}
              </Text>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            marginTop: 20,
            marginLeft: "7%",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "grey",
            }}
          >
            Serious symptoms:
          </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              marginLeft: 20,
              paddingRight: 10,
              marginBottom: 18,
            }}
          >
            <View
              style={
                {
                  // alignItems: "center",
                }
              }
            >
              <Image
                source={require("../picture/breathing.jpeg")}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 70,
                }}
              />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  marginTop: 8,
                  maxWidth: 100,
                }}
              >
                Difficulty Breathing
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                marginLeft: 28,
              }}
            >
              <Image
                source={require("../picture/chest.jpeg")}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 70,
                }}
              />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  marginTop: 8,
                }}
              >
                Chest Pain
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                marginLeft: 28,
              }}
            >
              <Image
                source={require("../picture/confused.jpeg")}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 70,
                }}
              />
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  marginTop: 8,
                }}
              >
                Confusion
              </Text>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            marginTop: 10,
            marginLeft: 10,
          }}
        >
          <Text
            style={{
              color: "grey",
              fontWeight: "bold",
              fontSize: 17,
            }}
          >
            For more...
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            marginBottom: 20,
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "grey",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                color: "black",
              }}
            >
              1
            </Text>
            .Seek immediate medical attention if you have serious symptoms.
            Always call before visiting your doctor or health facility.
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "grey",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                color: "black",
              }}
            >
              2
            </Text>
            .People with mild symptoms who are otherwise healthy should manage
            their symptoms at home.
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "grey",
              marginTop: 10,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 16,
                color: "black",
              }}
            >
              3
            </Text>
            .On average it takes 5–6 days from when someone is infected with the
            virus for symptoms to show, however it can take up to 14 days.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
