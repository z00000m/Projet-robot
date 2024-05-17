import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

type RootStackParamList = {
  Main: undefined;
  Menu: undefined;
};

type HeaderProps = {
  navigation: NavigationProp<RootStackParamList>;
  title: string; // Ajoutez une prop pour le titre
};

export default function Header({ navigation, title }: HeaderProps) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Menu')}>
        <Image
          source={require('./menuIcon.png')} // Chemin vers votre image de menu
          style={styles.menuIcon}
        />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text> {/* Utilisez le titre fourni par la prop */}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  menuIcon: {
    width: 24,
    height: 24,
    marginRight: 10, // Ajouté pour un espace entre l'image et le titre
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10, // Espace entre l'image et le titre
  },
});
