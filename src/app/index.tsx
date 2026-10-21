import React from 'react';
import { StyleSheet, Text, View, Image, Linking, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Título do Portfólio */}
      <Text style={styles.title}>PORTFÓLIO</Text>
      {/* Nome */}
      <Text style={styles.name}>Henrique</Text>

      {/* Foto de Perfil */}
      <Image 
        source={{ uri: 'https://avatars.githubusercontent.com/u/198377848?v=4' }} 
        style={styles.avatar} 
      />

      {/* Escolaridade */}
      <Text style={styles.schooling}>Escolaridade: Estudante de Desenvolvimento de Sistemas</Text>

      {/* Botão do GitHub */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => Linking.openURL('https://github.com/HenriqueAlth09')}
      >
        <Text style={styles.buttonText}>GitHub</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,
    letterSpacing: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#007bff',
    marginBottom: 10,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#fff',
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  schooling: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#24292e',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});