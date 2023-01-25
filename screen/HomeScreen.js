import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";
import { MenuAlt2Icon, BellIcon } from "react-native-heroicons/outline";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
// import LottieView from "lottie-react-native";

const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export default function HomeScreen({ navigation }) {
  const [refresh, setRefresh] = useState(false);
  const onRefresh = React.useCallback(() => {
    setRefresh(true);
    wait(2000).then(() => setRefresh(false));
  }, []);
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <StatusBar style="light" />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            backgroundColor: "#0891b2",
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            paddingBottom: 25,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 35,
            }}
          >
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <MenuAlt2Icon
                size={23}
                color="white"
                style={{
                  marginLeft: 15,
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                color: "white",
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              Covid 19 Details
            </Text>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Notifications", {
                  screen: "Notifications",
                })
              }
            >
              <BellIcon
                size={23}
                color="white"
                style={{
                  marginRight: 15,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 20,
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 28,
                  color: "white",
                  marginLeft: 10,
                  fontWeight: "bold",
                }}
              >
                Stay Home
              </Text>
              <Text
                style={{
                  fontSize: 28,
                  color: "white",
                  marginLeft: 60,
                  fontWeight: "bold",
                }}
              >
                {"&"}
              </Text>

              <Text
                style={{
                  fontSize: 28,
                  color: "white",
                  marginLeft: 10,
                  fontWeight: "bold",
                }}
              >
                Stay Safe
              </Text>
            </View>
            <Image
              source={require("../picture/covid.jpg")}
              style={{
                height: 120,
                width: 183,
                marginLeft: 14,
                borderRadius: 15,
              }}
            />
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            marginLeft: 20,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Hey! How Are You? 👋👋
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "#eee",
            marginTop: 15,
            height: 3,
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 20,
          }}
        ></View>

        <LinearGradient
          colors={["white", "#d1d5db"]}
          start={[0.9, 0.2]}
          end={[0.3, 0.1]}
          locations={[0, 0.8]}
          style={{
            borderRadius: 10,
            marginLeft: 7,
            marginRight: 7,
            paddingBottom: 8,
          }}
        >
          <View
            style={{
              marginTop: 10,
              marginLeft: 10,
              marginRight: 5,
            }}
          >
            <Text
              style={{
                marginBottom: 10,
                fontSize: 22,
                fontWeight: "bold",
              }}
            >
              What is the Covid 19?
            </Text>
            <Image
              source={require("../picture/corona1.jpeg")}
              style={{
                width: 90,
                height: 90,
                position: "absolute",
                marginLeft: "70%",
                borderRadius: 60,
                opacity: 0.4,
              }}
            />
            <Text
              style={{
                fontSize: 14,
                color: "black",
                fontWeight: "bold",
                opacity: 0.7,
              }}
            >
              Coronavirus disease{" "}
              <Text style={{ color: "red", fontWeight: "bold" }}>
                (COVID-19)
              </Text>{" "}
              is an infectious disease caused by the{" "}
              <Text style={{ fontWeight: "bold", color: "blue", fontSize: 15 }}>
                SARS-CoV-2
              </Text>{" "}
              virus. Most people infected with the virus will experience mild to
              moderate respiratory illness and recover without requiring special
              treatment. However, some will become seriously ill and require
              medical attention. Older people and those with underlying medical
              conditions like cardiovascular disease, diabetes, chronic
              respiratory disease, or cancer are more likely to develop serious
              illness. Anyone can get sick with{" "}
              <Text style={{ fontWeight: "bold", color: "red", fontSize: 15 }}>
                COVID-19 and become seriously ill or die at any age.
              </Text>{" "}
              The best way to prevent and slow down transmission is to be well
              informed about the disease and how the virus spreads. Protect
              yourself and others from infection by
              <Text style={{ fontWeight: "bold", color: "red", fontSize: 15 }}>
                {" "}
                staying at least 1 metre apart from others
              </Text>
              ,{" "}
              <Text style={{ fontWeight: "bold", color: "red", fontSize: 15 }}>
                wearing a properly fitted mask
              </Text>
              , and{" "}
              <Text style={{ fontWeight: "bold", color: "red", fontSize: 15 }}>
                washing your hands or using an alcohol-based rub frequently
              </Text>
              . Get vaccinated when it’s your turn and follow local guidance.
              The virus can spread from an{" "}
              <Text style={{ fontWeight: "bold", color: "red", fontSize: 15 }}>
                infected person’s mouth
              </Text>{" "}
              or{" "}
              <Text style={{ fontWeight: "bold", color: "red", fontSize: 15 }}>
                nose in small liquid
              </Text>{" "}
              particles when they{" "}
              <Text style={{ fontWeight: "bold", color: "red", fontSize: 15 }}>
                cough, sneeze, speak, sing or breathe
              </Text>
              . These particles range from larger respiratory droplets to
              smaller aerosols. It is important to practice respiratory
              etiquette, for example by coughing into a flexed elbow, and to
              stay home and self-isolate until you recover if you feel unwell.
            </Text>
          </View>
        </LinearGradient>

        <View
          style={{
            backgroundColor: "#eee",
            marginTop: 20,
            height: 3,
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 10,
          }}
        ></View>

        <View
          style={{
            marginTop: 17,
            marginLeft: 19,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            Prevention
          </Text>
        </View>
        <View>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Image
                source={require("../picture/mask1.jpeg")}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 70,
                }}
              />
              <Text
                style={{
                  marginLeft: 30,
                  fontSize: 16,
                  fontWeight: "bold",
                  marginTop: 8,
                  width: 100,
                }}
              >
                Wear a facemask
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
                marginLeft: -17,
              }}
            >
              <Image
                source={require("../picture/avoid.jpeg")}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 70,
                }}
              />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 17,
                  fontWeight: "bold",
                  marginTop: 8,
                  width: 100,
                }}
              >
                Avoid close contacts
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Image
                source={require("../picture/hand.jpeg")}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 70,
                }}
              />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 17,
                  fontWeight: "bold",
                  marginTop: 8,
                  width: 100,
                }}
              >
                Clean your hands
              </Text>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Image
                source={require("../picture/vaccine.webp")}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 70,
                }}
              />
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 17,
                  fontWeight: "bold",
                  marginTop: 8,
                  width: 100,
                }}
              >
                Get your Vaccine
              </Text>
            </View>
          </ScrollView>
        </View>

        <View
          style={{
            backgroundColor: "#eee",
            marginTop: 15,
            height: 3,
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 20,
          }}
        ></View>

        <View
          style={{
            marginTop: 20,
            marginLeft: 20,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            Symptoms
          </Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              marginTop: 15,
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
            <TouchableOpacity
              onPress={() => navigation.navigate("Lottie")}
              style={{
                alignItems: "center",
                marginLeft: 28,
              }}
            >
              <Image
                source={require("../picture/headache.jpeg")}
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 70,
                  opacity: 0.6,
                }}
              />
              <Entypo
                name="chevron-right"
                color="white"
                size={29}
                style={{
                  position: "absolute",
                  marginTop: 27,
                }}
              />
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 8,
                  color: "grey",
                  textDecorationLine: "underline",
                }}
              >
                See more
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View
          style={{
            backgroundColor: "#eee",
            marginTop: 15,
            height: 3,
            borderRadius: 10,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 10,
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 10,
            marginTop: 20,
            backgroundColor: "#0891b2",
            marginRight: 10,
            borderRadius: 5,
            paddingBottom: 27,
            paddingTop: 27,
            shadowColor: "black",
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 10,
            elevation: 7,
            marginBottom: 30,
          }}
        >
            {/* <LottieView
              source={require("../assets/check.json")}
              autoPlay
              loop
              style={{
                marginLeft: -80.8,
              }}
            /> */}
            <Image source={require('../picture/corona.jpeg')} style={{
              width: '50%',
              height: '175%',
              borderRadius: 5
            }} />
          <View
            style={{
              marginLeft: "6%",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 17,
                fontWeight: "bold",
                marginBottom: 10,
              }}
            >
              Do you own test!
            </Text>
            <Text
              style={{
                maxWidth: 150,
                fontSize: 14,
                color: "white",
                opacity: 0.8,
              }}
            >
              Follow the instructions to do your own test..
            </Text>
          </View>
        </View>
      </ScrollView>
      {/* <View
        style={{
          position: "absolute",
          marginTop: "190%",
          marginLeft: "80%",
        }}
      >
        <TouchableOpacity
          // onPress={onAdd}
          style={{
            // position: 'absolute',
            backgroundColor: "transparent",
            height: 60,
            width: 60,
            borderRadius: 40,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "#312e81",
          }}
        >
          <Text
            style={{
              color: "#312e81",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            +
          </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}
