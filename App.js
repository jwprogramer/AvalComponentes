import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Formulario } from './src/components/campos';

export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <Formulario />
    </SafeAreaView>


  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});