import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FirstWelcomeScreen from './src/screens/FirstWelcomeScreens';
import LoginScreen from './src/screens/LoginScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import QRScannerScreen from './src/screens/QRScannerScreen';
import {createStackNavigator,  } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const Stack = createStackNavigator();

export default function App() {
  return (
         <NavigationContainer style = {styles.container}>

        <Stack.Navigator>

        <Stack.Screen options={{header: ()=> null, }} name ='Get Started' component = {FirstWelcomeScreen} />
        <Stack.Screen options={{header: ()=> null, }} name ='Welcome' component = {WelcomeScreen} />
        <Stack.Screen options={{headerStyle : 
         { backgroundColor: 'red', height:75},
          
        headerTintColor: 'white',
        headerTitleStyle: {
          color:'white',
          
        } 
        }} name ='Register' component = {RegisterScreen} />
        <Stack.Screen options={{headerStyle : {
          backgroundColor : 'red'
        },
        headerTintColor : 'white'}} name ='Sign In' component = {LoginScreen} />
        <Stack.Screen options = {({navigation}) => {
          return {
            headerLeft : () => null,
            headerStyle : {
              backgroundColor : 'red',
              height:75,
            },
            headerTintColor : 'white',
            headerRight : () => {
              return (
                <TouchableOpacity     onPress = {()=>navigation.navigate('My Profile') } >
                  <AntDesign name = "user" size = {24} color="white" style={{marginRight:30}} />
                   
                </TouchableOpacity>
              )
            }
          }
        }} name ='Ampersand' component = {HomeScreen} />
         <Stack.Screen options={{headerStyle : {
           backgroundColor : 'red',
           height:75,
         },
         headerTintColor : 'white' }} name ='My Profile' component = {DetailsScreen} />

        <Stack.Screen  name ='Scanner' component = {QRScannerScreen} />


        </Stack.Navigator>

      </NavigationContainer>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fff'
    
  },
 
});
