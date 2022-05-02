import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import NavBar from './NavigaterBar';
import GraphItem from './GraphItem';

const GraphFruit = () => {
  const dataPapaya = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    30,
  ]

  const dataTangerine = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    51.36,
  ]

  const dataWatermelon = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    22.64,
  ]

  const dataBanana = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    41.82,
  ]

  const dataGuavaKimju = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    35,
  ]

  const dataSavoeyGreenMango = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    44.09,
  ]

  const dataPomelo = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    100,
  ]

  const dataRambutan = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    21.51,
  ]

  const dataMangosteen = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    21.44,
  ]

  const dataPineappleSriracha = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    28,
  ]

  return (
    <View style={styles.container}>
      <ScrollView>
        <GraphItem topic='ผักคะน้า' data={dataPapaya} />
        <GraphItem topic='ผักบุ้งจีน' data={dataTangerine} />
        <GraphItem topic='ผักกวางตุ้ง' data={dataWatermelon} />
        <GraphItem topic='ผักกาดหอม' data={dataBanana} />
        <GraphItem topic='กะหล่ำปลี' data={dataGuavaKimju} />
        <GraphItem topic='มะระจีน' data={dataSavoeyGreenMango} />
        <GraphItem topic='มะเขือเทศ' data={dataPomelo} />
        <GraphItem topic='แตงกวา' data={dataRambutan} />
        <GraphItem topic='หน่อไม้ฝรั่ง' data={dataMangosteen} />
        <GraphItem topic='มะนาว' data={dataPineappleSriracha} />
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