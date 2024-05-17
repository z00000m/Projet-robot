import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CameraControl from './CameraControl';
import CameraDirection from './CameraDirection';
import DataCamera from './CameraData';

const CameraScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topLeft}>
        <DataCamera />
      </View>
      <View style={styles.bottomRight}>
        <CameraControl />
      </View>
      <View style={styles.bottomLeft}>
        <CameraDirection />
      </View>
      <View style={styles.center}>
        <Text style={styles.centerText}>Interface de la caméra</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topLeft: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  bottomRight: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  bottomLeft: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  center: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CameraScreen;
