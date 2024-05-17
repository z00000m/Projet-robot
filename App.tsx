import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Image, StyleSheet } from 'react-native';
import CustomDrawerContent from './CustomDrawerContent'; // Import du composant de contenu personnalisé du tiroir
import Header from './Header'; // Import du composant Header
import CameraScreen from './CameraScreen'; // Import du composant CameraScreen

const Drawer = createDrawerNavigator();

// Composant pour l'écran principal de l'application
const MainScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Robot de Reconnaissance</Text>
    <Image source={require('./robot.png')} style={styles.image} />
  </View>
);

// Styles pour le composant MainScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 400,
    height: 200,
    marginTop: 35, 
    marginBottom: 35,
  },
  text: {
    fontSize: 28,
    fontFamily: 'Roboto',
  },
});

// Composant pour l'écran Galerie
const GalerieScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  </View>
);

// Composant principal de l'application
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Main" component={MainScreen} />
        <Drawer.Screen name="Camera" component={CameraScreen} />
        <Drawer.Screen name="Galerie" component={GalerieScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
