import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import telaA from './screens/TelaA.js'
import telaB from './screens/TelaB.js'
import telaC from './screens/TelaC.js'

export default function App() {
  return (
   

    <NavigationContainer></NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
