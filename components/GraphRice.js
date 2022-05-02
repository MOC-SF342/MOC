import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import NavBar from './NavigaterBar';
import GraphItem from './GraphItem';

const GraphRice = () => {
  const dataWhiteRice = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    1421.8,
  ]

  const dataWhiteGrits = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    1177.28,
  ]

  const dataStickyRice = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    2111.15,
  ]

  const dataParboiledRice = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    1259.67,
  ]

  const dataJasmineRice = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    2560.82,
  ]

  const dataJasmineGrits = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    1258.36,
  ]

  const dataFragrantRice = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    1918.36,
  ]

  const dataWhiteRiceBran = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    1065.57,
  ]

  const dataMilledRiceFlour = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    711.8,
  ]

  const dataCKhaosanChao = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    2900,
  ]

  return (
    <View style={styles.container}>
      <ScrollView>
        <GraphItem topic='ข้าวขาว 100%' data={dataWhiteRice} />
        <GraphItem topic='ปลายข้าวขาว' data={dataWhiteGrits} />
        <GraphItem topic='ข้าวสารเหนียว' data={dataStickyRice} />
        <GraphItem topic='ข้าวนึ่ง 100%' data={dataParboiledRice} />
        <GraphItem topic='ข้าวหอมมะลิ' data={dataJasmineRice} />
        <GraphItem topic='ปลายข้าวหอมมะลิ' data={dataJasmineGrits} />
        <GraphItem topic='ข้าวหอมปทุมธานี' data={dataFragrantRice} />
        <GraphItem topic='รำข้าวขาว' data={dataWhiteRiceBran} />
        <GraphItem topic='แป้งข้าวเจ้าโม่น้ำ' data={dataMilledRiceFlour} />
        <GraphItem topic='ข้าวสารเจ้า' data={dataCKhaosanChao} />
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

export default GraphRice;