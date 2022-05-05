import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import NavBar from './NavigaterBar';
import GraphItem from './GraphItem';

const GraphVege = () => {
  const datakale = [
    31,
    31.72,
    31.2,
    30.67,
  ]

  const dataglory = [
    26,
    25.73,
    26.80,
    27.83,
  ]

  const datacantonese = [
    23,
    22.7,
    24.3,
    23,
  ]

  const datalettuce = [
    36.18,
    36.07,
    35.6,
    35.17,
  ]

  const datacabbage = [
    20,
    22,
    24,
    25,
  ]

  const datagourd_chinese = [
    27,
    29,
    30,
    32,
  ]

  const datatomato = [
    21,
    25.23,
    27.32,
    30.5,
  ]

  const datacucumber = [
    19.67,
    20.22,
    23,
    24.67,
  ]

  const dataasparagus = [
    138.67,
    151.46,
    165.90,
    168.67,
  ]

  const datalemon = [
    6.12,
    6.04,
    6.12,
    6.62,
  ]

  return (
    <View style={styles.container}>
      <ScrollView>
        <GraphItem topic='ผักคะน้า' data={datakale} />
        <GraphItem topic='ผักบุ้งจีน' data={dataglory} />
        <GraphItem topic='ผักกวางตุ้ง' data={datacantonese} />
        <GraphItem topic='ผักกาดหอม' data={datalettuce} />
        <GraphItem topic='กะหล่ำปลี' data={datacabbage} />
        <GraphItem topic='มะระจีน' data={datagourd_chinese} />
        <GraphItem topic='มะเขือเทศ' data={datatomato} />
        <GraphItem topic='แตงกวา' data={datacucumber} />
        <GraphItem topic='หน่อไม้ฝรั่ง' data={dataasparagus} />
        <GraphItem topic='มะนาว' data={datalemon} />
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

export default GraphVege;