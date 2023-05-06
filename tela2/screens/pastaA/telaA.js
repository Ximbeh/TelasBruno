import { StyleSheet, Text, View } from 'react-native';

function TelaA() {
  return (
    <View style={styles.container}>
      <Text>Tela A</Text>
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
});
