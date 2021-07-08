import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

import OnlineShoppingScreen from './src/components/screens/OnlineShoppingScreen'
import AddToCartScreen from './src/components/screens/AddToCartScreen'
import PaymentSuccessfulScreen from './src/components/screens/PaymentSuccessfulScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="onlineShopping" component={OnlineShoppingScreen} />
        <Stack.Screen name="AddToCart" component={AddToCartScreen} />
        <Stack.Screen name="PaymentSuccessful" component={PaymentSuccessfulScreen} />
      </Stack.Navigator>

    </NavigationContainer>

  );
}

