import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import websocket from './websocket'; // Import the WebSocket module

type Direction = 'Avancer' | 'Reculer' | 'Gauche' | 'Droite';

const directions: Record<Direction | 'Stop', string> = {
  Avancer: 'Z',
  Reculer: 'S',
  Gauche: 'Q',
  Droite: 'D',
  Stop: 'X',
};

const CameraControl = () => {
  const handleDirectionPress = (direction: Direction | 'Stop') => {
    console.log(`Bouton ${direction} pressé !`);
    const command = directions[direction];
    websocket.sendCommand(command); // Send the corresponding character via WebSocket
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleDirectionPress('Avancer')} style={[styles.triangle, styles.triangleTop]} />
      </View>
      <View style={styles.row}>
        <View style={styles.triangleContainer}>
          <TouchableOpacity onPress={() => handleDirectionPress('Gauche')} style={[styles.triangle, styles.triangleLeft]} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => handleDirectionPress('Stop')} style={styles.stopButton}>
            <View style={styles.innerCircle} />
          </TouchableOpacity>
        </View>
        <View style={styles.triangleContainer}>
          <TouchableOpacity onPress={() => handleDirectionPress('Droite')} style={[styles.triangle, styles.triangleRight]} />
        </View>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleDirectionPress('Reculer')} style={[styles.triangle, styles.triangleBottom]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 50,
    left: 80,
  },
  row: {
    flexDirection: 'row',
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 25,
    borderRightWidth: 25,
  },
  triangleTop: {
    borderTopWidth: 0,
    borderBottomWidth: 25,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'black',
    marginHorizontal: 40,
  },
  triangleBottom: {
    borderTopWidth: 25,
    borderBottomWidth: 0,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'black',
    marginHorizontal: 40,
  },
  triangleLeft: {
    borderTopWidth: 20,
    borderBottomWidth: 20,
    borderLeftWidth: 0,
    borderRightColor: 'black',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    width: 50,
    marginLeft: -30,
  },
  triangleRight: {
    borderTopWidth: 20,
    borderBottomWidth: 20,
    borderRightWidth: 0,
    borderLeftColor: 'black',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    width: 50,
    marginLeft: 30,
  },
  triangleContainer: {
    width: 50,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  stopButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});

export default CameraControl;
