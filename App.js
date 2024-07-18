import React from 'react';
import { View } from 'react-native';
import { Formulario } from './src/components/campos';
import { stylePrincipal } from './src/styles/pagInit';

export default function App() {
  return (

    <View style={stylePrincipal.container}>
      <Formulario />
    </View>

  );

}
