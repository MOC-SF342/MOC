import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import NavBar from './NavigaterBar';
import GraphItem from './GraphItem';

const GraphSeaFood = () => {
  const dataWhiteShrimp = [
    260.97,
    263.97,
    262.36,
    270.97,
  ]

  const dataSquid = [
    226,
    234,
    242,
    266,
  ]

  const dataCockle = [
    142,
    130,
    163,
    200,
  ]

  const dataCatFish = [
    66.22,
    68.51,
    65.81,
    90,
  ]

  const dataPomegranateFish = [
    79.84,
    80.67,
    80.95,
    99.35,
  ]

  const dataLobster = [
    500,
    450,
    600,
    700,
  ]

  const dataMackerel = [
    89.21,
    89.92,
    93.58,
    100,
  ]

  const dataSnakehead = [
    154,
    155.67,
    150,
    170,
  ]

  const dataClam = [
    61.51,
    57.13,
    54,
    51.38,
  ]

  const dataStripedCatFish = [
    50.4,
    49.8,
    59.72,
    66.12,
  ]

  return (
    <View style={styles.container}>
      <ScrollView>
        <GraphItem topic='กุ้งขาว' data={dataWhiteShrimp} />
        <GraphItem topic='ปลาหมึก' data={dataSquid} />
        <GraphItem topic='หอยแครง' data={dataCockle} />
        <GraphItem topic='ปลาดุก' data={dataCatFish} />
        <GraphItem topic='ปลาทับทิม' data={dataPomegranateFish} />
        <GraphItem topic='กุ้งก้ามกราม' data={dataLobster} />
        <GraphItem topic='ปลาทูสด' data={dataMackerel} />
        <GraphItem topic='ปลาช่อน' data={dataSnakehead} />
        <GraphItem topic='หอยลาย' data={dataClam} />
        <GraphItem topic='ปลาสวาย' data={dataStripedCatFish} />
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

export default GraphSeaFood;