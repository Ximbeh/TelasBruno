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
      <Drawer.Navigator initialRouteName="Tela A">
        <Drawer.Screen name="Tela A" component={TelaA} />
        <Drawer.Screen name="Tela B" component={TelaB} />
        <Drawer.Screen name="Tela C" component={TelaC} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
