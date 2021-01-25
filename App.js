import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Annonces from './Annonces';
import Annonce from './Annonce';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

const Stack = createStackNavigator();

export default function App() {
  return (
  <ApplicationProvider {...eva} theme={eva.light}>
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Annonces}
            options={{ title: 'Annonces' }}
        />

        <Stack.Screen
            name="Annonce"
            component={Annonce}
            options={{ title: 'Détails' }}
        />
        </Stack.Navigator>
    </NavigationContainer>
  </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
});



