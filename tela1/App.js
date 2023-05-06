
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import TelaB from './screens/TelaB.js';
import TelaC from './screens/TelaC.js';

export default function App() {
  const handlePress = () => {
    console.log('Botão pressionado!');
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaA />} />
        <Route path="/tela-b" element={<TelaB />} />
        <Route path="/tela-c" element={<TelaC />} />
      </Routes>
    </Router>
  );
}

function PaginaA() {
  const handlePress = () => {
    console.log('Botão pressionado!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela A</Text>
      <Link to="/tela-b">
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Ir para a Tela B</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
