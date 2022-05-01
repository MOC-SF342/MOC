import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import NavBar from './NavigaterBar';
import GraphItem from './GraphItem';

const GraphVege = () => {
  const datakale = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    30.67,
  ]

  const dataglory = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    27.83,
  ]

  const datacantonese = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    23,
  ]

  const datalettuce = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    35.17,
  ]

  const datacabbage = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    25,
  ]

  const datagourd_chinese = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    32,
  ]

  const datatomato = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    30.5,
  ]

  const datacucumber = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    24.67,
  ]

  const dataasparagus = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    168.67,
  ]

  const datalemon = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
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