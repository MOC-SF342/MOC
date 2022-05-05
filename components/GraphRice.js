import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import NavBar from './NavigaterBar';
import GraphItem from './GraphItem';

const GraphRice = () => {
  const dataWhiteRice = [
    1431.8,
    1431.6,
    1428.8,
    1421.8,
  ]

  const dataWhiteGrits = [
    1188.2,
    1180.3,
    1179.8,
    1177.28,
  ]

  const dataStickyRice = [
    2042.15,
    2022.15,
    2111.15,
    2131.15
  ]

  const dataParboiledRice = [
    1260.67,
    1265.67,
    1269.67,
    1259.67,
  ]

  const dataJasmineRice = [
    2565.82,
    2566.82,
    2570.82,
    2560.82,
  ]

  const dataJasmineGrits = [
    1268.36,
    1266.36,
    1264.36,
    1258.36,
  ]

  const dataFragrantRice = [
    1920.36,
    1920.36,
    1918.36,
    1928.36
  ]

  const dataWhiteRiceBran = [
    1072.57,
    1067.57,
    1075.57,
    1065.57,
  ]

  const dataMilledRiceFlour = [
    721.8,
    718.8,
    715.8,
    711.8,
  ]

  const dataCKhaosanChao = [
    3000,
    2996,
    970,
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