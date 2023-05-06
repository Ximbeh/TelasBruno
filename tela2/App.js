import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TelaA } from './screens/pastaA/telaA.js';
import { TelaB } from './screens/pastaB/telaB.js';
import { TelaC } from './screens/pastaC/telaC.js';


function TelaAA() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TelaA/>
    </View>
  );
}

function TelaBB() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TelaB/>
    </View>
  );
}


function TelaCC() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TelaC/>
    </View>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Tela A" component={TelaAA} />
      <Drawer.Screen name="Tela B" component={TelaBB} />
      <Drawer.Screen name="Tela C" component={TelaCC} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
