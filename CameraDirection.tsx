import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

type Direction = 'Monter' | 'Descendre' | 'Tourner Caméra gauche' | 'Tourner Caméra droite';

const CameraDirection = () => {
  const handleDirectionPress = (direction: Direction) => {
    console.log(`Bouton ${direction} pressé !`);
    // Logique pour contrôler la direction de la caméra du robot
  };

  const handleTakePhotoPress = () => {
    console.log('Bouton "Prendre une photo" pressé !');
    // Logique pour prendre une photo
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleDirectionPress('Monter')} style={[styles.triangle, styles.triangleTop]} />
      </View>
      <View style={styles.row}>
        <View style={styles.triangleContainer}>
          <TouchableOpacity onPress={() => handleDirectionPress('Tourner Caméra gauche')} style={[styles.triangle, styles.triangleLeft]} />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleTakePhotoPress} style={styles.stopButton}>
            <View style={styles.innerCircle} />
          </TouchableOpacity>
        </View>
        <View style={styles.triangleContainer}>
          <TouchableOpacity onPress={() => handleDirectionPress('Tourner Caméra droite')} style={[styles.triangle, styles.triangleRight]} />
        </View>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handleDirectionPress('Descendre')} style={[styles.triangle, styles.triangleBottom]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 50, // Ajuster la position verticale selon vos préférences
    right: 340, // Ajuster la position horizontale selon vos préférences
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center', // Centrer les éléments horizontalement
    alignItems: 'center', // Centrer les éléments verticalement
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
  },
  triangleRight: {
    borderTopWidth: 20,
    borderBottomWidth: 20,
    borderRightWidth: 0,
    borderLeftColor: 'black',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    width: 50, // Largeur fixe pour la flèche droite
  },
  triangleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50, // Largeur fixe pour chaque conteneur de flèche
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20, // Ajustement de la marge pour centrer le bouton
  },
  stopButton: {
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


export default CameraDirection;
