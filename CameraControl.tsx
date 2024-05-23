import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

// Définition des types de direction pour les boutons de contrôle
type Direction = 'Avancer' | 'Reculer' | 'Gauche' | 'Droite';

// Composant CameraControl pour contrôler la direction du robot et prendre des photos
const CameraControl = () => {
  // Fonction pour gérer l'appui sur les boutons de direction
  const handleDirectionPress = (direction: Direction) => {
    console.log(`Bouton ${direction} pressé !`);
    // Logique pour contrôler le robot en fonction de la direction pressée
  };

  // Fonction pour gérer l'appui sur le bouton de prise de photo
  const handleTakePhotoPress = () => {
    console.log('Bouton "Prendre une photo" pressé !');
    // Logique pour prendre une photo
  };

  return (
    <View style={styles.container}>
      {/* Ligne pour le bouton "Avancer" */}
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => handleDirectionPress('Avancer')}
          style={[styles.triangle, styles.triangleTop]}
        />
      </View>
      {/* Ligne pour les boutons "Gauche", "Prendre une photo" et "Droite" */}
      <View style={styles.row}>
        <View style={styles.triangleContainer}>
          <TouchableOpacity
            onPress={() => handleDirectionPress('Gauche')}
            style={[styles.triangle, styles.triangleLeft]}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleTakePhotoPress}
            style={styles.takePhotoButton}
          >
            <View style={styles.innerCircle} />
          </TouchableOpacity>
        </View>
        <View style={styles.triangleContainer}>
          <TouchableOpacity
            onPress={() => handleDirectionPress('Droite')}
            style={[styles.triangle, styles.triangleRight]}
          />
        </View>
      </View>
      {/* Ligne pour le bouton "Reculer" */}
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => handleDirectionPress('Reculer')}
          style={[styles.triangle, styles.triangleBottom]}
        />
      </View>
    </View>
  );
};

// Styles pour les composants
const styles = StyleSheet.create({
  // Conteneur principal pour les boutons de contrôle
  container: {
    position: 'absolute',
    bottom: 50, // Ajuster la position verticale selon vos préférences
    left: 80, // Ajuster la position horizontale selon vos préférences
  },
  // Style pour une ligne de boutons
  row: {
    flexDirection: 'row',
  },
  // Style de base pour les triangles
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 25,
    borderRightWidth: 25,
  },
  // Style pour le triangle "Avancer"
  triangleTop: {
    borderTopWidth: 0,
    borderBottomWidth: 25,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'black',
    marginHorizontal: 40,
  },
  // Style pour le triangle "Reculer"
  triangleBottom: {
    borderTopWidth: 25,
    borderBottomWidth: 0,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'black',
    marginHorizontal: 40,
  },
  // Style pour le triangle "Gauche"
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
  // Style pour le triangle "Droite"
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
  // Conteneur pour chaque flèche
  triangleContainer: {
    width: 50, // Largeur fixe pour chaque conteneur de flèche
  },
  // Conteneur pour le bouton de prise de photo
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Style pour le bouton de prise de photo
  takePhotoButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Style pour le cercle interne du bouton de prise de photo
  innerCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});

export default CameraControl;
