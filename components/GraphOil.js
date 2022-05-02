import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import NavBar from './NavigaterBar';
import GraphItem from './GraphItem';

const GraphOil = () => {
  const dataPurePeanutOil = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    145,
  ]

  const dataPureSoybeanOil = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    58.48,
  ]

  const dataPureRiceBranOil = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    65.285,
  ]

  const dataReginedPalmOil = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    59.91,
  ]

  const dataInstantSunflowerOil = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    80,
  ]

  const dataInstantCoconutOil = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    202,
  ]

  return (
    <View style={styles.container}>
      <ScrollView>
        <GraphItem topic='น้ำมันถั่วลิสงบริสุทธิ์' data={dataPurePeanutOil} />
        <GraphItem topic='น้ำมันถั่วเหลืองบริสุทธิ์' data={dataPureSoybeanOil} />
        <GraphItem topic='น้ำมันรำข้าวบริสุทธิ์' data={dataPureRiceBranOil} />
        <GraphItem topic='น้ำมันปาล์มสำเร็จรูป' data={dataReginedPalmOil} />
        <GraphItem topic='น้ำมันทานตะวันสำเร็จรูป' data={dataInstantSunflowerOil} />
        <GraphItem topic='น้ำมันมะพร้าวสำเร็จรูป' data={dataInstantCoconutOil} />
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

export default GraphOil;