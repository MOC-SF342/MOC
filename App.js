import React from 'react';
import { StyleSheet,Text,View } from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Header from './components/Head';
import Home from './components/Home';

import Rice from './components/Rice'; 
import Meat from './components/Meat';
import Fruit from './components/Fruit';
import SeaFood from './components/SeaFood';
import Oil from './components/Oil';
import Vegetable from './components/Vegetable'
import News from './components/News';
import Graph from './components/Graph'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ header: () => null }}
        />
        <Stack.Screen name="Meat" component={Meat} />
        <Stack.Screen name="Rice" component={Rice} />
        <Stack.Screen name="Fruit" component={Fruit} />
        <Stack.Screen name="Oil" component={Oil} />
        <Stack.Screen name="Vegetable" component={Vegetable} />
        <Stack.Screen name="SeaFood" component={SeaFood} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="Graph" component={Graph} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
export default App;