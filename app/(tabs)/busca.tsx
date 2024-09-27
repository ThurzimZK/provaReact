import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { Ionicons } from '@expo/vector-icons'; 

const Tela3 = () => {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState(null);

  const fetchWeather = async () => {
    if (!city) {
      Alert.alert('Por favor, insira o nome da cidade');
      return;
    }

    try {
      const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=2e51e88bf29e4490b5d232134242709&q=${city}`);
      const temp = response.data.current.temp_c; 
      setTemperature(temp);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível obter a temperatura. Verifique o nome da cidade.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Buscar Clima</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome da cidade"
        value={city}
        onChangeText={setCity}
      />
      <TouchableOpacity style={styles.searchButton} onPress={fetchWeather}>
        <Icon name="search" size={20} color="#FFFFFF" />
        <Text style={styles.searchButtonText}> Buscar</Text>
      </TouchableOpacity>

      <View style={styles.weatherCard}>
        <Ionicons name="rainy-outline" size={80} color="white" />
        <Text style={styles.city}>{city || 'Cidade'}</Text>
        <Text style={styles.temperature}>{temperature !== null ? `${temperature}°C` : 'Temperatura'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchButton: {
    backgroundColor: '#6C63FF',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row',
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  weatherCard: {
    backgroundColor: '#6C63FF',
    alignItems: 'center',
    padding: 20,
    borderRadius: 20,
  },
  city: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  temperature: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
  },
  weatherStatus: {
    fontSize: 16,
    color: 'white',
  },
});

export default Tela3;
