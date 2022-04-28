import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, Linking } from 'react-native';
import Header from './Head';
import { NavigationContainer, CommonActions } from '@react-navigation/native';

import NavBar from './NavigaterBar'

const CardType = () => {
    return (
        <View style={styles.card_container}>
            
        </View>
    );
}

const GraphSelect = () => {
  return (
    <View style={styles.container}>
        <ScrollView style={styles.layoutScrollView}>
            
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
})

export default GraphSelect;