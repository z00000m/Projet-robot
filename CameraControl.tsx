import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

type Direction = 'Avancer' | 'Reculer' | 'Gauche' | 'Droite';

const CameraControl = () => {
  const handleDirectionPress = (direction: Direction) => {
    console.log(`Bouton ${direction} pressé !`);
    // Logique pour contrôler le robot en fonction de la direction pressée
  };

  const handleTakePhotoPress = () => {
    console.log('Bouton "Prendre une photo" pressé !');
    // Logique pour prendre une photo
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
          <TouchableOpacity onPress={handleTakePhotoPress} style={styles.takePhotoButton}>
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
    justifyContent: 'center',
    alignItems: 'center',
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
    width: 50, // Largeur fixe pour la flèche gauche
    marginLeft: -30, // Ajustement de la marge gauche
  },
  triangleRight: {
    borderTopWidth: 20,
    borderBottomWidth: 20,
    borderRightWidth: 0,
    borderLeftColor: 'black',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    width: 50, // Largeur fixe pour la flèche droite
    marginLeft: 30, // Ajustement de la marge gauche
  },
  triangleContainer: {
    width: 50, // Largeur fixe pour chaque conteneur de flèche
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  takePhotoButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'blue',
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
