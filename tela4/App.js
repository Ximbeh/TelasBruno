import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TelaA from './screens/TelaA.js'
import TelaB from './screens/TelaB.js'
import TelaC from './screens/TelaC.js'
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tela A" component={TelaA} />
      <Tab.Screen name="Tela B" component={TelaB} />
      <Tab.Screen name="Tela C" component={TelaC} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer> 
      <MyTabs />
    </NavigationContainer>
  );
}
