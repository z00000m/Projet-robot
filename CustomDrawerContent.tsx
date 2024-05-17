// CustomDrawerContent.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer'; // Import du type de navigation pour le tiroir

// Définition des types de paramètres pour la navigation dans le tiroir (ici les paramètres sont tous sans valeurs)
type RootStackParamList = {
  Main: undefined;
  Camera: undefined;
  Galerie: undefined;
};

type CustomDrawerContentProps = {
  navigation: DrawerNavigationProp<RootStackParamList>;
};

const CustomDrawerContent: React.FC<CustomDrawerContentProps> = ({ navigation }) => {
  const handleCameraPress = () => {
    console.log("Bouton de la caméra pressé !");
    navigation.navigate('Camera');
  };

  const handleGaleriePress = () => {
    console.log("Bouton de la galerie pressé !");
    navigation.navigate('Galerie');
  };

  const handleMainPress = () => {
    console.log("Bouton du menu pressé !");
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleMainPress} style={[styles.button, {backgroundColor: '#003366'}]}>
        <Text style={styles.buttonText}>Main</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCameraPress} style={[styles.button, {backgroundColor: '#87CEEB'}]}>
        <Text style={styles.buttonText}>Caméra</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGaleriePress} style={[styles.button, {backgroundColor: '#90EE90'}]}>
        <Text style={styles.buttonText}>Galerie</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomDrawerContent;
