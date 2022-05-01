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
import Vegetable from './components/Vegetable';
import News from './components/News';
import GraphSelect from './components/GraphSelect';
import GraphMeat from './components/GraphMeat';
import GraphVege from './components/GraphVegetable';
import GraphFruit from './components/GraphFruit';
import GraphRice from './components/GraphRice';
import GraphSeaFood from './components/GraphSeaFood';
import GraphOil from './components/GraphOil';

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
        <Stack.Screen name="GraphSelect" component={GraphSelect} />
        <Stack.Screen name="GraphMeat" component={GraphMeat} />
        <Stack.Screen name="GraphSea" component={GraphSeaFood} />
        <Stack.Screen name="GraphVegetable" component={GraphVege} />
        <Stack.Screen name="GraphFruit" component={GraphFruit} />
        <Stack.Screen name="GraphRice" component={GraphRice} />
        <Stack.Screen name="GraphOil" component={GraphOil} />
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