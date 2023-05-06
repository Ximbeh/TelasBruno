import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigate } from 'react-router-dom';

export default function TelaC() {
  const navigate = useNavigate();

  const handlePress = () => {
    console.log('Botão pressionado!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela C</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigate('/')}>
        <Text style={styles.buttonText}>Voltar para a Tela A</Text>
      </TouchableOpacity>
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
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
