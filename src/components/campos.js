import React, { useState } from 'react';
import { View, Text, TextInput, CheckBox, Button } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { RadioButton } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';
import { styles } from '../styles/estilos';
import { mobileSelect } from '../styles/mobile';


export const Formulario = () => {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [sexo, setSexo] = useState('');
  const [uf, setUf] = useState('');
  const [linguagens, setLinguagens] = useState({
    java: false,
    javascript: false,
    python: false,
    PHP: false,
  });

  const RadioOption = ({ label, value, status, onPress, color}) => (
    <View style={styles.radioOption}>
      <RadioButton
        value={value}
        status={status === value ? 'checked' : 'unchecked'}
        onPress={() => onPress(value)}
        color={color}
      />
      <Text onPress={() => onPress(value)} style={styles.radioLabel}>
        {label}
      </Text>
    </View>
  );

  const handleCheckboxChange = (val) => {
    setLinguagens({ ...linguagens, [val]: !linguagens[val] });
  };

  const handleSubmit = () => {
    console.log({
      nome,
      dataNascimento,
      sexo,
      uf,
      linguagens: Object.keys(linguagens).filter((val) => linguagens[val]),
    });
    alert("Dados enviados!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FORMULÁRIO DE CADASTRO</Text>
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

      <View>
        <Text style={styles.label}>Sexo</Text>
        <View style={styles.radioGroup}>
          <RadioOption
            label="Masculino"
            value="Masculino"
            status={sexo}
            onPress={setSexo}
            color={styles.radioButton.color}
          />
          <RadioOption
            label="Feminino"
            value="Feminino"
            status={sexo}
            onPress={setSexo}
            color={styles.radioButton.color}
          />
        </View>
      </View>

      <Text style={styles.label}>UF</Text>
      <RNPickerSelect
        onValueChange={(value) => setUf(value)}
        value={uf}
        items={[
          { label: 'AC', value: 'AC' },
          { label: 'AL', value: 'AL' },
          { label: 'AP', value: 'AP' },
          { label: 'AM', value: 'AM' },
          { label: 'BA', value: 'BA' },
          { label: 'CE', value: 'CE' },
          { label: 'DF', value: 'DF' },
          { label: 'ES', value: 'ES' },
          { label: 'GO', value: 'GO' },
          { label: 'MA', value: 'MA' },
          { label: 'MG', value: 'MG' },
          { label: 'MT', value: 'MT' },
          { label: 'MS', value: 'MS' },
          { label: 'PA', value: 'PA' },
          { label: 'PB', value: 'PB' },
          { label: 'PR', value: 'PR' },
          { label: 'PE', value: 'PE' },
          { label: 'PI', value: 'PI' },
          { label: 'RJ', value: 'RJ' },
          { label: 'RN', value: 'RN' },
          { label: 'RS', value: 'RS' },
          { label: 'RO', value: 'RO' },
          { label: 'RR', value: 'RR' },
          { label: 'SC', value: 'SC' },
          { label: 'SE', value: 'SE' },
          { label: 'SP', value: 'SP' },
          { label: 'TO', value: 'TO' },
        ]}
        style={mobileSelect}
        placeholder={{
          label: 'Selecione um estado...',
          value: '',
        }}
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
        <Text style={styles.checkboxOption}>
          <Text style={styles.checkboxLabel}>PHP</Text>
          <CheckBox
            value={linguagens.PHP}
            onValueChange={() => handleCheckboxChange('PHP')}
          />
        </Text>
      </View>

      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};




