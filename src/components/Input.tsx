import React, { useState } from 'react';
import { StyleSheet, Text, Pressable, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export type Props = {
  title: string;
  placeholder: string;
};

const Input: React.FC<Props> = ({
  title,
  placeholder,
}) => {

  const [value, setValue] = useState('')
  console.log(value)

  const test = () => {
    console.log('works')
  }

  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        onChangeText={newValue => setValue(newValue)}
        defaultValue={value}
        style={styles.txtInput} />
      <Pressable onPress={() => test()}>
        <AntDesign name="search1" size={24} color="black" />
      </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
  txtInput: {
    height: 40,
    width: "98%",
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    marginBottom: 50,
  },
});

export default Input;