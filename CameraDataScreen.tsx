import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

// Supposons que CameraData génère des données sous forme d'objet
const generateCameraData = () => {
  // Cette fonction simule la génération de données de caméra aléatoires
  return {
    id: Math.random().toString(36).substr(2, 9),
    temperature: Math.floor(Math.random() * 100) + 1,
    gas: Math.floor(Math.random() * 100),
    speed: Math.floor(Math.random() * 40) + 1,
    timestamp: new Date().toISOString(),
  };
};

const CameraDataScreen = () => {
  const [cameraData, setCameraData] = useState<any[]>([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newData = generateCameraData();
      setCameraData((prevData) => [...prevData, newData]);
    }, 7000); // Génère des données toutes les 5 secondes

    return () => clearInterval(intervalId);
  }, []);

  return (
    <View style={styles.screenContainer}>
      <Text style={styles.title}>Données de la Caméra</Text>
      <FlatList
        data={cameraData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.dataContainer}>
            <Text style={styles.dataText}>Température: {item.temperature} °C</Text>
            <Text style={styles.dataText}>Gaz: {item.gas}</Text>
            <Text style={styles.dataText}>Vitesse: {item.speed} km/h</Text>
            <Text style={styles.dataText}>Timestamp: {item.timestamp}</Text>
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
