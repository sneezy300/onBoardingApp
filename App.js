import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import OnlineShoppingScreen from './OnlineShoppingScreen'
import AddToCartScreen from './AddToCartScreen'
import PaymentSuccessfulScreen from './PaymentSuccessfulScreen'

export default function App() {
  return (
    <PaymentSuccessfulScreen />

  );
}

