// src/components/Form.js
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Picker, CheckBox, Button } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import RNPickerSelect from 'react-native-picker-select';

export const Form = () => {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [sexo, setSexo] = useState('');
  const [uf, setUf] = useState('');
  const [linguagens, setLinguagens] = useState({
    java: false,
    javascript: false,
    python: false,
  });

  const handleCheckboxChange = (key) => {
    setLinguagens({ ...linguagens, [key]: !linguagens[key] });
  };

  const handleSubmit = () => {
    // Lógica para lidar com o envio do formulário
    console.log({
      nome,
      dataNascimento,
      sexo,
      uf,
      linguagens: Object.keys(linguagens).filter((key) => linguagens[key]),
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Data de Nascimento</Text>
      <TextInputMask
        type={'datetime'}
        options={{
          format: 'DD/MM/YYYY',
        }}
        value={dataNascimento}
        onChangeText={setDataNascimento}
        style={styles.input}
      />

      <Text style={styles.label}>Sexo</Text>
      <View style={styles.radioGroup}>
        <Text onPress={() => setSexo('Masculino')} style={styles.radioOption}>
          <Text style={styles.radioLabel}>Masculino</Text>
          <CheckBox value={sexo === 'Masculino'} />
        </Text>
        <Text onPress={() => setSexo('Feminino')} style={styles.radioOption}>
          <Text style={styles.radioLabel}>Feminino</Text>
          <CheckBox value={sexo === 'Feminino'} />
        </Text>
      </View>

      <Text style={styles.label}>UF</Text>
      <RNPickerSelect
        onValueChange={(value) => setUf(value)}
        items={[
          { label: 'SP', value: 'SP' },
          { label: 'RJ', value: 'RJ' },
          { label: 'MG', value: 'MG' },
          // Adicione outras UFs conforme necessário
        ]}
        style={pickerSelectStyles}
      />

      <Text style={styles.label}>Linguagens</Text>
      <View style={styles.checkboxGroup}>
        <Text style={styles.checkboxOption}>
          <Text style={styles.checkboxLabel}>Java</Text>
          <CheckBox
            value={linguagens.java}
            onValueChange={() => handleCheckboxChange('java')}
          />
        </Text>
        <Text style={styles.checkboxOption}>
          <Text style={styles.checkboxLabel}>JavaScript</Text>
          <CheckBox
            value={linguagens.javascript}
            onValueChange={() => handleCheckboxChange('javascript')}
          />
        </Text>
        <Text style={styles.checkboxOption}>
          <Text style={styles.checkboxLabel}>Python</Text>
          <CheckBox
            value={linguagens.python}
            onValueChange={() => handleCheckboxChange('python')}
          />
        </Text>
      </View>

      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioLabel: {
    marginRight: 8,
  },
  checkboxGroup: {
    marginVertical: 8,
  },
  checkboxOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  checkboxLabel: {
    marginRight: 8,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    marginVertical: 8,
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    marginVertical: 8,
  },
});


