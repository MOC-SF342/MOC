import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import NavBar from './NavigaterBar';
import GraphItem from './GraphItem';

const GraphMeat = () => {
  const datapork = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    198.7,
  ]

  const datachicken = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    70,
  ]

  const dataeggd = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    4.82,
  ]

  const dataeggc = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    4.62,
  ]

  const datacow = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    260,
  ]

  return (
    <View style={styles.container}>
      <ScrollView>
        <GraphItem topic='หมู' data={datapork} />
        <GraphItem topic='ไก่' data={datachicken} />
        <GraphItem topic='ไข่เป็ด' data={dataeggd} />
        <GraphItem topic='ไข่ไก่' data={dataeggc} />
        <GraphItem topic='เนื้อโค' data={datacow} />
      </ScrollView>
      <View style={styles.nav}>
        <NavBar/>
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
      height: '89.8%',
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

export default GraphMeat;