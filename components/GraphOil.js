import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

import NavBar from './NavigaterBar';
import GraphItem from './GraphItem';

const GraphOil = () => {
  const dataPurePeanutOil = [
    150,
    148,
    147,
    145,
  ]

  const dataPureSoybeanOil = [
    58.48,
    59.71,
    61.93,
    64.95
  ]

  const dataPureRiceBranOil = [
    65.285,
    65.43,
    67.52,
    68.63
  ]

  const dataReginedPalmOil = [
    59.91,
    60.45,
    63.38,
    65.37
  ]

  const dataInstantSunflowerOil = [
    80,
    82,
    83,
    85
  ]

  const dataInstantCoconutOil = [
    202,
    212,
    219.5,
    222.5
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