// DataCamera.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const getRandomTemperature = () => {
  return Math.floor(Math.random() * 40) + 1;
};

const getRandomGas = () => {
  return Math.floor(Math.random() * 40);
};

const getRandomSpeed = () => {
  return Math.floor(Math.random() * 40) + 1;
};

const DataCamera = () => {
  const [temperature, setTemperature] = useState(getRandomTemperature());
  const [gas, setGas] = useState(getRandomGas());
  const [speed, setSpeed] = useState(getRandomSpeed());

  useEffect(() => {
    const interval = setInterval(() => {
      setTemperature(getRandomTemperature());
      setGas(getRandomGas());
      setSpeed(getRandomSpeed());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.dataItem}>
        <Text style={styles.label}>Température:</Text>
        <Text style={styles.value}>{temperature} °C</Text>
      </View>
      <View style={styles.dataItem}>
        <Text style={styles.label}>CO2:</Text>
        <Text style={styles.value}>{gas} ppm</Text>
      </View>
      <View style={styles.dataItem}>
        <Text style={styles.label}>Vitesse:</Text>
        <Text style={styles.value}>{speed} km/h</Text>
      </View>
    </View>
  );
};

export const getData = () => {
  return {
    temperature: getRandomTemperature(),
    gas: getRandomGas(),
    speed: getRandomSpeed(),
  };
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
    marginBottom: 5,
    backgroundColor: '#f0f0f0',
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    marginRight: 5,
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    fontSize: 10,
    color: '#666',
  },
});

export default DataCamera;
