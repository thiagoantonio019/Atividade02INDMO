import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Inicio from '../pages/Inicio'

import Cursos from '../pages/Cursos'

import Contato from '../pages/Contato'

const Tab = createBottomTabNavigator();

export default function Routes() {

  return (
    
      <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
        tabBarStyle:{
          
        }
      }}
      >
        <Tab.Screen
          name='Inicio'
          component={Inicio}
          options={{
            tabBarLabel: 'inicio',
              
             
              headerStyle:{
               
                
              },
              
              tabBarIcon:({color, size}) => {
                return <FontAwesome name='home' color={color} size={size}></FontAwesome>

                
              }
            }}
        />
        <Tab.Screen
          name='Cursos'
          component={Cursos}
          options={{
            title: 'Cursos',
              headerTintColor: 'black',
              headerStyle:{
                backgroundColor:'#fff',
                
              },
            tabBarIcon:({color, size}) => {
              return <FontAwesome name='info-circle' color={color} size={size}></FontAwesome>}
          }}
          
          
        />
      <Tab.Screen
          name='Contato'
          component={Contato}
          options={{
            title: 'Contato',
              headerTintColor: 'black',
              headerStyle:{
                backgroundColor:'#fff',
                
              },
            tabBarIcon:({color, size}) => {
              return <FontAwesome name='mobile'color={color} size={size}></FontAwesome>}}}
        
        /> 
      </Tab.Navigator>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
