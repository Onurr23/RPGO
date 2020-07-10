import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen } from 'expo';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import BottomTabNavigator from './navigation/BottomTabNavigator';

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import QuestScreen from "./screens/QuestScreen";
import ItemsScreen from "./screens/ItemsScreen";
import FightScreen from "./screens/FightScreen";


const Stack = createStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}
          options={() => { return { headerShown: false } }}
        />
        <Stack.Screen name="Home" component={HomeScreen}
          options={() => { return { headerShown: false } }}
           />
        <Stack.Screen name="Map" component={MapScreen}
          options={() => { return { headerShown: false } }}
        />
        <Stack.Screen name="Quest" component={QuestScreen}
        options={() => { return { headerShown: false } }}
      />
        <Stack.Screen name="Items" component={ItemsScreen}
          options={() => { return { headerShown: false } }}
        />
        <Stack.Screen name="Fight" component={FightScreen}
          options={() => { return { headerShown: false } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
