import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router'; 

const Tela2 = () => {


  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Olá User,</Text>
      <Text style={styles.subtitle}>Descubra o clima</Text>
      <TouchableOpacity 
        style={styles.searchButton} 
      >
        <Text style={styles.searchButtonText}>Pesquise por uma cidade</Text>
      </TouchableOpacity>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardText}>País</Text>
          <Text style={styles.cardText}>Cidade</Text>
          <Text style={styles.cardText}>x°C</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardText}>País</Text>
          <Text style={styles.cardText}>Cidade</Text>
          <Text style={styles.cardText}>x°C</Text>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardText}>País</Text>
          <Text style={styles.cardText}>Cidade</Text>
          <Text style={styles.cardText}>x°C</Text>
        </View>
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  searchButton: {
    backgroundColor: '#6C63FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cardContainer: {
    flex: 1,
  },
  card: {
    backgroundColor: '#6C63FF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Tela2;
