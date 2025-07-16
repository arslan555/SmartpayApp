import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SetupScreen from '../screens/SetupScreen';
import DetailScreen from '../screens/DetailScreen';


export type RootStackParamList = {
  Setup: undefined;
  Detail: { title: string; description: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Setup" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Setup" component={SetupScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;