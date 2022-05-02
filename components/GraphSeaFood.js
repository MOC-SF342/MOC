import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import NavBar from './NavigaterBar';
import GraphItem from './GraphItem';

const GraphSeaFood = () => {
  const dataWhiteShrimp = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    270.97,
  ]

  const dataSquid = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    266,
  ]

  const dataCockle = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    200,
  ]

  const dataCatFish = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    90,
  ]

  const dataPomegranateFish = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    99.35,
  ]

  const dataLobster = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    700,
  ]

  const dataMackerel = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    100,
  ]

  const dataSnakehead = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    170,
  ]

  const dataClam = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    61.51,
  ]

  const dataStripedCatFish = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
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