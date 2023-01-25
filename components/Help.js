import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons, AntDesign, Entypo } from "@expo/vector-icons";

export default function Help() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          backgroundColor: "#312e81",
          paddingBottom: 20,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        }}
      >
        <View
          style={{
            marginLeft: 15,
            marginTop: 50,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              color: "#eee",
              fontWeight: "bold",
              opacity: 1,
            }}
          >
            Are you feeling sick?
          </Text>
          <Text
            style={{
              color: "#eee",
              opacity: 0.7,
              marginTop: 10,
              // width: 250,
              fontSize: 15,
            }}
          >
            If you feel sick with any of covid 19 symptomes please call or SMS
            us <Text style={{fontSize: 16, fontWeight: 'bold', color: 'red'}}>1919</Text> immediatly for help....
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={{
                flexDirection: "row",
                backgroundColor: "#e11d48",
                borderRadius: 30,
                height: 40,
                width: 130,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="call" size={24} color="white" />
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  marginLeft: 8,
                  fontSize: 17,
                }}
              >
                Call Now
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: "row",
                backgroundColor: "#06b6d4",
                borderRadius: 30,
                height: 40,
                width: 130,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 14,
              }}
            >
              <AntDesign name="message1" size={24} color="white" />
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  marginLeft: 8,
                  fontSize: 17,
                }}
              >
                Send SMS
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{
          marginTop: 20,
          marginLeft: 20
        }}>
          <Text style={{
            fontSize: 15,
            color: 'white',
            fontWeight: 'bold'
          }}>Get in Touch</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            marginTop: 30,
            marginLeft: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            RESOURCES
          </Text>
          <View
            style={{
              backgroundColor: "#eee",
              height: 2,
              width: "56%",
              marginRight: 10,
              borderRadius: 10,
            }}
          ></View>
        </View>
        <View
          style={{
            marginTop: 30,
            marginLeft: 10,
          }}
        >
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.cdc.gov/coronavirus/2019-ncov/communication/index.html"
              )
            }
            style={[style.card, { borderLeftColor: "#f43f5e" }]}
          >
            <Text style={style.cardText}>Communication</Text>
            <Entypo name="chevron-right" color="black" size={23} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            marginLeft: 10,
          }}
        >
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.cdc.gov/coronavirus/2019-ncov/global-covid-19/index.html"
              )
            }
            style={[style.card, { borderLeftColor: "#f43f5e" }]}
          >
            <Text style={style.cardText}>Global Covid-19</Text>
            <Entypo name="chevron-right" color="black" size={23} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            marginLeft: 10,
          }}
        >
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.cdc.gov/coronavirus/2019-ncov/communication/guidance.html"
              )
            }
            style={[style.card, { borderLeftColor: "#f43f5e" }]}
          >
            <Text style={style.cardText}>Guidness</Text>
            <Entypo name="chevron-right" color="black" size={23} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            marginLeft: 10,
          }}
        >
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.cdc.gov/coronavirus/2019-ncov/lab/index.html"
              )
            }
            style={[style.card, { borderLeftColor: "#f43f5e" }]}
          >
            <Text style={style.cardText}>Labotaries</Text>
            <Entypo name="chevron-right" color="black" size={23} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            marginLeft: 10,
          }}
        >
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.cdc.gov/coronavirus/2019-ncov/cases-updates/index.html"
              )
            }
            style={[style.card, { borderLeftColor: "#f43f5e" }]}
          >
            <Text style={style.cardText}>Data {"&"} Surveillance</Text>
            <Entypo name="chevron-right" color="black" size={23} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 20,
            marginLeft: 10,
          }}
        >
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.cdc.gov/coronavirus/2019-ncov/cdcresponse/laws-regulations.html"
              )
            }
            style={[style.card, { borderLeftColor: "#f43f5e" }]}
          >
            <Text style={style.cardText}>Laws {"&"} Regulations</Text>
            <Entypo name="chevron-right" color="black" size={23} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  card: {
    backgroundColor: "#f1f5f9",
    width: "95%",
    height: 70,
    borderRadius: 8,
    padding: 10,
    marginBottom: 13,
    borderLeftWidth: 12,
    borderLeftColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    elevation: 5,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardText: {
    color: "black",
    fontWeight: "600",
    fontSize: 17,
  },
});
