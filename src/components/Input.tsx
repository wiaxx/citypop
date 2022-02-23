import React, { useState, useEffect } from 'react';
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
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

// &featureCode=PPLORfeatureCode=PPLAORfeatureCode=PPLA2ORfeatureCode=PPLA3ORfeatureCode=PPLA4ORfeatureCode=PPLA5

  const fetchData = async (param: string) => {
    console.log(encodeURIComponent(param))
    try {
      setLoading(true)
      const response = await fetch(`http://api.geonames.org/searchJSON?username=weknowit&name_startsWith=${param}&maxRows=1&featureClass=P`);
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false)
      setValue('')
    }
  };

  // useEffect(() => {
  //   fetchData();
  // }, [param])

const test = (input: any) => {
  console.log('works ' + input)
}

return (
  <>
    <Text style={styles.title}>{title}</Text>
    <TextInput
      placeholder={placeholder}
      onChangeText={newValue => setValue(newValue)}
      defaultValue={value}
      style={styles.txtInput} />
    <Pressable onPress={() => fetchData(encodeURIComponent(value))}>
      <AntDesign name="search1" size={24} color="black" />
    </Pressable>

    {
      // loading 
      //   ? <Text>Loading...</Text>
      //   : <Text>{data.geonames[0].name}, {data.geonames[0].population}</Text>
    }
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