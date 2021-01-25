import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

export default function Annonces({ navigation }) {
  let annonces = [];
  let type = '';
  data.annonces.forEach( annonce => {

    if(annonce.payement == 'an') type = '/an';
    else if(annonce.payement == 'hebdomadaire') type = '/semaine';
    else if(annonce.payement == 'mensuel') type = '/mois';
    else type = '';

    annonces.push(
        <Layout>
            <Text>{ annonce.titre }</Text>
            <Text>Prix: { annonce.prix }€{ type } </Text>
            <Button
            title="Plus de détails"
            onPress={() =>
            navigation.navigate('Annonce', { annonce: annonce })
            }
            />
        </Layout>
     );

  });

  return (
    <View>
        { annonces }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const data = {
    annonces: [
        {
            titre: 'Appartement simpa',
            prix: 256000,
            payement: 'permanent',
            img: 'annonce1'
        },
        {
            titre: 'Location vacances',
            prix: 800,
            payement: 'hebdomadaire',
            img: 'annonce2'

        },
        {
            titre: 'Location étudiante',
            prix: 640,
            payement: 'mensuel',
            img: 'annonce3'
        }
    ]
}
