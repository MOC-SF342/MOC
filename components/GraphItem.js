import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from 'react-native';
import NavBar from './NavigaterBar';

const GraphItem = (props) => {
  const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#fb8c00",
    backgroundGradientTo: "#ffa726",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  };

  return (
    <View style={styles.chartContainer}>
        <View style={styles.topic}>
            <Text style={styles.topicText}>{props.topic}</Text>
        </View>
        <View style={styles.chart}>
            <LineChart
                data={{
                labels: ["January", "February", "March", "April", "May", "June"],// props.labels
                datasets: [
                    {
                        data: props.data
                    }
                ]
                }}
                width={Dimensions.get("window").width - 20} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={
                    chartConfig
                }
                bezier
                style={{
                marginVertical: 8,
                borderRadius: 16,
                }}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 8,
      // backgroundColor: 'red',
    },
    chartContainer: {
    //   height: '89.8%',
    },
    topic: {
      alignItems: 'flex-start',
    },
    topicText: {
      color: 'black',
      fontSize: 30,
      marginLeft: 20,
      // paddingTop: 10,
      fontWeight: "bold",
      textAlign: 'left'
    },
    chart: {
      alignItems: 'center',
    },
    nav: {
      flexDirection: 'column',
    },
})

export default GraphItem;