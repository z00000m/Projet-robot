// Importations des bibliothèques
import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {RouteProp} from '@react-navigation/native';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import CameraInterface from './CameraInterface.tsx';
import CameraDataScreen from './CameraDataScreen.tsx';

// Import des images avec require
const HomeIcon = require('./Home.png');
const CameraIcon = require('./Camera.png');
const GalleryIcon = require('./Galerie.png');
const SettingsIcon = require('./Settings.png');
const RobotImage = require('./Robot.png');

// Définition des composants pour chaque écran

// Ecran d'accueil
const HomeScreen = () => (
  <View style={styles.homeContainer}>
    <Text style={styles.headerText}>Robot de reconnaissance</Text>
    <Image source={RobotImage} style={styles.headerImage} />
  </View>
);

// Ecran Camera
const CameraScreen = () => (
  <View style={styles.screenContainer}>
    <CameraInterface />
  </View>
);

// Ecran Galerie
const GalleryScreen = () => (
  <View style={styles.screenContainer}>
    <Text>Vos Photos</Text>
  </View>
);

// Ecran Données
const DataScreen = () => {
  return (
    <View style={styles.screenContainer}>
      <CameraDataScreen />
    </View>
  );
};

// Types pour les props de l'icône de la barre de navigation
type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

// Types pour les options de navigation de la barre de navigation
type ScreenOptionsProps = {
  route: RouteProp<Record<string, object | undefined>, string>;
};

// Options de navigation pour la barre de navigation
const screenOptions = ({ route }: ScreenOptionsProps): BottomTabNavigationOptions => ({
  tabBarIcon: ({ focused }: TabBarIconProps) => {
    let iconName;

    if (route.name === 'Menu') {
      iconName = HomeIcon;
    } else if (route.name === 'Camera') {
      iconName = CameraIcon;
    } else if (route.name === 'Galerie') {
      iconName = GalleryIcon;
    } else if (route.name === 'Données') {
      iconName = SettingsIcon;
    }

    // On retourne l'image avec le style approprié
    return <Image source={iconName} style={[styles.icon, { tintColor: focused ? '#673ab7' : '#222' }]} />;
  },
  tabBarLabel: ({ focused }) => {
    let label;

    if (route.name === 'Menu') {
      label = 'Menu';
    } else if (route.name === 'Camera') {
      label = 'Camera';
    } else if (route.name === 'Galerie') {
      label = 'Galerie';
    } else if (route.name === 'Données') {
      label = 'Données';
    }

    return <Text style={[styles.label, { color: focused ? '#673ab7' : '#222' }]}>{label}</Text>;
  },
  tabBarStyle: styles.tabBar, // Style de la barre de navigation
  tabBarItemStyle: styles.tabBarItem, // Style des éléments de la barre de navigation
  tabBarLabelStyle: styles.tabBarLabel, // Style des labels de la barre de navigation
});

// Création de la barre de navigation
const Tab = createBottomTabNavigator();

// Fonction principale de l'application
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Menu" component={HomeScreen} />
        <Tab.Screen name="Camera" component={CameraScreen} />
        <Tab.Screen name="Galerie" component={GalleryScreen} />
        <Tab.Screen name="Données" component={DataScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// Styles pour les composants
const styles = StyleSheet.create({
  // Style pour la vue principale
  screenContainer: {
    flex: 1, // Utilisation de tout l'espace disponible
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Style pour la vue d'accueil
  homeContainer: {
    flex: 1,
    justifyContent: 'center', // Centrage vertical des éléments
    alignItems: 'center',
    padding: 20,
  },
  tabBar: {
    position: 'absolute',
    bottom: 5,
    left: 20,
    right: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 40, // Augmenter la hauteur de la barre du menu pour plus d'espace
    backgroundColor: '#ffffff',
    borderTopWidth: 0,
    elevation: 5,
  },
  tabBarItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarLabel: {
    marginTop: 15, // Espacement entre l'image et le titre
  },
  // Style pour les icônes de la barre de navigation
  icon: {
    width: 24, // Taille de l'icône ajustée
    height: 24, // Taille de l'icône ajustée
    marginBottom: 5, // Ajouter de l'espace entre l'icône et le label
  },
  // Style pour les labels de texte
  label: {
    fontSize: 12, // Taille de police ajustée
    color: '#333',
  },
  // Style pour le texte d'en-tête
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    textShadowColor: '#999',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2,
    marginBottom: 20, // Espacement entre le titre et l'image
  },
  headerImage: {
    width: 400, // Largeur de l'image ajustée
    height: 200, // Hauteur de l'image ajustée
    resizeMode: 'contain', // Assurez-vous que l'image s'adapte bien
  },
});

export default App;
