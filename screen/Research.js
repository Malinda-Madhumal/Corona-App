import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Keyboard,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

export default function Research() {
  const [countryImg, setCountryImg] = useState();
  const [apiData, setApiData] = useState();
  const [search, setSearch] = useState("");
  const [stats, setStats] = useState({});
  const [country, setCountry] = useState("Global");

  
  async function fectchData() {
    let getData = await fetch("https://api.covid19api.com/summary");
    let res = await getData.json();
    setApiData(res);
    setStats({
      ActiveCases: res.Global.TotalConfirmed,
      NewCases: res.Global.NewConfirmed,
      Deaths: res.Global.NewDeaths,
      Recovered: res.Global.NewRecovered,
      Date: res.Global.Date,
    });
    setCountry("Global");
  }
  
  useEffect(() => {
    fectchData();
  }, []);

  function showResults() {
    apiData.Countries.map((item, index) => {
      const { Country, CountryCode } = item;
      if (search == Country) {
        setStats({
          ActiveCases: item.TotalConfirmed,
          NewCases: item.NewConfirmed,
          Deaths: item.NewDeaths,
          Recovered: item.NewRecovered,
          Date: item.Date,
        });
        setCountry(search);
        setCountryImg(CountryCode.toLowerCase());
      }
    });
    Keyboard.dismiss();
    setSearch("");
  }

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: "#312e81",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            paddingBottom: 30,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginTop: 50,
              alignItems: "center",
              marginLeft: 20,
            }}
          >
            <TextInput
              value={search}
              onChangeText={(text) => setSearch(text)}
              placeholder="Search country..."
              style={{
                borderRadius: 10,
                paddingBottom: 10,
                paddingTop: 10,
                backgroundColor: "white",
                width: "80%",
                paddingLeft: 10,
                shadowColor: "black",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 1,
                elevation: 5,
              }}
            />
            <Feather
              onPress={() => showResults()}
              name="search"
              size={24}
              color="black"
              style={{
                backgroundColor: "white",
                marginLeft: 5,
                borderRadius: 50,
                width: 40,
                height: 40,
                shadowColor: "black",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 1,
                elevation: 5,
                paddingLeft: 7,
                paddingTop: 7,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: "white",
              marginTop: 50,
              paddingBottom: 10,
              paddingTop: 10,
              flexDirection: "row",
              borderRadius: 10,
              marginRight: 20,
              marginLeft: 20,
              alignItems: "center",
              justifyContent: "center",
              shadowColor: "black",
              shadowOffset: { width: 0, height: 1 },
              shadowOpacity: 1,
              elevation: 5,
            }}
          >
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 40,
                marginRight: 10,
              }}
              source={
                country == "Global"
                  ? require("../picture/global.jpeg")
                  : { uri: `https://countryflagsapi.com/png/${countryImg}` }
              }
            />
            <Text
              style={{
                color: country == "Global" ? "red" : "black",
                fontSize: 19,
                fontWeight: "bold",
              }}
            >
              {country}
            </Text>
          </View>
        </View>
        <View style={style.cards}>
          <View style={[style.card, { borderLeftColor: "purple" }]}>
            <Text style={style.cardText}>Active Case</Text>
            <Text style={[style.text, { color: "purple" }]}>
              {stats.ActiveCases}
            </Text>
          </View>
          <View style={[style.card, { borderLeftColor: "#047857" }]}>
            <Text style={style.cardText}>New Case</Text>
            <Text style={[style.text, { color: "#047857" }]}>
              {stats.NewCases}
            </Text>
          </View>
          <View style={[style.card, { borderLeftColor: "#e11d48" }]}>
            <Text style={style.cardText}>Deaths</Text>
            <Text style={[style.text, { color: "#e11d48" }]}>
              {stats.Deaths}
            </Text>
          </View>
          <View style={[style.card, { borderLeftColor: "#0ea5e9" }]}>
            <Text style={style.cardText}>Recoverd</Text>
            <Text style={[style.text, { color: "#0ea5e9" }]}>
              {stats.Recovered}
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "white",
            paddingBottom: 10,
            paddingTop: 10,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 60,
            marginRight: 60,
            borderRadius: 10,
            shadowColor: "black",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 1,
            elevation: 5,
            borderLeftColor: "#ec4899",
            borderLeftWidth: 12,
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            {stats.Date}
          </Text>
        </View>
        <View
          style={{
            marginTop: 15,
            borderRadius: 15,
            marginBottom: 6,
            marginLeft: 10,
            marginRight: 10
          }}
        >
          {/* <LottieView source={require('../assets/covid1.json')} autoPlay loop style={{height: 260}} /> */}
          <Image source={require('../picture/vaccine.webp')} style={{
            height: 180,
            width: '100%',
            borderRadius: 10
          }} />
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  cards: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    elevation: 5,
  },
  card: {
    backgroundColor: "white",
    width: 160,
    height: 100,
    padding: 10,
    marginBottom: 13,
    borderLeftWidth: 15,
    borderLeftColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    elevation: 5,
    borderRadius: 15,
  },
  cardText: {
    color: "black",
    fontWeight: "600",
    fontSize: 14,
  },
  text: {
    fontSize: 17,
    marginTop: 20,
    fontWeight: "700",
  },
});
