import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, TouchableHighlight, Keyboard } from 'react-native';
import { getSupportedVideoFormats } from 'expo/build/AR';

export default function App() {

  const [height, setHeight] = useState(0)
  
  const [weight, setWeight] = useState(0)

  const [Bmi, setBmi] = useState(0)

  const [Indicator, setIndicator] = useState('')

  const calculateBmi = () => {
    Keyboard.dismiss()
    {/*bmic = Bmi Calculation */}
    let bmic = weight / ((height/100)**2)
    setBmi(bmic.toFixed(1))
    if (bmic < 18){
      setIndicator("Underweight")
    }
    else if (bmic < 26){
      setIndicator("Normal")
    }
    else if (bmic < 31){
      setIndicator("Overweight")
    }
    else {
      setIndicator("Obese")
    }
  }

  return (
    <TouchableHighlight onPress={Keyboard.dismiss}>
    <ImageBackground source={require('./imgs/bg.png')} style={{width:'100%', height:'100%'}}>
    <View style={styles.container}>
      <Text style={styles.header}>BMI Calculator</Text>

    {/*Almost similar to div class row*/}
      <View style={{flexDirection:'row'}}>
          <TextInput style={styles.textInputStyle} 
          keyboardType="numeric"
          onChangeText={text=> setHeight(text)} 
          value={height}
          placeholder="Height" />

          <TextInput style={styles.textInputStyle} 
          keyboardType="numeric" 
          onChangeText={text=> setWeight(text)}
          value={weight}
          placeholder="Weight" />
      </View>
    <TouchableHighlight onPress={calculateBmi}>
      <Text style={styles.subHeading}>Calculate</Text>
    </TouchableHighlight>
      <Text style={styles.subHeading2}>{Bmi}</Text>
      <Text style={styles.subHeading2}>{Indicator}</Text>

    </View>
    </ImageBackground>
    </TouchableHighlight>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

  header: {
    fontSize: 30,
    color: 'orange',
    textAlign: 'center',
    marginTop:30,
  },

  input: {
    fontSize: 40,
    textAlign: 'center',
    color: 'lightgrey',
  },

  subHeading: {
    fontSize: 30,
    color: 'orange',
    textAlign:'center',
    padding: 30,
  },

  subHeading2: {
    fontSize: 30,
    color: 'yellow',
    textAlign:'center',
    padding: 30,
  },

  textInputStyle: {
    height:80,
    width:'50%',
    fontSize:50,
    textAlign:"center",
    color:"orange",
    marginTop: 24,
  },

});
