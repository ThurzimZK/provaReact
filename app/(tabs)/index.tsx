import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tela2 from './busca'

type RootStackParamList = {
  Tela1: undefined;
  Tela2: undefined;
  Tela3: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tela1 = () => {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Veja como está o tempo ao redor do mundo 🌎</Text>
        <Text style={styles.subtitle}>Comece agora gratuitamente</Text>
        <TouchableOpacity 
          style={styles.button} 
        >
          <Text style={styles.buttonText}>Vamos lá</Text>
        </TouchableOpacity>
        <Text style={styles.loginText}>Já tem uma conta? <Text style={styles.link}>Log in</Text></Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6C63FF',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6C63FF',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  loginText: {
    marginTop: 10,
  },
  link: {
    color: '#6C63FF',
    fontWeight: 'bold',
  },
});

export default Tela1;
