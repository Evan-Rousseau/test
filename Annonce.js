import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button, Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

export default function  Annonce({ navigation, route }){
    let logo;
    if(route.params.annonce.img == 'annonce1') logo = require('./img/annonce1.png');
    else if(route.params.annonce.img = '.annonce2') logo = require('./img/annonce2.png');
    else if(route.params.annonce.img = 'annonce3') logo = require('./img/annonce3.png');
    else logo = require('./img/default_annonce.png');

    return (
        <Layout>
            <Image source={logo} style={{ width: 300, height: 200 }} />
            <Text>This is {route.params.annonce.titre}'s details page</Text>
        </Layout>
    );
};