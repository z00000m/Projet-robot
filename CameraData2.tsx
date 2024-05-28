import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DataCamera = () => {
  const [temperature, setTemperature] = useState(0);
  const [gas, setGas] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.0.78:1880/data');
        const data = await response.json();
        setTemperature(data.temperature);
        setGas(data.gas);
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchData(); // Fetch data immediately on component mount

    const interval = setInterval(fetchData, 10000); // Fetch data every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

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
        <Text style={styles.value}>{} km/h</Text>
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
