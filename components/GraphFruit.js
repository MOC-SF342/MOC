import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import NavBar from './NavigaterBar';
import GraphItem from './GraphItem';

const GraphFruit = () => {
  const dataPapaya = [
    25,
    27,
    30,
    25,
  ]

  const dataTangerine = [
    49.31,
    49.56,
    46.36,
    51.36,
  ]

  const dataWatermelon = [
    20.64,
    19.64,
    20.64,
    22.64,
  ]

  const dataBanana = [
    31.82,
    35.82,
    37.82,
    41.82,
  ]

  const dataGuavaKimju = [
    32,
    35,
    33,
    30,
  ]

  const dataSavoeyGreenMango = [
    39.09,
    40.09,
    41.09,
    44.09,
  ]

  const dataPomelo = [
    90,
    93,
    98,
    100,
  ]

  const dataRambutan = [
    20,
    19.50,
    21.51,
    18.49
  ]

  const dataMangosteen = [
    19,
    18.08,
    19.3,
    21.44,
  ]

  const dataPineappleSriracha = [
    28,
    25,
    24,
    23,
  ]

  return (
    <View style={styles.container}>
      <ScrollView>
        <GraphItem topic='มะละกอ' data={dataPapaya} />
        <GraphItem topic='ส้มเขียวหวาน' data={dataTangerine} />
        <GraphItem topic='แตงโม' data={dataWatermelon} />
        <GraphItem topic='กล้วยน้ำว้า' data={dataBanana} />
        <GraphItem topic='ฝรั่งกิมจู' data={dataGuavaKimju} />
        <GraphItem topic='มะม่วงเขียวเสวย' data={dataSavoeyGreenMango} />
        <GraphItem topic='ส้มโอ' data={dataPomelo} />
        <GraphItem topic='เงาะโรงเรียน' data={dataRambutan} />
        <GraphItem topic='มังคุด' data={dataMangosteen} />
        <GraphItem topic='สับปะรด ศรีราชา' data={dataPineappleSriracha} />
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

export default GraphFruit;