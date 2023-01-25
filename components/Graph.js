import { View, Text } from "react-native";
import React from "react";
import { LineChart, ProgressChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const datas = {
    labels: ["Active", "New", "Deaths", "Recovered"], // optional
    data: [0.8, 0.6, 0.4, 0]
  };

const data = {
  labels: ["Active Cases", "New Cases", "Deaths", "Recovered"],
  datasets: [
    {
      data: [88, 57, 36, 0],
      color: (opacity = 1) => `rgba(255,255,255, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  // legend: ["Rainy Days"], // optional
};

const chartConfig = {
  backgroundGradientFrom: "#0369a1",
  backgroundGradientTo: "#0369a1",
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 5, // optional, default 3
  barPercentage: 1,
  //   useShadowColorFromDataset: false, // optional
};
const chartConfigs = {
  backgroundGradientFrom: "#14b8a6",
  backgroundGradientTo: "white",
  color: (opacity = 1) => `rgba(8, 145, 178, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 1,
  //   useShadowColorFromDataset: false, // optional
};

export default function Graph() {
  return (
    <View
      style={{
        // marginTop: 50,
        flex: 1,
        backgroundColor: "white",
      }}
    >
      {/* <View
        style={{
          marginTop: 20,
          marginRight: 10,
          marginLeft: 10,
          marginBottom: 40
        }}
      >
        <LineChart
          data={data}
          width={340}
          height={260}
          chartConfig={chartConfig}
          bezier
          //   verticalLabelRotation}
          horizontalLabelRotation={10}
          xLabelsOffset={10}
          // yLabelsOffset={10}
        />
      </View> */}
      <ProgressChart
        data={datas}
        width={screenWidth}
        height={220}
        strokeWidth={7}
        radius={30}
        chartConfig={chartConfigs}
        hideLegend={false}
      />
    </View>
  );
}
