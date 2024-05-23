// DataCamera.tsx
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Fonction pour obtenir une température aléatoire entre 1 et 40 degrés Celsius
const getRandomTemperature = () => {
  return Math.floor(Math.random() * 100) + 1;
};

// Fonction pour obtenir un niveau de gaz aléatoire entre 0 et 100
const getRandomGas = () => {
  return Math.floor(Math.random() * 100);
};

// Fonction pour obtenir une vitesse aléatoire entre 1 et 100 km/h
const getRandomSpeed = () => {
  return Math.floor(Math.random() * 40) + 1;
};

const DataCamera = () => {
  // Utilisation de useState pour gérer l'état local des valeurs
  const [temperature, setTemperature] = useState(getRandomTemperature());
  const [gas, setGas] = useState(getRandomGas());
  const [speed, setSpeed] = useState(getRandomSpeed());

  // Utilisation de useEffect pour mettre à jour les valeurs à intervalles réguliers
  useEffect(() => {
    const interval = setInterval(() => {
      setTemperature(getRandomTemperature());
      setGas(getRandomGas());
      setSpeed(getRandomSpeed());
    }, 7000); // Mettre à jour toutes les 7 secondes

    // Nettoyage de l'intervalle lorsque le composant est démonté
    return () => clearInterval(interval);
  }, []); // Le tableau vide comme deuxième argument assure que cela ne se produit qu'une seule fois après le rendu initial

  return (
    <View style={styles.container}>
      {/* Cadre pour afficher la température */}
      <View style={styles.dataItem}>
        <Text style={styles.label}>Temp:</Text>
        <Text style={styles.value}>{temperature} °C</Text>
      </View>
      {/* Cadre pour afficher le niveau de gaz */}
      <View style={styles.dataItem}>
        <Text style={styles.label}>Gaz:</Text>
        <Text style={styles.value}>{gas}</Text>
      </View>
      {/* Cadre pour afficher la vitesse */}
      <View style={styles.dataItem}>
        <Text style={styles.label}>Vitesse:</Text>
        <Text style={styles.value}>{speed} km/h</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  dataItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5, // Réduire l'espacement entre les éléments
    backgroundColor: '#f0f0f0',
    paddingVertical: 2, // Réduire l'espacement vertical
    paddingHorizontal: 5, // Réduire l'espacement horizontal
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    marginRight: 5,
    fontSize: 10, // Réduire la taille de police
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    fontSize: 10, // Réduire la taille de police
    color: '#666',
  },
});

export default DataCamera;
