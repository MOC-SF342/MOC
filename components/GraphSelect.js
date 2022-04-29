import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, Linking } from 'react-native';
import { NavigationContainer, CommonActions, useNavigation } from '@react-navigation/native';

import NavBar from './NavigaterBar'

const CardType = (props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.card_elements} onPress={() => navigation.navigate(props.navTo)} >
                <Image style={styles.card_img} source={props.pathImg}/>
                <Text style={styles.card_text}>{props.text}</Text>
            </TouchableOpacity>
        </View>
    );
}

const GraphSelect = () => {
  return (
    <View style={styles.container}>
        <ScrollView style={styles.layoutScrollView}>
            <CardType pathImg={require('../assets/image/pig.jpg')} text='เนื้อสัตว์' navTo='GraphMeat'/>
            <CardType pathImg={require('../assets/image/ricebg.jpg')} text='ข้าว'/>
            <CardType pathImg={require('../assets/image/ผลไม้.jpg')} text='ผลไม้'/>
            <CardType pathImg={require('../assets/image/ผัก.jpg')} text='ผัก'/>
            <CardType pathImg={require('../assets/image/อาหารทะเล.jpg')} text='อาหารทะเล'/>
            <CardType pathImg={require('../assets/image/น้ำมัน.jpg')} text='น้ำมัน'/>
        </ScrollView>

        <NavBar/>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  card_elements: {
      width: '80%',
      height: 200,
      backgroundColor: 'rgba(0,0,0,0.085)',
      marginLeft: 'auto',
      marginRight: 'auto',
      borderRadius: 25,
      marginTop: '5%',
  },
  card_img: {
    height: 160,
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  card_text: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 'auto',    
    fontSize: 22,
  }
})

export default GraphSelect;