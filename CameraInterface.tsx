import React from 'react';
import { View, StyleSheet } from 'react-native';
import CameraDirection from './CameraDirection';
import CameraControl from './CameraControl';
import CameraData from './CameraData';

const CameraInterface = () => {
  return (
    // Container principal contenant tous les éléments de l'interface de la caméra
    <View style={styles.container}>
      {/* Affichage des données de la caméra */}
      <View style={styles.topLeft}>
        <CameraData />
      </View>
      {/* Contrôle de la direction de la caméra */}
      <View style={styles.bottomLeft}>
        <CameraDirection />
      </View>
      {/* Contrôle de la caméra */}
      <View style={styles.bottomRight}>
        <CameraControl />
      </View>
    </View>
  );
};

// Styles pour positionner les éléments de l'interface de la caméra
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Disposition horizontale des éléments
  },
  topLeft: {
    flex: 1,
    justifyContent: 'flex-start', // Alignement des éléments en haut de l'espace disponible
    alignItems: 'flex-start', // Alignement des éléments à gauche de l'espace disponible
  },
  bottomLeft: {
    flex: 1,
    justifyContent: 'flex-end', // Alignement des éléments en bas de l'espace disponible
    alignItems: 'flex-start', // Alignement des éléments à gauche de l'espace disponible
  },
  bottomRight: {
    flex: 1,
    justifyContent: 'flex-end', // Alignement des éléments en bas de l'espace disponible
    alignItems: 'flex-end', // Alignement des éléments à droite de l'espace disponible
  },
});

export default CameraInterface;
