// CameraDataScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { getData } from './CameraData'; // Import the getData function

type CameraData = {
  temperature: number;
  gas: number;
  speed: number;
};

const CameraDataScreen = () => {
  const [cameraData, setCameraData] = useState<CameraData[]>([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newData = getData();
      setCameraData((prevData) => [...prevData, newData]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}> Données de télémetries </Text>
      <FlatList
        data={cameraData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.dataContainer}>
            <Text style={styles.dataText}>Température: {item.temperature} °C</Text>
            <Text style={styles.dataText}>CO2: {item.gas}</Text>
            <Text style={styles.dataText}>Vitesse: {item.speed} km/h</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    textShadowColor: '#999',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
  },
  dataContainer: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  dataText: {
    fontSize: 16,
    marginBottom: 4,
  },
});

export default CameraDataScreen;
