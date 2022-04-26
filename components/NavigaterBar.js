import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, Linking } from 'react-native';
import Header from './Head';
import { NavigationContainer, CommonActions, useNavigation } from '@react-navigation/native';
import { white } from 'react-native-paper/lib/typescript/styles/colors';

const NavigaterBar = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.navigaterbar}>
        <TouchableOpacity style={styles.navigatericonbox} onPress={() => navigation.navigate('News')}>
            <Image
            source={require('../assets/icons/news.png')}
            style={styles.navigatericon} tintColor='white'
            />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigatericonbox} onPress={() => navigation.navigate('Home')}>
            <Image
            source={require('../assets/icons/home.png')}
            style={styles.navigatericon} tintColor='white'
            />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigatericonbox} onPress={() => navigation.navigate('Graph')}>
            <Image
            source={require('../assets/icons/graph.png')}
            style={styles.navigatericon} tintColor='white'
            />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  
  navigaterbar: {
    backgroundColor: '#1E3774',
    borderRadius: 15,
    marginBottom: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  navigatericonbox: {
    padding: 5,
    borderRadius: 10,
    marginVertical: 8,
  },
  navigatericon: {
    width: 30,
    height: 30,
  },
})

export default NavigaterBar;