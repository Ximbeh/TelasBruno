import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import TelaA from './screens/TelaA.js';
import TelaB from './screens/TelaB.js';
import TelaC from './screens/TelaC.js';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="TelaA">
        <Drawer.Screen name="TelaA" component={TelaA} />
        <Drawer.Screen name="TelaB" component={TelaB} />
        <Drawer.Screen name="TelaC" component={TelaC} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
