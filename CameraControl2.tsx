import React, { useEffect, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { WebSocket } from 'react-native-websocket';

type Direction = 'Avancer' | 'Reculer' | 'Gauche' | 'Droite' | 'Stop';

const CameraControl = () => {
  const ws = useRef<WebSocket | null>(null);

  useEffect(() => {
    ws.current = new WebSocket('ws://127.0.0.1:1880/ws/robot'); // Chemin WebSocket

    ws.current.onopen = () => {
      console.log('WebSocket Connected');
    };

    ws.current.onmessage = (e) => {
      console.log('Message from server: ', e.data);
    };

    ws.current.onerror = (e) => {
      console.log('WebSocket Error: ', e.message);
    };

    ws.current.onclose = (e) => {
      console.log('WebSocket Closed: ', e.code, e.reason);
    };

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, []);

  const sendCommand = (command: string) => {
    if (ws.current && ws.current.readyState === WebSocket.OPEN) {
      ws.current.send(command);
    } else {
      console.log('WebSocket is not open');
    }
  };

  const handleDirectionPress = (direction: Direction) => {
    console.log(`Bouton ${direction} pressé !`);
    let command = '';
    switch (direction) {
      case 'Avancer':
        command = 'Z';
        break;
      case 'Reculer':
        command = 'S';
        break;
      case 'Gauche':
        command = 'Q';
        break;
      case 'Droite':
        command = 'D';
        break;
      case 'Stop':
        command = 'G';
        break;
    }
    sendCommand(command);
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
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  triangleRight: {
    borderTopWidth: 20,
    borderBottomWidth: 20,
    borderRightWidth: 0,
    borderLeftColor: 'black',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    width: 50,
  },
  triangleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
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
